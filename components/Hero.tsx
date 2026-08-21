"use client";

import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import ExperienceYears from "./ExperienceYears";
import RotatingDesignation from "./RotatingDesignation";
import { profile } from "@/lib/data";
import { LayersIcon, ServerIcon, DatabaseIcon, DownloadIcon, MapPinIcon, SparkleIcon } from "./icons";

export default function Hero() {
  const photoCardRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const photoTiltXValue = useMotionValue(0);
  const photoTiltYValue = useMotionValue(0);
  const photoTiltX = useSpring(photoTiltXValue, { stiffness: 180, damping: 22, mass: 0.7 });
  const photoTiltY = useSpring(photoTiltYValue, { stiffness: 180, damping: 22, mass: 0.7 });

  const handlePhotoPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || event.pointerType === "touch") return;

    const card = photoCardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const pointerX = (event.clientX - bounds.left) / bounds.width;
    const pointerY = (event.clientY - bounds.top) / bounds.height;

    card.style.setProperty("--photo-glow-x", `${pointerX * 100}%`);
    card.style.setProperty("--photo-glow-y", `${pointerY * 100}%`);
    photoTiltXValue.set((0.5 - pointerY) * 5);
    photoTiltYValue.set((pointerX - 0.5) * 7);
  };

  const resetPhotoEffect = () => {
    photoTiltXValue.set(0);
    photoTiltYValue.set(0);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-fade)]" />
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
              className="max-w-full whitespace-nowrap font-name text-[clamp(1.2rem,5.5vw,3rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.035em] text-offwhite lg:text-[2.625rem] xl:text-[3rem]"
            >
              {profile.name.split(" ")[0]} {profile.name.split(" ")[1]}{" "}
              <span className="text-gradient-signal">{profile.name.split(" ")[2]}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-4"
            >
              <RotatingDesignation />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-5 max-w-2xl font-display text-lg text-mist md:text-xl"
            >
              {profile.heroTaglineBefore}
              <ExperienceYears />
              {profile.heroTaglineAfter}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet to-cyan px-5 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-[#0A0B0F] shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s talk
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-offwhite transition-colors hover:border-indigo-400/50 hover:text-indigo-300"
          >
            See the work
          </a>
          <div className="group inline-flex overflow-hidden rounded-full border border-[var(--line-strong)] transition-colors hover:border-indigo-400/50">
            <a
              href="/resume/Abhijeet-Kumar-Singh-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-5 py-2.5 font-mono text-[12px] font-bold uppercase tracking-wider text-offwhite transition-colors hover:text-indigo-300"
            >
              Preview resume
            </a>
            <a
              href="/resume/Abhijeet-Kumar-Singh-Resume.pdf"
              download
              aria-label="Download resume"
              title="Download resume"
              className="inline-flex items-center justify-center border-l border-[var(--line-strong)] px-3.5 text-offwhite transition-colors hover:bg-indigo-400/10 hover:text-indigo-300"
            >
              <DownloadIcon className="h-3.5 w-3.5" />
            </a>
          </div>
            </motion.div>
          </div>

          <motion.aside
            ref={photoCardRef}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            style={{
              rotateX: prefersReducedMotion ? 0 : photoTiltX,
              rotateY: prefersReducedMotion ? 0 : photoTiltY,
              transformPerspective: 1000,
            }}
            onPointerMove={handlePhotoPointerMove}
            onPointerLeave={resetPhotoEffect}
            onPointerCancel={resetPhotoEffect}
            className="photo-orbit-card mt-12 w-full max-w-md shrink-0 rounded-2xl border border-indigo-400/20 bg-[var(--surface)]/80 p-4 shadow-card backdrop-blur-sm min-[360px]:p-5 lg:mt-0 lg:w-80 lg:max-w-none"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--chip)]">
              <Image
                src="/images/abhijeet-kumar-singh-profile.webp"
                alt="Abhijeet Kumar Singh"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 320px"
                className="object-cover object-[center_20%]"
              />
            </div>
            <p className="mt-4 font-display text-lg font-semibold leading-tight text-offwhite">{profile.role}</p>
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
            <div className="mt-5 flex items-center gap-2 border-t border-[var(--line)] pt-4 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.72)]" />
              </span>
              <span>Open to Java Backend Roles</span>
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
