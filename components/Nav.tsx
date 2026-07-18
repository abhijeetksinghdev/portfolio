"use client";

import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { DownloadIcon } from "./icons";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Featured Work" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "how-i-work", label: "How I Work" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--line)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex" aria-label="Back to top">
          <LogoMark className="h-8 w-8" />
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  active === s.id
                    ? "bg-[var(--surface-2)] text-offwhite"
                    : "text-mist hover:text-offwhite"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
  href="/resume/Abhijeet-Kumar-Singh-Resume.pdf"
  download
  aria-label="Download resume"
  title="Download resume"
  className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-mist transition-colors hover:border-indigo-400/60 hover:text-indigo-300"
>
            <DownloadIcon className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((isOpen) => !isOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-mist transition-colors hover:border-indigo-400/50 hover:text-indigo-300 xl:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[6px] h-px w-4 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-px w-4 bg-current transition-transform ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--nav-bg)] px-6 py-4 backdrop-blur-md xl:hidden md:px-10">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-2 sm:grid-cols-3">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                    active === section.id
                      ? "bg-[var(--surface-2)] text-offwhite"
                      : "text-mist hover:bg-[var(--surface-2)] hover:text-offwhite"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-3 flex max-w-6xl gap-2 border-t border-[var(--line)] pt-3">
            <a href="/resume/Abhijeet-Kumar-Singh-Resume.pdf" target="_blank" rel="noreferrer" className="flex-1 rounded-lg border border-[var(--line)] px-3 py-2.5 text-center font-mono text-[11px] uppercase tracking-wider text-offwhite">
              Preview resume
            </a>
            <a href="/resume/Abhijeet-Kumar-Singh-Resume.pdf" download className="flex items-center justify-center rounded-lg border border-[var(--line)] px-3 text-mist" aria-label="Download resume">
              <DownloadIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
