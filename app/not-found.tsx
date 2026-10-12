import type { Metadata } from "next";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";

export const metadata: Metadata = {
  title: "Page Not Found — Abhijeet Kumar Singh",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 focus:outline-none sm:px-6">
      <div className="frame-panel relative w-full max-w-4xl p-6 sm:p-10 lg:p-14">
        <div className="flex items-center justify-between border-b border-[var(--line)] pb-5">
          <LogoMark className="h-10 w-10 text-offwhite" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">HTTP / 404</span>
        </div>
        <div className="py-14 sm:py-20">
          <span className="eyebrow">Route not found</span>
          <h1 className="mt-6 font-display text-[clamp(3rem,10vw,7rem)] font-semibold uppercase leading-[0.82] tracking-[-0.07em] text-offwhite">This endpoint<br /><span className="text-gradient-signal">doesn&apos;t exist.</span></h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-mist">The requested page may have moved. The experience, system studies, and contact details are still ready to inspect.</p>
          <div className="mt-9 flex flex-col gap-2 min-[380px]:flex-row">
            <Link href="/" className="btn btn-primary">Back to portfolio ↗</Link>
            <Link href="/#contact" className="btn btn-ghost">Contact me</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
