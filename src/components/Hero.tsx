"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import GleamText from "./GleamText";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.01 : 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-bg"
    >
      {/* fallback layer: always present, so a missing/failed video still looks intentional */}
      <div
        className="grain absolute inset-0 opacity-[0.08] mix-blend-overlay"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 10%, #171a22 0%, #08090C 60%, #08090C 100%)",
        }}
        aria-hidden
      />

      {!videoFailed && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          style={{ objectPosition: "50% 25%" }}
          src="/videos/hero-reel.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoFailed(true)}
          aria-hidden
        />
      )}

      {/* legibility scrim */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/10"
        aria-hidden
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full px-6 pb-16 pt-28 sm:px-10 sm:pb-28 sm:pt-40 lg:px-16"
      >
        <motion.p
          variants={item}
          className="mb-4 text-sm text-ink/70 sm:text-base"
        >
          Kazi Yousuf — Dhaka, Bangladesh
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display max-w-4xl text-6xl font-normal sm:text-7xl"
        >
          <GleamText text="Character-consistent AI video, built shot by shot." />
        </motion.h1>
        <motion.p
          variants={item}
          className="sweep-wrap mt-6 max-w-xl text-lg text-ink/75 sm:text-xl"
          style={{ "--sweep-delay": "0.4s" } as React.CSSProperties}
        >
          Voice to prompt to generated shot to final cut — one person,
          start to finish.
        </motion.p>

        <motion.a
          variants={item}
          href="#work"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm text-ink/90 transition-colors hover:border-gold hover:text-gold"
        >
          See the work
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-[1px] bg-gradient-to-b from-ink/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
