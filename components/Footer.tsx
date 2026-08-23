"use client";

import { profile } from "@/lib/data";
import { ChevronUpIcon } from "./icons";
import { ANALYTICS_PREFERENCES_EVENT } from "@/lib/analytics";

const analyticsEnabled = Boolean(
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()
);

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-x-3 gap-y-3 px-6 font-mono text-[10px] uppercase tracking-wider text-mist md:grid-cols-[1fr_auto_1fr] md:px-10 md:text-[11px]">
        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          {analyticsEnabled && (
            <>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event(ANALYTICS_PREFERENCES_EVENT))}
                className="underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:text-indigo-300"
              >
                Analytics settings
              </button>
            </>
          )}
        </span>
        <span className="col-span-2 border-t border-[var(--line)] pt-3 text-center leading-relaxed md:col-span-1 md:col-start-2 md:row-start-1 md:border-0 md:p-0">{profile.role} · {profile.location.replace("India", "India 🇮🇳")}</span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="col-start-2 row-start-1 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-mist transition-colors hover:border-indigo-400/50 hover:text-indigo-300 md:col-start-3 md:justify-self-end"
        >
          <ChevronUpIcon className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}
