import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "var(--bg)",
          900: "var(--surface)",
          800: "var(--surface-2)",
          700: "#1B1F2C",
          600: "#242938",
        },
        offwhite: "var(--ink)",
        mist: "var(--mist)",
        indigo: {
          400: "#6B7BFF",
          500: "#4F5DFF",
          600: "#3A46E0",
        },
        royal: "#2B4FFF",
        violet: "#8B6BF5",
        cyan: "#22D3EE",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "signal-gradient":
          "linear-gradient(135deg, #4F5DFF 0%, #8B6BF5 50%, #22D3EE 100%)",
        "signal-gradient-soft":
          "linear-gradient(135deg, rgba(79,93,255,0.15) 0%, rgba(139,107,245,0.12) 50%, rgba(34,211,238,0.10) 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(79,93,255,0.45)",
        card: "0 24px 70px -30px rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
