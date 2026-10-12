"use client";

import { useEffect, useRef, useState } from "react";
import LogoMark from "./LogoMark";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { DownloadIcon } from "./icons";

const sections = [
  { id: "about", label: "Profile", number: "01" },
  { id: "experience", label: "Experience", number: "02" },
  { id: "projects", label: "Systems", number: "03" },
  { id: "skills", label: "Stack", number: "04" },
  { id: "certifications", label: "Credentials", number: "05" },
  { id: "contact", label: "Contact", number: "06" },
];

export default function Nav() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-40% 0px -52% 0px" }
    );
    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled || mobileOpen ? "border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-xl" : "border-transparent"}`}>
      <nav className="mx-auto flex h-[4.6rem] max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="#top" className="group flex items-center" aria-label="Abhijeet Kumar Singh, back to top">
          <LogoMark className="h-10 w-10 text-offwhite transition-transform group-hover:-rotate-3" />
        </a>

        <ul className="hidden items-stretch border-x border-[var(--line)] lg:flex">
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <li key={section.id} className="border-r border-[var(--line)] last:border-r-0">
                <a href={`#${section.id}`} aria-current={isActive ? "location" : undefined} className={`group flex h-11 items-center gap-2 px-4 font-mono text-[10px] uppercase tracking-[0.13em] transition-colors xl:px-5 ${isActive ? "bg-indigo-400 text-[#12150f]" : "text-mist hover:bg-[var(--chip)] hover:text-offwhite"}`}>
                  <span className={`text-[9px] ${isActive ? "text-[#12150f]/60" : "text-indigo-400"}`}>{section.number}</span>
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <a href="/resume/Abhijeet-Kumar-Singh-Resume.pdf" download className="btn btn-primary hidden h-10 min-h-0 px-4 xl:inline-flex">
            Resume <DownloadIcon className="h-3.5 w-3.5" />
          </a>
          <button ref={menuButtonRef} type="button" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} className="icon-btn lg:hidden">
            <span aria-hidden="true" className="relative h-4 w-4">
              <span className={`absolute left-0 top-1 h-px w-4 bg-current transition-transform ${mobileOpen ? "translate-y-1 rotate-45" : ""}`} />
              <span className={`absolute bottom-1 left-0 h-px w-4 bg-current transition-transform ${mobileOpen ? "-translate-y-1 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      <div id="mobile-navigation" className={`overflow-hidden bg-[var(--nav-bg)] transition-[max-height,opacity] duration-300 lg:hidden ${mobileOpen ? "max-h-[calc(100dvh-4.6rem)] border-t border-[var(--line)] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-auto max-w-[90rem] px-4 py-5 sm:px-6">
          <ul className="border-t border-[var(--line)]">
            {sections.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id} className="border-b border-[var(--line)]">
                  <a href={`#${section.id}`} tabIndex={mobileOpen ? 0 : -1} onClick={() => setMobileOpen(false)} className="flex min-h-14 items-center justify-between py-3 font-display text-lg font-semibold text-offwhite">
                    <span>{section.label}</span>
                    <span className={`font-mono text-[10px] ${isActive ? "text-indigo-400" : "text-mist"}`}>{section.number} ↘</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
            <a href="/resume-preview" target="_blank" rel="noreferrer" tabIndex={mobileOpen ? 0 : -1} className="btn btn-ghost">Preview resume</a>
            <a href="/resume/Abhijeet-Kumar-Singh-Resume.pdf" download tabIndex={mobileOpen ? 0 : -1} className="btn btn-primary px-4" aria-label="Download resume"><DownloadIcon className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
