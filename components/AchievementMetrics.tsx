"use client";

import { motion } from "framer-motion";
import ExperienceYears from "./ExperienceYears";

const metrics = [
  { value: <ExperienceYears />, label: "Production engineering", note: "Since October 2021" },
  { value: "25+", label: "Spring Boot REST APIs", note: "TDS-CPC workflows" },
  { value: "200+", label: "Network devices", note: "Multivendor telecom OSS" },
  { value: "40%", label: "Spark performance gain", note: "Processing optimization" },
];

export default function AchievementMetrics() {
  return (
    <section aria-label="Career snapshot" className="border-b border-[var(--line)] bg-[var(--surface)]/45">
      <div className="mx-auto grid max-w-[90rem] grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-10">
        {metrics.map((metric, index) => (
          <motion.div key={metric.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className={`relative px-3 py-7 sm:px-5 lg:py-9 ${index % 2 === 0 ? "border-r border-[var(--line)]" : ""} ${index < 2 ? "border-b border-[var(--line)] lg:border-b-0" : ""} ${index === 1 ? "lg:border-r" : ""} ${index === 2 ? "lg:border-r" : ""}`}>
            <span className="absolute left-0 top-0 font-mono text-[9px] tracking-[0.16em] text-cyan">0{index + 1}</span>
            <p className="font-display text-[clamp(1.4rem,3.2vw,2.35rem)] font-semibold tracking-[-0.045em] text-offwhite">{metric.value}</p>
            <p className="mt-2 font-display text-xs font-semibold text-offwhite sm:text-sm">{metric.label}</p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-mist sm:text-[10px]">{metric.note}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
