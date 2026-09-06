import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#08090C",
        surface: "#101319",
        ink: "#E8E6DE",
        gold: "#C9A227",
        rust: "#B5651D",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.7" }],
        lg: ["1.125rem", { lineHeight: "1.7" }],
        xl: ["1.4rem", { lineHeight: "1.5" }],
        "2xl": ["1.75rem", { lineHeight: "1.35" }],
        "3xl": ["2.2rem", { lineHeight: "1.2" }],
        "4xl": ["2.75rem", { lineHeight: "1.12" }],
        "5xl": ["3.5rem", { lineHeight: "1.08" }],
        "6xl": ["clamp(3rem, 7vw, 5.5rem)", { lineHeight: "1.02" }],
        "7xl": ["clamp(3.5rem, 9vw, 7rem)", { lineHeight: "1" }],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(201,162,39,0.12), 0 8px 40px -12px rgba(201,162,39,0.25)",
      },
      transitionTimingFunction: {
        reel: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
