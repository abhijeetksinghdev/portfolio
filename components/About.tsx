"use client";

import { motion } from "framer-motion";
import ExperienceYears from "./ExperienceYears";

const stats = [
  { label: "Domains", value: "GovTech · Telecom" },
  { label: "Current employer", value: "Infosys Ltd." },
];

export default function About() {
  return (
    <section id="about" className="relative border-b border-[var(--line)] py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[0.85fr_1.15fr] md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">
            Profile
          </span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-offwhite md:text-4xl">
            Two domains,
            <br />
            one discipline.
          </h2>

          <dl className="mt-10 space-y-6">
            <div className="border-l border-[var(--line)] pl-5">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-mist">
                Years experience
              </dt>
              <dd className="mt-1 font-display text-lg text-offwhite">
                <ExperienceYears suffix="" />
              </dd>
            </div>
            {stats.map((s) => (
              <div key={s.label} className="border-l border-[var(--line)] pl-5">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-mist">
                  {s.label}
                </dt>
                <dd className="mt-1 font-display text-lg text-offwhite">{s.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 font-body text-lg leading-relaxed text-mist md:text-xl"
        >
          <p>
            I build backend systems for places where getting it wrong is
            expensive — a national tax portal, a live telecom network. Right
            now that means REST APIs and Spring Boot services running against
            IBM DB2 for the Income Tax Department&apos;s AO Portal, with
            Kafka moving data reliably between modules and RedHat-based
            CI/CD keeping releases stable across every sprint.
          </p>
          <p>
            Before that, at Rakuten Symphony, I owned the incident and alarm
            module of a telecom performance-monitoring platform — the part of
            the system that decides which network faults matter and how fast
            operations teams find out about them.
          </p>
          <p>
            Across both, the throughline is the same: translate messy,
            frequently-changing real-world rules into clean, well-tested
            backend logic, and use the AI tools in my stack — GitHub Copilot,
            Claude Code — to move faster without cutting corners.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
