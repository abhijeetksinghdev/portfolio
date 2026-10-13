"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ExperienceYears from "./ExperienceYears";
import RotatingDesignation from "./RotatingDesignation";
import { DownloadIcon, MapPinIcon } from "./icons";
import { profile } from "@/lib/data";

const marqueeItems = ["Java 8-21", "Spring Boot 2/3", "Microservices", "Apache Kafka", "Distributed Systems", "Kubernetes"];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden border-b border-[var(--line)] pt-[6.4rem]">
      <div className="mx-auto flex min-h-[calc(100vh-6.4rem)] max-w-[90rem] flex-col px-4 sm:px-6 lg:px-10">
        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:gap-14 lg:py-14">
          <div className="min-w-0">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
              <span className="inline-flex items-center gap-2 text-indigo-400"><span className="h-2 w-2 bg-indigo-400 shadow-[0_0_18px_rgb(var(--c-accent-400)/0.8)]" /> Available for Java backend roles</span>
              <span className="hidden h-px w-8 bg-[var(--line-strong)] sm:block" />
              <span className="inline-flex items-center gap-1.5"><MapPinIcon className="h-3.5 w-3.5 text-cyan" /> Noida, India · Open to relocation</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.05, ease: [0.2, 0.7, 0.2, 1] }} className="mt-8 font-name text-[clamp(3.15rem,7.2vw,7.6rem)] font-extrabold uppercase leading-[0.8] tracking-[-0.065em] text-offwhite">
              <span className="mb-[0.14em] block leading-[0.82] tracking-[-0.035em]">Abhijeet</span>
              <span className="block whitespace-nowrap text-[0.78em] leading-[0.9] tracking-[-0.055em]">Kumar <span className="hero-name-outline">Singh</span></span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.18 }} className="mt-7 flex items-center gap-4 border-l-2 border-cyan pl-4">
              <RotatingDesignation />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-7 max-w-2xl text-[16px] leading-7 text-mist sm:text-lg sm:leading-8">
              <span className="font-semibold text-offwhite"><ExperienceYears /></span>{profile.heroTaglineAfter}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.32 }} className="mt-9 grid max-w-xl grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              <a href="#contact" className="btn btn-primary group px-3 sm:px-5">Let&apos;s talk <span className="transition-transform group-hover:translate-x-1">↗</span></a>
              <a href="#projects" className="btn btn-ghost px-3 sm:px-5">View systems</a>
              <div className="col-span-2 grid grid-cols-[1fr_3rem] border border-[var(--line-strong)] bg-[var(--chip)] sm:w-auto">
                <a href="/resume-preview" target="_blank" rel="noreferrer" className="inline-flex min-h-[2.9rem] items-center justify-center whitespace-nowrap px-4 font-mono text-[10px] font-bold uppercase tracking-[0.09em] text-offwhite transition-colors hover:text-indigo-400">Preview resume</a>
                <a href="/resume/Abhijeet-Kumar-Singh-Resume.pdf" download aria-label="Download resume" className="inline-flex items-center justify-center border-l border-[var(--line-strong)] text-cyan transition-colors hover:bg-cyan/10"><DownloadIcon className="h-4 w-4" /></a>
              </div>
            </motion.div>
          </div>

          <motion.aside initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }} className="frame-panel mx-auto w-full max-w-md p-3 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--surface-2)] data-grid">
              <Image src="/images/abhijeet-kumar-singh-profile.webp" alt="Abhijeet Kumar Singh" fill priority sizes="(max-width: 1023px) 90vw, 420px" className="object-cover object-[center_20%] grayscale-[16%] contrast-[1.03]" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0a0b0a]/75 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo-300">Current focus</p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">TDS-CPC backend systems</p>
                </div>
                <span className="shrink-0 whitespace-nowrap border border-white/25 bg-black/35 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-white backdrop-blur sm:text-[9px] sm:tracking-wider">Java / Spring Boot</span>
              </div>
            </div>
            <div className="grid grid-cols-2 border-x border-b border-[var(--line)] bg-[var(--surface)]">
              <div className="border-r border-[var(--line)] p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-mist">Domains</p>
                <p className="mt-2 font-display text-sm font-semibold text-offwhite">GovTech · Telecom</p>
              </div>
              <div className="p-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-mist">Production mode</p>
                <p className="mt-2 inline-flex items-center gap-2 font-display text-sm font-semibold text-offwhite"><span className="h-1.5 w-1.5 bg-emerald-400" /> Own · Ship · Operate</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <div className="overflow-hidden border-t border-[var(--line)] bg-[var(--surface)]/70 py-3 backdrop-blur">
        <div className="marquee-track flex w-max items-center">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
              <span className="mx-5 h-1.5 w-1.5 rotate-45 bg-cyan sm:mx-8" />{item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
