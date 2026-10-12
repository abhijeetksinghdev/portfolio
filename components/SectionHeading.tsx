"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, className = "", align = "left" }: {
  eyebrow: string; title: ReactNode; description?: ReactNode; className?: string; align?: "left" | "center";
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "grid max-w-5xl gap-5 md:grid-cols-[12rem_1fr] md:gap-8"} ${className}`}
    >
      <span className={`eyebrow ${align === "center" ? "justify-center" : "md:mt-2"}`}>{eyebrow}</span>
      <div>
        <h2 className="font-display text-[clamp(2.25rem,6vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-offwhite">{title}</h2>
        {description ? <p className="mt-5 max-w-2xl text-[15px] leading-7 text-mist md:text-base">{description}</p> : null}
      </div>
    </motion.header>
  );
}
