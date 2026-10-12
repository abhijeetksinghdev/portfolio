"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="projects" className="relative border-b border-[var(--line)] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="03 / System studies" title={<>See the systems, not just <span className="text-indigo-400">the job titles.</span></>} description="A recruiter-friendly view of the architecture, responsibilities, and production outcomes behind the resume." className="mb-14 lg:mb-20" />

        <div className="space-y-6">
          {projects.map((project, index) => {
            const isOpen = openId === project.id;
            return (
              <motion.article key={project.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} className="frame-panel overflow-hidden">
                <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <div className="border-b border-[var(--line)] p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                    <div className="flex items-start justify-between gap-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">System / {String(index + 1).padStart(2, "0")}</span>
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--line)] bg-white ${project.id === "ao-portal" ? "" : "p-1.5"}`}>
                        <Image src={project.logo} alt="" width={48} height={48} className={project.id === "ao-portal" ? "h-full w-full scale-[1.35] object-contain" : "h-full w-full object-contain"} />
                      </div>
                    </div>
                    <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.16em] text-mist">{project.period}</p>
                    <h3 className="mt-3 max-w-xl font-display text-[clamp(1.65rem,3.5vw,3rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-offwhite">{project.title}</h3>
                    <p className="mt-3 text-sm font-medium text-indigo-400">{project.org}</p>
                    <p className="mt-7 text-[15px] leading-7 text-mist">{project.summary}</p>
                    <div className="mt-8 flex flex-wrap gap-1.5">{project.stack.map((item) => <span key={item} className="tag">{item}</span>)}</div>
                  </div>

                  <div className="flex flex-col p-5 sm:p-8 lg:p-10">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">Production outcome</p>
                      <p className="mt-4 max-w-3xl font-display text-lg font-medium leading-8 text-offwhite sm:text-xl">{project.outcome}</p>
                    </div>

                    <div className="mt-10 border border-[var(--line)] bg-[var(--bg)]/50">
                      <button type="button" onClick={() => setOpenId(isOpen ? null : project.id)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5">
                        <span>
                          <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-cyan">Interactive system map</span>
                          <span className="mt-1.5 block font-display text-base font-semibold text-offwhite">{isOpen ? "Hide" : "Inspect"} architecture</span>
                        </span>
                        <span aria-hidden="true" className={`flex h-9 w-9 items-center justify-center border border-[var(--line-strong)] font-mono text-lg text-indigo-400 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32 }} className="overflow-hidden">
                            <div className="border-t border-[var(--line)] p-4 sm:p-5">
                              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">{project.architecture.label}</p>
                              <div className="architecture-grid">
                                {project.architecture.nodes.map((node, nodeIndex) => (
                                  <div key={`${node.label}-${nodeIndex}`} className="flex min-h-32 min-w-0 flex-col justify-between border border-[var(--line-strong)] bg-[var(--surface)] p-4">
                                    <div className="flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-cyan">
                                      <span>Step {String(nodeIndex + 1).padStart(2, "0")}</span>
                                      <span aria-hidden="true">{nodeIndex < project.architecture.nodes.length - 1 ? "→" : "End"}</span>
                                    </div>
                                    <div className="mt-6">
                                      <p className="font-display text-base font-semibold leading-snug text-offwhite">{node.label}</p>
                                      <p className="mt-2 font-mono text-[10px] leading-5 text-mist">{node.detail}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
