"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-b border-[var(--line)]">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mx-auto grid max-w-[90rem] lg:grid-cols-[12rem_minmax(0,1fr)_auto] lg:items-stretch">
        <div className="border-b border-[var(--line)] px-4 py-6 sm:px-6 lg:border-b-0 lg:border-r lg:px-10">
          <span className="eyebrow">Education</span>
        </div>
        <div className="px-4 py-7 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-offwhite sm:text-2xl">{education.degree}</h2>
          <p className="mt-2 text-sm text-mist">{education.school} · {education.university}</p>
        </div>
        <div className="flex items-center border-t border-[var(--line)] px-4 py-5 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan sm:px-6 lg:border-l lg:border-t-0 lg:px-10">{education.period}</div>
      </motion.div>
    </section>
  );
}
