import GleamText from "./GleamText";
import Image from "next/image";
import { SHOWREEL } from "@/lib/projects";
import ShowreelDialog from "./ShowreelDialog";

export default function Hero() {
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

      {/* Poster-only hero: no player is loaded until "Watch Showreel" is clicked.
          TODO: swap in the real showreel loop (muted, <5MB, lazy, with poster) here. */}
      <div className="absolute inset-0 opacity-30 lg:left-[35%] lg:opacity-70 lg:[mask-image:linear-gradient(to_right,transparent,black_30%)]" aria-hidden>
        <Image
          src={SHOWREEL.poster}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          quality={70}
          className="object-cover object-[50%_30%]"
        />
      </div>

      {/* legibility scrim */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/10"
        aria-hidden
      />

      <div className="relative z-10 w-full px-6 pb-16 pt-28 sm:px-10 sm:pb-28 sm:pt-40 lg:px-16"
      >
        <p className="mb-4 text-sm text-ink/70 sm:text-base">
          Kazi Yousuf — Dhaka, Bangladesh
        </p>
        <h1 className="font-display max-w-4xl text-6xl font-normal sm:text-7xl"
        >
          <GleamText text="Character-consistent AI video, built shot by shot." />
        </h1>
        <p
          className="sweep-wrap mt-6 max-w-xl text-lg text-ink/75 sm:text-xl"
          style={{ "--sweep-delay": "0.4s" } as React.CSSProperties}
        >
          Voice to prompt to generated shot to final cut — one person,
          start to finish.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ShowreelDialog />
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm text-ink/90 transition-colors hover:border-gold hover:text-gold"
          >
            See the work
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 z-10 h-9 w-px -translate-x-1/2 bg-gradient-to-b from-ink/60 to-transparent"
        aria-hidden
      />

    </section>
  );
}
