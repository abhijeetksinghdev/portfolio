"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon, CopyIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./icons";
import { profile } from "@/lib/data";

const links = [
  { label: "LinkedIn", href: profile.linkedinUrl, icon: LinkedinIcon, external: true },
  { label: "GitHub", href: profile.githubUrl, icon: GithubIcon, external: true },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s+/g, "")}`, icon: PhoneIcon, external: false },
];

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const copyEmail = async () => {
    let copied = false;
    try {
      await navigator.clipboard.writeText(profile.email);
      copied = true;
    } catch {
      const area = document.createElement("textarea");
      area.value = profile.email;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      copied = document.execCommand("copy");
      area.remove();
    }
    setCopyStatus(copied ? "copied" : "error");
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopyStatus("idle"), 2200);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="frame-panel overflow-hidden">
          <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
            <div className="p-6 sm:p-10 lg:p-14 xl:p-16">
              <span className="eyebrow">06 / Start a conversation</span>
              <h2 className="mt-9 max-w-5xl font-display text-[clamp(2.8rem,7.5vw,7.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.07em] text-offwhite">Let&apos;s build<br /><span className="text-gradient-signal">reliable systems.</span></h2>
              <p className="mt-8 max-w-2xl text-[15px] leading-7 text-mist sm:text-lg sm:leading-8">Looking for Java backend opportunities where production ownership, distributed systems, and thoughtful engineering matter.</p>
            </div>

            <div className="border-t border-[var(--line)] bg-[var(--surface)]/80 p-6 sm:p-8 lg:flex lg:flex-col lg:justify-between lg:border-l lg:border-t-0 lg:p-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">Direct channel</p>
                <div className="mt-5 grid grid-cols-[minmax(0,1fr)_3.25rem] border border-[var(--line-strong)]">
                  <a href={`mailto:${profile.email}`} className="flex min-h-14 min-w-0 items-center gap-3 overflow-hidden px-3 text-indigo-400 transition-colors hover:bg-indigo-400/5 sm:px-4">
                    <MailIcon className="h-4 w-4 shrink-0" />
                    <span className="truncate font-mono text-[10px] font-medium sm:text-[11px]">{profile.email}</span>
                  </a>
                  <button type="button" onClick={copyEmail} aria-label={copyStatus === "copied" ? "Email copied" : "Copy email address"} className="flex items-center justify-center border-l border-[var(--line-strong)] text-cyan transition-colors hover:bg-cyan/10">
                    {copyStatus === "copied" ? <CheckIcon className="h-4 w-4 text-emerald-400" /> : <CopyIcon className="h-4 w-4" />}
                  </button>
                </div>
                <span className="sr-only" role="status" aria-live="polite">{copyStatus === "copied" ? "Email copied." : copyStatus === "error" ? "Copy failed." : ""}</span>
              </div>

              <div className="mt-10 border-t border-[var(--line)]">
                {links.map(({ label, href, icon: Icon, external }) => (
                  <a key={label} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex min-h-14 items-center justify-between border-b border-[var(--line)] font-mono text-[10px] uppercase tracking-[0.16em] text-mist transition-colors hover:text-indigo-400">
                    <span className="flex items-center gap-3"><Icon className="h-4 w-4" />{label}</span><span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
