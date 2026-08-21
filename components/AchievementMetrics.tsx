"use client";

import { motion } from "framer-motion";
import ExperienceYears from "./ExperienceYears";
import { DatabaseIcon, LayersIcon, ServerIcon, SparkleIcon } from "./icons";

const metrics = [
  {
    id: "experience",
    label: "Professional experience",
    detail: "Calculated from Oct 20, 2021",
    icon: SparkleIcon,
  },
  {
    id: "domains",
    value: "2",
    label: "Enterprise domains",
    detail: "GovTech · Telecom",
    icon: LayersIcon,
  },
  {
    id: "platforms",
    value: "2",
    label: "Production platforms",
    detail: "Tax portal · Telecom OSS",
    icon: ServerIcon,
  },
  {
    id: "ownership",
    value: "End-to-end",
    label: "Backend ownership",
    detail: "Build · Test · Release",
    icon: DatabaseIcon,
  },
];

export default function AchievementMetrics() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="relative border-b border-[var(--line)] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--chip)] shadow-card backdrop-blur-sm"
        >
          <div className="flex flex-col gap-2 border-b border-[var(--line)] px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
                Verified profile
              </span>
              <h2 id="impact-heading" className="mt-1.5 font-display text-xl text-offwhite sm:text-2xl">
                Impact at a glance.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mist sm:text-right">
              Production backend experience across national tax infrastructure and telecom operations.
            </p>
          </div>

          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className={`group relative min-w-0 border-b border-[var(--line)] p-5 last:border-b-0 lg:border-b-0 ${
                    index % 2 === 0 ? "min-[420px]:border-r" : ""
                  } ${index >= 2 ? "min-[420px]:border-b-0" : ""} ${
                    index < metrics.length - 1 ? "lg:border-r" : "lg:border-r-0"
                  }`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/[0.07] text-indigo-300 transition-colors group-hover:border-cyan/30 group-hover:text-cyan">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="mt-5 min-h-9 font-name text-[clamp(1.25rem,5vw,1.75rem)] font-extrabold leading-tight text-offwhite">
                    {metric.id === "experience" ? (
                      <ExperienceYears className="whitespace-normal" suffix="" />
                    ) : (
                      metric.value
                    )}
                  </div>
                  <p className="mt-2 font-display text-sm text-offwhite">{metric.label}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-mist">
                    {metric.detail}
                  </p>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-400 via-violet to-cyan transition-transform duration-500 group-hover:scale-x-100"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
