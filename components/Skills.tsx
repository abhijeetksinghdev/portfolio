"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

const accents = ["#6B7BFF", "#8B6BF5", "#22D3EE"];

export default function Skills() {
  return (
    <section id="skills" className="relative border-b border-[var(--line)] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">
            Stack
          </span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-offwhite md:text-4xl">
            The toolset, grouped by what it&apos;s for.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => {
            const accent = accents[idx % accents.length];
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.06 }}
                className="relative rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
              >
                <div
                  aria-hidden="true"
                  className="mb-4 h-[3px] w-8 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <h3 className="font-display text-base text-offwhite">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-[var(--line-strong)] bg-[var(--chip)] px-2.5 py-1 font-mono text-[12px] text-mist transition-colors hover:text-offwhite"
                      style={{ borderColor: `${accent}22` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
