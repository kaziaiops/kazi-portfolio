"use client";

import { motion, useReducedMotion } from "framer-motion";
import GleamText from "./GleamText";

const RESUME_PDF = "/resume/Kazi-Yousuf-Resume.pdf";

export default function Resume() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="resume" className="relative px-6 py-28 sm:px-10 sm:py-36 lg:px-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display text-3xl sm:text-4xl">
          <GleamText text="Want the short version?" />
        </h2>
        <p className="sweep-wrap mt-3 max-w-md text-ink/65">
          Everything above, condensed to one page.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-8"
          aria-hidden
        >
          <motion.svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            animate={reduceMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M12 4v14m0 0 6-6m-6 6-6-6"
              stroke="#5FA8D3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>

        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm text-ink/90 transition-colors hover:border-gold hover:text-gold"
        >
          Download résumé (PDF)
        </a>

        <div className="glass glass-glow mt-8 w-full overflow-hidden rounded-sm">
          <iframe
            src={RESUME_PDF}
            title="Kazi Yousuf — Résumé"
            className="h-[70vh] w-full sm:h-[820px]"
            style={{ colorScheme: "light" }}
          />
        </div>
        <p className="mt-3 text-xs text-ink/40">
          Preview not loading?{" "}
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gold"
          >
            Open the PDF directly
          </a>
          .
        </p>
      </div>
    </section>
  );
}
