"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative border-b border-[var(--line)] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">
            Education
          </span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-offwhite md:text-4xl">
            Foundation.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-7 sm:flex-row sm:items-center"
        >
          <div>
            <h3 className="font-display text-lg text-offwhite">{education.degree}</h3>
            <p className="mt-1 text-sm text-mist">{education.school}</p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-mist">
            {education.period}
          </span>
        </motion.div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-mist/70">
          Certifications and awards — to be added.
        </p>
      </div>
    </section>
  );
}
