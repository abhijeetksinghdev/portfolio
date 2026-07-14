"use client";

import { motion } from "framer-motion";
import { howIWork } from "@/lib/data";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="relative border-b border-[var(--line)] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">
            How I Work
          </span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-offwhite md:text-4xl">
            The approach behind the output.
          </h2>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] sm:grid-cols-2">
          {howIWork.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="bg-[var(--surface)] p-8"
            >
              <h3 className="font-display text-lg text-offwhite">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
