"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { howIWork } from "@/lib/data";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="relative border-b border-[var(--line)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="Operating principles" title={<>How the work gets <span className="text-indigo-400">done well.</span></>} className="mb-12 lg:mb-14" />
        <div className="grid border-l border-t border-[var(--line)] sm:grid-cols-2">
          {howIWork.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="group border-b border-r border-[var(--line)] p-5 sm:p-7 lg:p-8">
              <span className="font-mono text-[10px] text-cyan">OP.{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.03em] text-offwhite transition-colors group-hover:text-indigo-400">{item.title}</h3>
              <p className="mt-3 max-w-2xl text-[14px] leading-7 text-mist sm:text-[15px]">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
