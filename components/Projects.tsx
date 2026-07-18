"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative border-b border-[var(--line)] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">
            FEATURED WORK
          </span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-offwhite md:text-4xl">
            Systems that had to hold up.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <motion.article
              key={proj.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 transition-colors hover:border-indigo-400/30"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-signal-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]"
              />

              <div className="relative flex items-center justify-between gap-4">
                <div
                  className={`flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--line)] bg-white ${
                    proj.id === "ao-portal" ? "w-12" : "w-12 p-1.5"
                  }`}
                >
                  <Image
                    src={proj.logo}
                    alt=""
                    width={proj.id === "ao-portal" ? 52 : 38}
                    height={38}
                    className={
                      proj.id === "ao-portal"
                        ? "h-auto w-28 max-w-none object-contain"
                        : "h-auto w-full object-contain"
                    }
                  />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-mist">
                  {proj.period}
                </span>
              </div>

              <h3 className="relative mt-6 font-display text-2xl text-offwhite">
                {proj.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-violet">
                {proj.org}
              </p>

              <p className="relative mt-5 text-[15px] leading-relaxed text-mist">
                {proj.summary}
              </p>

              <div className="relative mt-5 rounded-xl border border-[var(--line)] bg-[var(--chip)] p-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-cyan">
                  Outcome
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-offwhite/90">
                  {proj.outcome}
                </p>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {proj.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[11px] text-mist"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
