import type { Metadata } from "next";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";

export const metadata: Metadata = {
  title: "Page Not Found — Abhijeet Kumar Singh",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 focus:outline-none"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.04] to-[var(--bg-fade)]" />
      <div className="relative mx-auto w-full max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-400/25 bg-indigo-500/[0.06] shadow-glow">
          <LogoMark className="h-11 w-11" />
        </div>

        <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.25rem,10vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-offwhite">
          This route went
          <span className="block text-gradient-signal">off the map.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-mist sm:text-lg">
          The page may have moved, but the backend work, experience, and contact details are still available.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 min-[380px]:flex-row min-[380px]:items-center">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-violet to-cyan px-6 font-mono text-xs font-bold uppercase tracking-wider text-[#0A0B0F] shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Back to portfolio
          </Link>
          <Link
            href="/#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--line-strong)] px-6 font-mono text-xs font-bold uppercase tracking-wider text-offwhite transition-colors hover:border-indigo-400/60 hover:text-indigo-300"
          >
            Contact me
          </Link>
        </div>
      </div>
    </main>
  );
}
