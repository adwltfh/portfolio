import type { Config } from "tailwindcss";

/**
 * Design tokens from the handoff (design_handoff_portfolio/styles.css :root).
 * Fixed pastels are literal hex (they don't change with theme); surface/ink/line/
 * hard/accent map to CSS variables so they respond to the light/dark theme defined
 * in globals.css. Fonts come from next/font (see app/fonts.ts) via CSS variables.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // theme-aware surfaces (driven by CSS vars in globals.css)
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-faint": "var(--ink-faint)",
        paper: "var(--paper)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        line: "var(--line)",
        hard: "var(--hard)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        // fixed pastel palette
        pink: "#ffc6df",
        "pink-deep": "#ff6fb0",
        lav: "#d3c4f4",
        "lav-deep": "#9f81e8",
        mint: "#bdeecf",
        "mint-deep": "#4fc78c",
        butter: "#ffe9a0",
        "butter-deep": "#f0bd3c",
        sky: "#c3e2ff",
        "sky-deep": "#61b0f2",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "18px",
        lg: "26px",
      },
      maxWidth: {
        container: "1120px",
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(43,33,64,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
