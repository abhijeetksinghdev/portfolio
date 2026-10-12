"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative border-b border-[var(--line)] py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="05 / Certifications"
          title={<>Credentials that support <span className="text-cyan">the craft.</span></>}
          description="Current, verifiable certifications in AI-assisted software engineering and modern developer workflows."
          className="mb-14 lg:mb-20"
        />

        <div className="grid border-l border-t border-[var(--line)] lg:grid-cols-2">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group grid border-b border-r border-[var(--line)] bg-[var(--surface)]/55 sm:grid-cols-[12rem_1fr]"
            >
              <div className="flex min-h-56 items-center justify-center border-b border-[var(--line)] bg-[var(--chip)] p-6 sm:border-b-0 sm:border-r">
                <a
                  href={certification.badgeUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View the official ${certification.title} badge`}
                  className="flex h-44 w-44 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1"
                >
                  <Image
                    src={certification.badgeImage}
                    alt={`${certification.title} certification badge`}
                    width={176}
                    height={176}
                    sizes="176px"
                    className="h-full w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.3)]"
                  />
                </a>
              </div>

              <div className="flex min-w-0 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-indigo-400">CERT / {String(index + 1).padStart(2, "0")}</span>
                  <span className="h-2 w-2 shrink-0 bg-indigo-400" aria-hidden="true" />
                </div>
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">{certification.issuer}</p>
                <h3 className="mt-2 font-display text-[clamp(1.35rem,2.4vw,2rem)] font-semibold leading-tight tracking-[-0.035em] text-offwhite">
                  {certification.title}
                </h3>
                <dl className="mt-8 grid gap-4 border-t border-[var(--line)] pt-5 font-mono text-[10px] uppercase tracking-[0.08em] text-mist min-[430px]:grid-cols-2">
                  <div><dt className="text-cyan">Issued</dt><dd className="mt-1 text-offwhite">{certification.issued}</dd></div>
                  <div><dt className="text-cyan">Valid through</dt><dd className="mt-1 text-offwhite">{certification.expires}</dd></div>
                  <div className="min-[430px]:col-span-2">
                    <dt className="text-cyan">Credential ID</dt>
                    <dd className="mt-1 break-all text-[9px] normal-case tracking-normal text-offwhite sm:text-[10px]">{certification.credentialId}</dd>
                  </div>
                  {certification.certificationNumber ? (
                    <div className="min-[430px]:col-span-2">
                      <dt className="text-cyan">Certification number</dt>
                      <dd className="mt-1 text-offwhite">{certification.certificationNumber}</dd>
                    </div>
                  ) : null}
                </dl>
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                  <a
                    href={certification.image}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 border-b border-indigo-400/50 pb-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-indigo-400 transition-colors hover:border-indigo-400 hover:text-offwhite"
                  >
                    View certificate <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={certification.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 border-b border-cyan/50 pb-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-cyan transition-colors hover:border-cyan hover:text-offwhite"
                  >
                    {certification.verificationLabel} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
