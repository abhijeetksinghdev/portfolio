"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";
import { CheckIcon, CopyIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./icons";

const iconLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: MailIcon, external: false },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s+/g, "")}`, icon: PhoneIcon, external: false },
  { label: "LinkedIn", href: profile.linkedinUrl, icon: LinkedinIcon, external: true },
  { label: "GitHub", href: profile.githubUrl, icon: GithubIcon, external: true },
];

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
    };
  }, []);

  const fallbackCopyEmail = () => {
    const textArea = document.createElement("textarea");
    textArea.value = profile.email;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    const copied = document.execCommand("copy");
    textArea.remove();
    return copied;
  };

  const copyEmail = async () => {
    let copied = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(profile.email);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied) {
      try {
        copied = fallbackCopyEmail();
      } catch {
        copied = false;
      }
    }

    setCopyStatus(copied ? "copied" : "error");
    if (copied) trackEvent("email_copy", { location: "contact" });
    if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
    statusTimerRef.current = setTimeout(() => setCopyStatus("idle"), 2200);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-fade)] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-wider text-indigo-400"
        >
          Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 font-display text-4xl leading-tight text-offwhite md:text-5xl"
        >
          Ready to bring this backend
          <br className="hidden sm:block" /> depth to your team.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-lg text-mist"
        >
          Let&apos;s build backend systems where production ownership,
          reliability, and thoughtful delivery matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex w-full items-center justify-center"
        >
          <div className="group inline-flex max-w-full overflow-hidden rounded-full border border-[var(--line-strong)] shadow-glow transition-transform hover:-translate-y-0.5 hover:border-indigo-400/50">
            <a
              href={`mailto:${profile.email}`}
              onClick={() => trackEvent("contact_link_click", { channel: "email", location: "primary_cta" })}
              className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-center whitespace-nowrap bg-gradient-to-r from-indigo-500 via-violet to-cyan px-3 text-center font-mono text-[10px] font-bold normal-case tracking-wider text-[#0A0B0F] min-[360px]:px-5 min-[360px]:text-[11px] sm:px-7 sm:text-[13px]"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={
                copyStatus === "copied"
                  ? "Email copied"
                  : copyStatus === "error"
                    ? "Copy failed, try again"
                    : "Copy email address"
              }
              title={copyStatus === "copied" ? "Copied" : copyStatus === "error" ? "Try copying again" : "Copy email"}
              className="inline-flex min-h-12 min-w-12 shrink-0 items-center justify-center border-l border-[var(--line-strong)] bg-[var(--surface)] text-offwhite transition-colors hover:bg-indigo-400/10 hover:text-indigo-300 focus-visible:bg-indigo-400/10"
            >
              {copyStatus === "copied" ? (
                <CheckIcon className="h-4 w-4 text-emerald-400" />
              ) : (
                <CopyIcon className="h-4 w-4 text-cyan" />
              )}
            </button>
          </div>
          <span className="sr-only" aria-live="polite" role="status">
            {copyStatus === "copied"
              ? "Email address copied to clipboard."
              : copyStatus === "error"
                ? "Email address could not be copied."
                : ""}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {iconLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              onClick={() => trackEvent("contact_link_click", { channel: label.toLowerCase(), location: "contact_icons" })}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-mist transition-colors hover:border-indigo-400/50 hover:text-indigo-300"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
