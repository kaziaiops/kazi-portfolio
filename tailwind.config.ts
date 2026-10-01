import type { Config } from "tailwindcss";

const channel = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: channel("bg-0"),
          1: channel("bg-1"),
          2: channel("bg-2"),
          3: channel("bg-3"),
        },
        ink: {
          DEFAULT: channel("ink-1"),
          2: channel("ink-2"),
          3: channel("ink-3"),
        },
        accent: {
          DEFAULT: channel("accent"),
          hover: channel("accent-hover"),
          ink: channel("accent-ink"),
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 5.2vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        h1: ["clamp(2rem, 3.6vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        h2: ["clamp(1.5rem, 2.4vw, 2rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        h3: ["1.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        lead: ["clamp(1.0625rem, 1.4vw, 1.25rem)", { lineHeight: "1.55" }],
      },
      borderRadius: {
        pill: "999px",
        surface: "20px",
        inner: "10px",
      },
      boxShadow: {
        "depth-1": "var(--shadow-1)",
        "depth-2": "var(--shadow-2)",
        "depth-3": "var(--shadow-3)",
      },
      maxWidth: {
        container: "1240px",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
