"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./icons";

const STORAGE_KEY = "aks-theme";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const shouldBeLight = stored ? stored === "light" : prefersLight;
    document.documentElement.classList.toggle("light", shouldBeLight);
    setIsLight(shouldBeLight);
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    window.localStorage.setItem(STORAGE_KEY, next ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-mist transition-colors hover:border-indigo-400/50 hover:text-indigo-300"
    >
      <span className={`transition-all duration-300 ${mounted && isLight ? "scale-100 opacity-100" : "scale-0 opacity-0 absolute"}`}>
        <SunIcon className="h-4 w-4" />
      </span>
      <span className={`transition-all duration-300 ${mounted && !isLight ? "scale-100 opacity-100" : "scale-0 opacity-0 absolute"}`}>
        <MoonIcon className="h-4 w-4" />
      </span>
    </button>
  );
}
