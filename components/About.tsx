"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ExperienceYears from "./ExperienceYears";
import { profile } from "@/lib/data";

const capabilities = [
  { code: "A", title: "Backend modernization", text: "Java 8-21 and Spring Boot 2/3 services evolved with modular boundaries, regression coverage, and production stability." },
  { code: "B", title: "Reliable event processing", text: "Kafka and Spark workflows built with correlation rules, partitioning, at-least-once delivery, and idempotent handling." },
  { code: "C", title: "Production ownership", text: "OpenShift and Kubernetes delivery, Grafana/Kibana troubleshooting, RCA, on-call incident management, and mentoring." },
];

export default function About() {
  return (
    <section id="about" className="relative border-b border-[var(--line)] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="01 / Recruiter brief" title={<>Backend depth for systems that <span className="text-indigo-400">cannot afford guesswork.</span></>} description="A focused profile spanning government tax-processing workflows and multivendor telecom service assurance." className="mb-14 lg:mb-20" />

        <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-8">
          <div className="hidden lg:block">
            <p className="sticky top-28 font-mono text-[10px] uppercase leading-6 tracking-[0.18em] text-mist">Role profile<br /><span className="text-cyan">Java / distributed<br />systems / platform</span></p>
          </div>
          <div>
            <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl font-display text-[clamp(1.05rem,1.5vw,1.45rem)] font-medium leading-[1.55] tracking-[-0.02em] text-offwhite">
              {profile.summaryBefore}<span className="border-b-2 border-indigo-400 text-indigo-400"><ExperienceYears /></span>{profile.summaryAfter}
            </motion.p>

            <div className="mt-14 grid border-t border-[var(--line)] lg:grid-cols-3">
              {capabilities.map((item, index) => (
                <motion.article key={item.code} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group border-b border-[var(--line)] py-7 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0">
                  <span className="font-mono text-[10px] text-cyan">[{item.code}]</span>
                  <h3 className="mt-7 font-display text-xl font-semibold tracking-[-0.025em] text-offwhite group-hover:text-indigo-400">{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-7 text-mist">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
