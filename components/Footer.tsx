"use client";

import LogoMark from "./LogoMark";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="site-footer" className="border-t border-[var(--line)] bg-[var(--surface)]/55">
      <div className="mx-auto grid max-w-[90rem] gap-5 px-4 py-7 sm:px-6 md:grid-cols-[1fr_auto_1fr] md:items-center lg:px-10">
        <div className="flex items-center gap-3">
          <LogoMark className="h-7 w-7 text-offwhite" />
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist">© {new Date().getFullYear()} {profile.name}</span>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist md:text-center">Java backend engineer · Noida, India</p>
        <div className="flex items-center gap-4 md:justify-end">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-mono text-[10px] uppercase tracking-[0.14em] text-indigo-400">Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}
