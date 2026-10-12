"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  const [expandedRoles, setExpandedRoles] = useState<string[]>([]);

  const toggleRole = (roleId: string) => {
    setExpandedRoles((current) =>
      current.includes(roleId)
        ? current.filter((id) => id !== roleId)
        : [...current, roleId]
    );
  };

  return (
    <section id="experience" className="relative border-b border-[var(--line)] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="02 / Experience" title={<>Work that reached <span className="text-cyan">production.</span></>} description="Two complex domains. One consistent theme: accountable backend engineering from requirements to reliable delivery." className="mb-14 lg:mb-20" />

        <div className="border-t border-[var(--line)]">
          {experience.map((role, roleIndex) => (
            <motion.article key={role.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="grid border-b border-[var(--line)] lg:grid-cols-[12rem_minmax(15rem,0.72fr)_minmax(0,1.28fr)]">
              <div className="flex items-center justify-between border-b border-[var(--line)] py-5 lg:block lg:border-b-0 lg:border-r lg:py-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">Case / {String(roleIndex + 1).padStart(2, "0")}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-mist lg:mt-5 lg:block">{role.period}</span>
              </div>

              <header className="border-b border-[var(--line)] py-7 lg:border-b-0 lg:border-r lg:p-8">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--line)] bg-white ${role.id === "infosys" ? "" : "p-1.5"}`}>
                  <Image src={role.logo} alt={`${role.company} logo`} width={48} height={48} className={role.id === "infosys" ? "h-full w-full scale-[1.35] object-contain" : "h-full w-full object-contain"} />
                </div>
                <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                  {role.current && <span className="h-2 w-2 bg-emerald-400 shadow-[0_0_12px_rgb(var(--c-success)/0.7)]" />}
                  {role.current ? "Current position" : "Previous position"}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-offwhite">{role.title}</h3>
                <p className="mt-2 text-sm font-medium text-indigo-400">{role.company}</p>
                <p className="mt-6 text-sm leading-6 text-mist">{role.project}</p>
                <div className="mt-7 flex flex-wrap gap-1.5">
                  {role.stack.map((tech) => <span key={tech} className="tag">{tech}</span>)}
                </div>
              </header>

              <div className="py-7 lg:p-8 lg:pl-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">Selected ownership &amp; delivery</p>
                <ul className="mt-5">
                  {(expandedRoles.includes(role.id) ? role.points : role.points.slice(0, 4)).map((point, pointIndex) => (
                    <li key={point} className="grid grid-cols-[2rem_1fr] gap-3 border-t border-[var(--line)] py-4 first:border-t-0 first:pt-0 sm:grid-cols-[2.5rem_1fr]">
                      <span className="pt-0.5 font-mono text-[10px] text-cyan">{String(pointIndex + 1).padStart(2, "0")}</span>
                      <p className="text-[14px] leading-7 text-mist sm:text-[15px]">{point}</p>
                    </li>
                  ))}
                </ul>
                {role.points.length > 4 && (
                  <button
                    type="button"
                    onClick={() => toggleRole(role.id)}
                    aria-expanded={expandedRoles.includes(role.id)}
                    className="mt-3 inline-flex min-h-11 items-center gap-2 border-b border-indigo-400/50 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-indigo-400 transition-colors hover:border-indigo-400 hover:text-offwhite"
                  >
                    {expandedRoles.includes(role.id)
                      ? "Show fewer details"
                      : `Show ${role.points.length - 4} more ${role.points.length - 4 === 1 ? "detail" : "details"}`}
                    <span aria-hidden="true">{expandedRoles.includes(role.id) ? "↑" : "↓"}</span>
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
