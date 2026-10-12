import type { Metadata } from "next";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { DownloadIcon } from "@/components/icons";

const resumeUrl = "/resume/Abhijeet-Kumar-Singh-Resume.pdf";

export const metadata: Metadata = {
  title: "Résumé — Abhijeet Kumar Singh",
  description: "Preview and download Abhijeet Kumar Singh's Java Backend Engineer résumé.",
  robots: { index: false, follow: false },
};

export default function ResumePreviewPage() {
  return (
    <main className="relative z-30 flex min-h-screen flex-col bg-[var(--page)] text-offwhite">
      <header className="flex min-h-[4.6rem] items-center justify-between gap-4 border-b border-[var(--line)] bg-[var(--nav-bg)] px-4 backdrop-blur-xl sm:px-6 lg:px-10">
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="Return to portfolio">
          <LogoMark className="h-9 w-9 shrink-0 text-offwhite transition-transform group-hover:-rotate-3" />
          <span className="truncate font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-mist">Abhijeet Kumar Singh · Résumé</span>
        </Link>
        <div className="flex shrink-0 items-center gap-2">
          <Link href="/" className="btn btn-ghost hidden h-10 min-h-0 px-4 sm:inline-flex">Portfolio</Link>
          <a href={resumeUrl} download className="btn btn-primary h-10 min-h-0 px-3 sm:px-4">
            <span className="hidden sm:inline">Download</span>
            <DownloadIcon className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section className="flex min-h-0 flex-1 flex-col p-2 sm:p-4">
        <iframe
          src={`${resumeUrl}#view=FitH&toolbar=1&navpanes=0`}
          title="Abhijeet Kumar Singh résumé preview"
          className="min-h-[calc(100dvh-6.6rem)] w-full flex-1 border border-[var(--line-strong)] bg-white"
        />
        <p className="py-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-mist">
          If the preview does not load, <a href={resumeUrl} target="_blank" rel="noreferrer" className="text-indigo-400 underline underline-offset-4">open the PDF directly</a>.
        </p>
      </section>
    </main>
  );
}
