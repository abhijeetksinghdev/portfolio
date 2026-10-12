"use client";

import { useEffect, useRef, useState } from "react";
import { GlobeIcon } from "./icons";

type Language = {
  code: string;
  label: string;
  flag: string;
};

type TranslatorStatus = "idle" | "loading" | "ready" | "error";

const LANGUAGES: Language[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "German", flag: "🇩🇪" },
  { code: "fr", label: "French", flag: "🇫🇷" },
  { code: "es", label: "Spanish", flag: "🇪🇸" },
  { code: "it", label: "Italian", flag: "🇮🇹" },
  { code: "nl", label: "Dutch", flag: "🇳🇱" },
  { code: "pt", label: "Portuguese", flag: "🇵🇹" },
  { code: "pl", label: "Polish", flag: "🇵🇱" },
  { code: "ro", label: "Romanian", flag: "🇷🇴" },
  { code: "cs", label: "Czech", flag: "🇨🇿" },
  { code: "hu", label: "Hungarian", flag: "🇭🇺" },
  { code: "sv", label: "Swedish", flag: "🇸🇪" },
  { code: "da", label: "Danish", flag: "🇩🇰" },
  { code: "no", label: "Norwegian", flag: "🇳🇴" },
  { code: "fi", label: "Finnish", flag: "🇫🇮" },
  { code: "el", label: "Greek", flag: "🇬🇷" },
  { code: "uk", label: "Ukrainian", flag: "🇺🇦" },
];

const TRANSLATED_LANGUAGE_CODES = LANGUAGES
  .filter(({ code }) => code !== "en")
  .map(({ code }) => code)
  .join(",");

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<TranslatorStatus>("idle");
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const loadPromiseRef = useRef<Promise<void> | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const loadTranslator = () => {
    if (status === "ready" || loadPromiseRef.current) return;

    setStatus("loading");
    const googleWindow = window as any;

    loadPromiseRef.current = new Promise<void>((resolve, reject) => {
      let attempts = 0;

      const waitForSelect = () => {
        const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
        if (select && select.options.length > 1) {
          resolve();
          return;
        }

        attempts += 1;
        if (attempts >= 80) {
          reject(new Error("Translator initialization timed out"));
          return;
        }
        window.setTimeout(waitForSelect, 100);
      };

      const initialize = () => {
        const TranslateElement = googleWindow.google?.translate?.TranslateElement;
        const container = document.getElementById("google_translate_element");
        if (!TranslateElement || !container) {
          reject(new Error("Translator API is unavailable"));
          return;
        }

        const existingSelect = document.querySelector<HTMLSelectElement>(".goog-te-combo");
        if (!existingSelect) {
          new TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: TRANSLATED_LANGUAGE_CODES,
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
        waitForSelect();
      };

      googleWindow.googleTranslateElementInit = initialize;

      if (googleWindow.google?.translate?.TranslateElement) {
        initialize();
        return;
      }

      let script = document.getElementById("google-translate-script") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.onerror = () => reject(new Error("Translator script failed to load"));
        document.head.appendChild(script);
      } else {
        script.addEventListener("load", initialize, { once: true });
        script.addEventListener("error", () => reject(new Error("Translator script failed to load")), { once: true });
      }
    });

    loadPromiseRef.current
      .then(() => {
        if (mountedRef.current) setStatus("ready");
      })
      .catch(() => {
        loadPromiseRef.current = null;
        document.getElementById("google-translate-script")?.remove();
        document.getElementById("google_translate_element")?.replaceChildren();
        if (mountedRef.current) setStatus("error");
      });
  };

  const toggleMenu = () => {
    setOpen((current) => {
      const next = !current;
      if (next) loadTranslator();
      return next;
    });
  };

  const translate = (languageCode: string) => {
    if (languageCode === "en") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
      window.location.reload();
      return;
    }

    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!select || status !== "ready") return;

    select.value = languageCode;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    setOpen(false);
  };

  const retry = () => {
    setStatus("idle");
    loadPromiseRef.current = null;
    window.setTimeout(loadTranslator, 0);
  };

  return (
    <div ref={menuRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleMenu}
        aria-label="Translate portfolio"
        aria-expanded={open}
        aria-controls="language-picker"
        title="Translate portfolio"
        className="icon-btn"
      >
        <GlobeIcon className="h-4 w-4" />
      </button>

      {open && (
        <div id="language-picker" role="dialog" aria-label="Choose a language" className="fixed left-3 right-3 top-[4.5rem] z-50 overflow-hidden border border-[var(--line)] bg-[var(--surface)] shadow-card sm:absolute sm:left-auto sm:right-0 sm:top-full sm:mt-2 sm:w-[min(20rem,calc(100vw-1.5rem))]">
          <div className="border-b border-[var(--line)] p-4">
            <p className="font-display text-sm font-semibold text-offwhite">Translate portfolio</p>
            <p className="mt-1 text-xs leading-5 text-mist">English is the original. Technical terms may remain in English.</p>
          </div>

          <div className="max-h-[min(22rem,calc(100dvh-10rem))] overflow-y-auto p-1.5">
            {LANGUAGES.map((language) => {
              const disabled = language.code !== "en" && status !== "ready";
              return (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => translate(language.code)}
                  disabled={disabled}
                  className="flex min-h-11 w-full items-center justify-between px-3 py-2 text-left transition-colors hover:bg-[var(--surface-2)] hover:text-offwhite disabled:cursor-wait disabled:opacity-45"
                >
                  <span className="font-mono text-xs font-medium text-mist">{language.label}</span>
                  <span aria-hidden="true" className="text-lg leading-none">{language.flag}</span>
                </button>
              );
            })}
          </div>

          {status === "loading" && (
            <p role="status" className="border-t border-[var(--line)] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.1em] text-cyan">Loading secure translation…</p>
          )}
          {status === "error" && (
            <div className="flex items-center justify-between gap-3 border-t border-[var(--line)] px-4 py-3">
              <p role="status" className="text-xs text-mist">Translation is temporarily unavailable.</p>
              <button type="button" onClick={retry} className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-indigo-400">Retry</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
