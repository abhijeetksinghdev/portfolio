"use client";

import { profile } from "@/lib/data";
import { ChevronUpIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-3 gap-y-3 px-6 font-mono text-[10px] uppercase tracking-wider text-mist/70 md:grid-cols-[1fr_auto] md:px-10 md:text-[11px]">
        <span>© {new Date().getFullYear()} {profile.name}</span>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="col-start-2 row-start-1 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-mist transition-colors hover:border-indigo-400/50 hover:text-indigo-300"
        >
          <ChevronUpIcon className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}