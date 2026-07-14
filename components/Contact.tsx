"use client";

import { motion } from "framer-motion";
import SignalField from "./SignalField";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./icons";

const iconLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: MailIcon, external: false },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s+/g, "")}`, icon: PhoneIcon, external: false },
  { label: "LinkedIn", href: profile.linkedinUrl, icon: LinkedinIcon, external: true },
  { label: "GitHub", href: profile.githubUrl, icon: GithubIcon, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 opacity-60">
        <SignalField density={30} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg-fade)] to-transparent" />

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
          Open to product engineering roles where backend ownership,
          reliability, and AI-assisted delivery actually matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex max-w-full items-center gap-2 break-all rounded-full bg-gradient-to-r from-indigo-500 via-violet to-cyan px-5 py-3.5 text-center font-mono text-[13px] font-medium normal-case tracking-wider text-[#0A0B0F] shadow-glow transition-transform hover:-translate-y-0.5 sm:px-7"
          >
            {profile.email}
          </a>
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
