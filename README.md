# portfolio-backend
Spring Boot backend for my portfolio website, showcasing my projects, experience, and skills.

# Abhijeet Kumar Singh — Portfolio

A premium, dark-first portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Design concept

- **Palette:** Graphite/near-black background (`#0A0B0F`–`#151822`), off-white text (`#ECEEF3`), electric indigo (`#4F5DFF`) as primary accent, with violet (`#8B6BF5`) and cyan (`#22D3EE`) as gradient partners.
- **Type:** Space Grotesk (display/headlines), Inter (body), JetBrains Mono (labels, tags, dates, data) — a technical/editorial pairing that matches a backend engineer's world.
- **Signature element:** `SignalField`, a quiet animated node-graph in the hero and contact sections — standing in for the message queues, streaming pipelines, and alert propagation that define the work (Kafka, Spark, real-time incident alerting). Respects `prefers-reduced-motion`.
- **Content:** Every fact — roles, dates, responsibilities, stack, education — is sourced directly from the resume in `lib/data.ts`. Nothing has been invented. Certifications/achievements are left as a clear placeholder since none were listed on the resume.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx      – fonts, metadata, root shell
  page.tsx        – assembles all sections
  globals.css     – Tailwind base + design tokens
components/
  Nav.tsx         – sticky nav with scroll-spy
  Hero.tsx        – hero with SignalField background
  About.tsx       – profile/story section
  Experience.tsx  – interactive case-study timeline
  Projects.tsx    – outcome-driven project cards
  Skills.tsx      – grouped skill system (no % bars)
  Education.tsx   – education + certifications placeholder
  HowIWork.tsx    – working principles
  Contact.tsx     – closing CTA
  Footer.tsx      – minimal branding
  SignalField.tsx – signature animated background
lib/
  data.ts         – single source of truth (from resume)
public/logos/     – Infosys & Rakuten Symphony logos
```

## Recent enhancements

- **Dark / light theme toggle** — sun/moon icon in the nav (`ThemeToggle.tsx`). Persists to `localStorage`, respects system preference on first visit, and a tiny inline script in `layout.tsx` prevents a flash of the wrong theme on load. All colors are driven by CSS variables in `globals.css` (`:root` for dark, `html.light` for light) so every section adapts automatically.
- **New logomark** — replaced the plain "A.K.S" text with a custom signal-node SVG mark (`LogoMark.tsx`) that echoes the hero's data-flow motif, paired with the full name in the nav.
- **Live-calculated experience** — `lib/experience.ts` computes years of experience from the actual career start date (Oct 2021) against *today's* date, client-side, via `ExperienceYears.tsx`. The figure in the hero tagline and the About stats updates on its own — no manual edits needed as time passes.
- **Icons in the hero meta row** — location, core stack, and infra now each have a small icon (`icons.tsx`) instead of being plain text.
- **Icon-based contact links** — Email, Phone, LinkedIn, and GitHub are now icon buttons in the Contact section, pointed at the real profile URLs:
  - GitHub: https://github.com/abhijeetksinghdev
  - LinkedIn: https://www.linkedin.com/in/abhijeetksinghdev/

## Notes

- Update `profile.linkedinUrl` / `profile.githubUrl` in `lib/data.ts` if the real profile URLs differ from the handles on the resume.
- Add certifications/achievements to `lib/data.ts` under a new array when available — the Education section is ready to extend.
