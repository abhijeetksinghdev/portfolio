import type { Metadata } from "next";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import ResumeViewer from "@/components/ResumeViewer";
import { DownloadIcon } from "@/components/icons";

const resumeUrl = "/resume/Abhijeet-Kumar-Singh-Resume.pdf";

export const metadata: Metadata = {
  title: "Résumé — Abhijeet Kumar Singh",
  description: "Preview and download Abhijeet Kumar Singh's Java Backend Engineer résumé.",
  robots: { index: false, follow: false },
};

export default function ResumePreviewPage() {
  return (
    <main className="relative z-30 flex h-[100dvh] min-h-0 flex-col overflow-hidden bg-[var(--page)] text-offwhite">
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

      <section className="flex min-h-0 flex-1 flex-col gap-2 p-2 sm:gap-3 sm:p-4">
        <ResumeViewer />
        <p className="shrink-0 text-center font-mono text-[9px] uppercase tracking-[0.1em] text-mist sm:text-[10px] sm:tracking-[0.12em]">
          Full page is fitted to your screen · use the preview controls to zoom · <a href={resumeUrl} target="_blank" rel="noreferrer" className="text-indigo-400 underline underline-offset-4">open PDF directly</a>
        </p>
      </section>
    </main>
  );
}
