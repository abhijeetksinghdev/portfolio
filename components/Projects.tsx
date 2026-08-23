"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="relative border-b border-[var(--line)] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-indigo-400">
            Featured Work
          </span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-offwhite md:text-4xl">
            Systems that had to hold up.
          </h2>
        </motion.div>

        <div className="grid items-start gap-6 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <motion.article
              key={proj.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`orbit-card group ${
                idx % 2 === 0 ? "orbit-card--cyan" : "orbit-card--violet"
              } ${expandedProject ? "md:col-span-2" : ""}`}
            >
              <span
                aria-hidden="true"
                className="orbit-card__beam"
                style={{ animationDelay: `${idx * -2.1}s` }}
              />

              <div className="orbit-card__surface overflow-hidden p-5 min-[360px]:p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-signal-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]"
                />

                <div className="relative flex items-center justify-between gap-4">
                  <div
                    className={`flex h-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--line)] bg-white ${
                      proj.id === "ao-portal" ? "w-12" : "w-12 p-1.5"
                    }`}
                  >
                    <Image
                      src={proj.logo}
                      alt=""
                      width={48}
                      height={48}
                      className={
                        proj.id === "ao-portal"
                          ? "h-full w-full scale-[1.35] object-contain"
                          : "h-full w-full object-contain"
                      }
                    />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-mist">
                    {proj.period}
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-2xl text-offwhite">
                  {proj.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-violet">
                  {proj.org}
                </p>

                <p className="relative mt-5 text-[15px] leading-relaxed text-mist">
                  {proj.summary}
                </p>

                <div className="relative mt-5 rounded-xl border border-[var(--line)] bg-[var(--chip)] p-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan">
                    Outcome
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-offwhite/90">
                    {proj.outcome}
                  </p>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {proj.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[11px] text-mist"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 border-t border-[var(--line)] pt-5">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedProject((current) => {
                        const nextProject = current === proj.id ? null : proj.id;
                        trackEvent("project_architecture_toggle", {
                          project: proj.id,
                          action: nextProject ? "open" : "close",
                        });
                        return nextProject;
                      })
                    }
                    aria-expanded={expandedProject === proj.id}
                    aria-controls={`${proj.id}-architecture`}
                    className="flex min-h-11 w-full items-center justify-between gap-4 rounded-xl border border-[var(--line)] bg-[var(--chip)] px-4 py-2.5 text-left transition-colors hover:border-indigo-400/40 hover:bg-indigo-500/[0.06] focus-visible:rounded-xl"
                  >
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-cyan">
                        Interactive system map
                      </span>
                      <span className="mt-0.5 block font-display text-sm text-offwhite">
                        {expandedProject === proj.id ? "Hide architecture" : "Explore architecture"}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-lg text-indigo-300 transition-transform duration-300 ${
                        expandedProject === proj.id ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {expandedProject === proj.id && (
                      <motion.div
                        id={`${proj.id}-architecture`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5">
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                            {proj.architecture.label}
                          </p>
                          <div
                            className={
                              proj.architecture.sequential
                                ? "mt-3 flex flex-col gap-2 lg:flex-row lg:items-stretch"
                                : "mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5"
                            }
                          >
                            {proj.architecture.nodes.map((node, nodeIndex) => (
                              <div
                                key={node.label}
                                className="contents"
                              >
                                <div className="min-w-0 flex-1 rounded-xl border border-indigo-400/20 bg-indigo-500/[0.06] px-3 py-3">
                                  <span className="block max-w-full break-words font-display text-xs leading-tight text-offwhite [overflow-wrap:anywhere]">
                                    {node.label}
                                  </span>
                                  <span className="mt-1 block max-w-full break-words font-mono text-[10px] leading-relaxed text-mist [overflow-wrap:anywhere]">
                                    {node.detail}
                                  </span>
                                </div>
                                {proj.architecture.sequential &&
                                  nodeIndex < proj.architecture.nodes.length - 1 && (
                                  <span
                                    aria-hidden="true"
                                    className="flex h-4 shrink-0 items-center justify-center text-xs text-indigo-400 lg:h-auto lg:w-3"
                                  >
                                    <span className="rotate-90 lg:rotate-0">→</span>
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
