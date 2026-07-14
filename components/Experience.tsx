"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative border-b border-[var(--line)] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">
            Experience
          </span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-offwhite md:text-4xl">
            Where the work has happened.
          </h2>
        </motion.div>

        <div className="relative">
          {/* signal line */}
          <div
            aria-hidden="true"
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400 via-violet to-transparent opacity-40 md:left-[23px]"
          />

          <div className="space-y-16">
            {experience.map((role, idx) => (
              <motion.article
                key={role.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="relative pl-10 md:pl-16"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-[10px] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full md:left-[23px] ${
                    role.current
                      ? "bg-cyan shadow-[0_0_0_5px_rgba(34,211,238,0.15)]"
                      : "bg-mist/60 shadow-[0_0_0_5px_rgba(138,147,168,0.1)]"
                  }`}
                />

                <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 transition-colors hover:border-indigo-400/25 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--line)] bg-white ${
                          role.id === "infosys" ? "w-12" : "w-12 p-1.5"
                        }`}
                      >
                        <Image
                          src={role.logo}
                          alt={`${role.company} logo`}
                          width={52}
                          height={38}
                          className={
                            role.id === "infosys"
                              ? "h-auto w-28 max-w-none object-contain"
                              : "h-auto w-full object-contain"
                          }
                        />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-offwhite">{role.title}</h3>
                        <p className="text-sm text-mist">
                          {role.company} · {role.location}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-mist">
                      {role.period}
                    </span>
                  </div>

                  <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-violet">
                    {role.project}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {role.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-mist">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {role.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[11px] text-mist"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
