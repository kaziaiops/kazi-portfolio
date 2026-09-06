"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import GleamText from "./GleamText";

const AmbientField = dynamic(() => import("./AmbientField"), { ssr: false });

export default function FilmstripGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduceMotion) return;

    let raf = 0;

    const update = () => {
      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;

      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = cardCenter - center;
        const ratio = Math.max(
          -1,
          Math.min(1, distance / (trackRect.width / 2)),
        );
        const rotateY = ratio * -14;
        const scale = 1 - Math.abs(ratio) * 0.09;
        const opacity = 1 - Math.abs(ratio) * 0.35;
        card.style.transform = `perspective(1200px) rotateY(${rotateY}deg) scale(${scale})`;
        card.style.opacity = `${Math.max(0.55, opacity)}`;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    trackRef.current.scrollLeft += e.deltaY;
  };

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        {!reduceMotion && <AmbientField />}
      </div>

      <div className="mb-12 px-6 sm:px-10 lg:px-16">
        <h2 className="font-display text-3xl sm:text-4xl">
          <GleamText text="Selected work" />
        </h2>
        <p
          className="sweep-wrap mt-3 max-w-xl text-ink/65"
          style={{ "--sweep-delay": "1.4s" } as React.CSSProperties}
        >
          Four projects, two disciplines — AI-generated video work and a
          weekly explainer series, both written, produced, and edited solo.
        </p>
      </div>

      <div
        ref={trackRef}
        onWheel={onWheel}
        className="filmstrip-track flex gap-6 overflow-x-auto scroll-smooth px-6 pb-6 snap-x snap-proximity sm:px-10 lg:px-16"
        style={{ scrollPaddingLeft: "1.5rem" }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            reduceMotion={!!reduceMotion}
            ref={(el) => {
              if (el) cardRefs.current[i] = el;
            }}
          />
        ))}
        <div className="w-px shrink-0" aria-hidden />
      </div>
    </section>
  );
}
