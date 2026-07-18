"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { GlobeIcon } from "./icons";

type Language = { code: string; label: string };

const INITIAL_LANGUAGES: Language[] = [{ code: "en", label: "English" }];

// Google Translate returns the language names and codes. This map only chooses
// the flag to display beside each language; the UN flag is a graceful fallback
// for languages without one home country.
const LANGUAGE_COUNTRIES: Record<string, string> = {
  af: "ZA", am: "ET", ar: "SA", ay: "BO", az: "AZ", be: "BY", bg: "BG",
  bm: "ML", bn: "BD", bho: "IN", bs: "BA", ca: "ES", ceb: "PH", co: "FR",
  cs: "CZ", cy: "GB", da: "DK", de: "DE", doi: "IN", dv: "MV", ee: "GH",
  el: "GR", eo: "UN", es: "ES", et: "EE", eu: "ES", fa: "IR", fi: "FI",
  fil: "PH", fr: "FR", fy: "NL", ga: "IE", gd: "GB", gl: "ES", gn: "PY",
  gom: "IN", gu: "IN", ha: "NG", haw: "US", he: "IL", hi: "IN", hmn: "CN",
  hr: "HR", ht: "HT", hu: "HU", hy: "AM", id: "ID", ig: "NG", ilo: "PH",
  is: "IS", it: "IT", iw: "IL", ja: "JP", jv: "ID", ka: "GE", kk: "KZ",
  km: "KH", kn: "IN", ko: "KR", kri: "SL", ku: "IQ", ky: "KG", la: "VA",
  lb: "LU", lg: "UG", ln: "CD", lo: "LA", lt: "LT", lus: "IN", lv: "LV",
  mai: "IN", mg: "MG", mi: "NZ", mk: "MK", ml: "IN", mn: "MN", mni: "IN",
  mr: "IN", ms: "MY", mt: "MT", my: "MM", ne: "NP", nl: "NL", no: "NO",
  ny: "MW", om: "ET", or: "IN", pa: "IN", pl: "PL", ps: "AF", pt: "PT",
  qu: "PE", ro: "RO", ru: "RU", rw: "RW", sa: "IN", sd: "PK", si: "LK",
  sk: "SK", sl: "SI", sm: "WS", sn: "ZW", so: "SO", sq: "AL", sr: "RS",
  st: "LS", su: "ID", sv: "SE", sw: "TZ", ta: "IN", te: "IN", tg: "TJ",
  th: "TH", ti: "ER", tk: "TM", tl: "PH", tr: "TR", ts: "ZA", tt: "RU",
  ug: "CN", uk: "UA", ur: "PK", uz: "UZ", vi: "VN", xh: "ZA", yi: "IL",
  yo: "NG", zh: "CN", zu: "ZA", en: "GB", "zh-CN": "CN", "zh-TW": "TW", 
  ab: "GE", ace: "ID", ach: "UG", aa: "DJ", 
};

function flagForLanguage(languageCode: string) {
  const country =
    LANGUAGE_COUNTRIES[languageCode] ??
    LANGUAGE_COUNTRIES[languageCode.split("-")[0]];

  if (!country) return "🌐";

  return String.fromCodePoint(
    ...country.split("").map(
      (letter) => 0x1f1e6 + letter.charCodeAt(0) - 65
    )
  );
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [languages, setLanguages] = useState(INITIAL_LANGUAGES);
  const [query, setQuery] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const filteredLanguages = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return normalizedQuery
      ? languages.filter((language) => language.label.toLocaleLowerCase().includes(normalizedQuery))
      : languages;
  }, [languages, query]);

  useEffect(() => {
    let cancelled = false;
    const google = window as any;
    const isApiReady = () => Boolean(google.google?.translate?.TranslateElement);
    const markReady = () => {
      if (!cancelled && isApiReady()) setReady(true);
    };

    // The element script is shared across mounts.  Its presence does not mean
    // it has finished executing (notably during React Strict Mode remounts).
    google.googleTranslateElementInit = markReady;

    let container = document.getElementById("google_translate_element");
    if (!container) {
      container = document.createElement("div");
      container.id = "google_translate_element";
      container.style.position = "absolute";
      container.style.left = "-9999px";
      document.body.appendChild(container);
    }

    let script = document.getElementById(
      "google-translate-script"
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    }

    script.addEventListener("load", markReady);
    markReady();

    return () => {
      cancelled = true;
      script?.removeEventListener("load", markReady);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const el = document.getElementById("google_translate_element");
    if (el && !el.hasChildNodes()) {
      const TranslateElement = (window as any).google?.translate?.TranslateElement;
      if (!TranslateElement) return;

      new TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element"
      );
    }

    // Google inserts and fills this select asynchronously. Watch its container
    // so the menu is updated only after the complete list is available.
    const syncLanguages = () => {
      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (!select || select.options.length < 2) return false;

      setLanguages(
        [INITIAL_LANGUAGES[0], ...Array.from(select.options)
          .filter((option) => option.value)
          .map((option) => ({ code: option.value, label: option.text }))]
          .filter((language, index, all) => all.findIndex(({ code }) => code === language.code) === index)
      );
      return true;
    };

    if (syncLanguages()) return;

    const observer = new MutationObserver(() => {
      if (syncLanguages()) observer.disconnect();
    });
    if (el) observer.observe(el, { childList: true, subtree: true });

    // Some Google updates change option nodes without a child-list mutation.
    const poll = window.setInterval(() => {
      if (syncLanguages()) {
        observer.disconnect();
        window.clearInterval(poll);
      }
    }, 100);

    return () => {
      observer.disconnect();
      window.clearInterval(poll);
    }
  }, [ready]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function translate(langCode: string) {
    if (langCode === "en") {
      // Google Translate does not include English in its generated list because
      // it is the source language. Clearing its cookie restores the original.
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
      window.location.reload();
      return;
    }

    const select = document.querySelector<HTMLSelectElement>(
      ".goog-te-combo"
    );
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }
    setOpen(false);
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => {
          setQuery("");
          setOpen((isOpen) => !isOpen);
        }}
        aria-label="Translate page"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-mist transition-colors hover:border-indigo-400/50 hover:text-indigo-300"
      >
        <GlobeIcon className="h-4 w-4" />
      </button>

      {open && (
        <div
  className="
    absolute
    right-0
    top-full
    z-[9999]
    mt-2
    w-80
    max-w-[calc(100vw-2rem)]
    rounded-xl
    border
    border-[var(--line)]
    bg-[var(--surface)]
    shadow-card

    max-[400px]:fixed
    max-[400px]:left-3
    max-[400px]:right-3
    max-[400px]:top-[4.5rem]
    max-[400px]:w-auto
    max-[400px]:mt-0
  "
>
          <div className="border-b border-[var(--line)] p-2">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a language"
              autoFocus
              className="w-full rounded-lg border border-[var(--line)] bg-[var(--surface-2)] px-4 py-2.5 font-mono text-base sm:text-sm text-offwhite outline-none placeholder:text-mist focus:border-indigo-400"
            />
          </div>
          <div className="max-h-[60vh] overflow-y-auto p-1.5">
            {filteredLanguages.map((lang) => (
  <button
    key={lang.code}
    type="button"
    onClick={() => translate(lang.code)}
    className="flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-[var(--surface-2)] hover:text-offwhite"
  >
    <span className="font-mono text-sm text-mist">
      {lang.label}
    </span>

    <span
      aria-hidden="true"
      className="text-lg leading-none"
    >
      {flagForLanguage(lang.code)}
    </span>
  </button>
))}
            {!filteredLanguages.length && (
              <p className="px-3 py-5 text-center font-mono text-xs text-mist">No matching language</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
