"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SignalField from "./SignalField";
import ExperienceYears from "./ExperienceYears";
import { profile } from "@/lib/data";
import { LayersIcon, ServerIcon, DatabaseIcon, DownloadIcon, MapPinIcon, SparkleIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0">
        <SignalField density={40} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-fade)] to-[var(--bg)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/[0.07] px-4 py-1.5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-300">
                BUILDING BACKEND SYSTEMS FOR A GOVERNMENT-SCALE TAX PLATFORM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.2, 0.7, 0.2, 1] }}
              className="font-display text-[13vw] leading-[0.95] tracking-tight text-offwhite sm:text-6xl md:text-7xl lg:text-[5.4rem]"
            >
              {profile.name.split(" ")[0]} {profile.name.split(" ")[1]}
              <br />
              <span className="text-gradient-signal">{profile.name.split(" ")[2]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-6 max-w-2xl font-display text-lg text-mist md:text-xl"
            >
              {profile.heroTaglineBefore}
              <ExperienceYears />
              {profile.heroTaglineAfter}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet to-cyan px-6 py-3 font-mono text-[13px] font-medium uppercase tracking-wider text-[#0A0B0F] shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s talk
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-offwhite transition-colors hover:border-indigo-400/50 hover:text-indigo-300"
          >
            See the work
          </a>
          <a
            href="/resume/Abhijeet-Kumar-Singh-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-offwhite transition-colors hover:border-indigo-400/50 hover:text-indigo-300"
          >
            Preview resume
          </a>
          <a
            href="/resume/Abhijeet-Kumar-Singh-Resume.pdf"
            download
            aria-label="Download resume"
            title="Download resume"
            className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] p-3 text-offwhite transition-colors hover:border-indigo-400/50 hover:text-indigo-300"
          >
            <DownloadIcon className="h-4 w-4" />
          </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-12 w-full max-w-md shrink-0 rounded-2xl border border-indigo-400/20 bg-[var(--surface)]/80 p-5 shadow-card backdrop-blur-sm lg:mt-0 lg:w-80 lg:max-w-none"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--chip)]">
              <Image
                src="/images/abhijeet-kumar-singh-profile.jpeg"
                alt="Abhijeet Kumar Singh"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 320px"
                className="object-cover object-[center_20%]"
              />
            </div>
            <p className="mt-4 font-display text-lg leading-tight text-offwhite">Java Backend Engineer</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-mist">
              <MapPinIcon className="h-4 w-4 text-cyan" />
              Noida, India <span aria-label="India" role="img">🇮🇳</span>
            </p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan">Industry experience</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Government Tax Systems", "Telecom"].map((industry) => (
                <span key={industry} className="rounded-full border border-[var(--line)] bg-[var(--chip)] px-2.5 py-1 font-mono text-[10px] text-mist">
                  {industry}
                </span>
              ))}
            </div>
            <div className="mt-5 border-t border-[var(--line)] pt-4 font-mono text-[10px] uppercase tracking-wider text-indigo-300">
              Open to Backend Engineering Roles
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-[var(--line)] pt-8 font-mono text-xs uppercase tracking-wider text-mist lg:flex-nowrap lg:gap-x-5 lg:text-[10px]"
        >
          <span className="inline-flex items-center gap-2">
            <LayersIcon className="h-3.5 w-3.5 text-violet" />
            Java · Spring Boot · Microservices
          </span>
          <span className="hidden h-1 w-1 shrink-0 rounded-full bg-mist/50 sm:inline-block" />
          <span className="inline-flex items-center gap-2">
            <ServerIcon className="h-3.5 w-3.5 text-cyan" />
            Spark · Kafka · Kubernetes
          </span>
          <span className="hidden h-1 w-1 shrink-0 rounded-full bg-mist/50 sm:inline-block" />
          <span className="inline-flex items-center gap-2">
            <DatabaseIcon className="h-3.5 w-3.5 text-indigo-400" />
            MySQL · IBM DB2 · Cassandra
          </span>
          <span className="hidden h-1 w-1 shrink-0 rounded-full bg-mist/50 sm:inline-block" />
          <span className="inline-flex items-center gap-2">
            <SparkleIcon className="h-3.5 w-3.5 text-violet" />
            Copilot · Claude Code
          </span>
        </motion.div>
      </div>
    </section>
  );
}
