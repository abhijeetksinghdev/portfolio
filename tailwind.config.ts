import type { Config } from "tailwindcss";

/**
 * Every colour below resolves to a CSS variable holding raw RGB channels, so a
 * single token set drives both themes and Tailwind's alpha modifiers
 * (e.g. bg-accent-500/10) keep working.
 */
const channel = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "var(--bg)",
          900: "var(--surface)",
          800: "var(--surface-2)",
          700: "var(--surface-3)",
          600: "var(--surface-3)",
        },
        offwhite: "var(--ink)",
        mist: "var(--mist)",
        // Primary action colour — a calm, professional azure.
        indigo: {
          200: channel("--c-accent-200"),
          300: channel("--c-accent-300"),
          400: channel("--c-accent-400"),
          500: channel("--c-accent-500"),
          600: channel("--c-accent-600"),
        },
        accent: {
          200: channel("--c-accent-200"),
          300: channel("--c-accent-300"),
          400: channel("--c-accent-400"),
          500: channel("--c-accent-500"),
          600: channel("--c-accent-600"),
        },
        // Supporting hues, kept deliberately narrow: one cool teal, one deep periwinkle.
        cyan: channel("--c-teal-400"),
        teal: {
          300: channel("--c-teal-300"),
          400: channel("--c-teal-400"),
          500: channel("--c-teal-500"),
        },
        violet: channel("--c-violet-400"),
        royal: channel("--c-accent-600"),
        emerald: {
          300: channel("--c-success"),
          400: channel("--c-success"),
          500: channel("--c-success"),
        },
        amber: {
          400: channel("--c-amber"),
          500: channel("--c-amber"),
        },
      },
      fontFamily: {
        name: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        card: "1.15rem",
      },
      backgroundImage: {
        "signal-gradient":
          "linear-gradient(120deg, rgb(var(--c-accent-500)) 0%, rgb(var(--c-violet-400)) 45%, rgb(var(--c-teal-400)) 100%)",
        "signal-gradient-soft":
          "linear-gradient(120deg, rgb(var(--c-accent-500) / 0.14) 0%, rgb(var(--c-teal-400) / 0.1) 100%)",
      },
      boxShadow: {
        glow: "0 18px 40px -18px rgb(var(--c-accent-500) / 0.55)",
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        rim: "inset 0 1px 0 0 rgb(255 255 255 / 0.04)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 0.68, 0.24, 1)",
      },
      keyframes: {
        "fade-rise": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 0.5s cubic-bezier(0.22, 0.68, 0.24, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
