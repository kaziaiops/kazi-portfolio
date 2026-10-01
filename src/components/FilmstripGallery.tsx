"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function FilmstripGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const reduceMotion = usePrefersReducedMotion();

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
        // tilt only the poster stack, so the card text stays flat and readable
        const media = card.querySelector<HTMLElement>(".film-card");
        if (!media) return;
        media.style.transform = `perspective(1200px) rotateY(${rotateY}deg) scale(${scale})`;
        media.style.opacity = `${Math.max(0.55, opacity)}`;
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
    <section id="work" className="relative py-section">
      <div className="mx-auto mb-12 max-w-container px-6 sm:px-10 lg:px-16">
        <h2 className="font-display text-h1 font-semibold">Selected work</h2>
        <p className="mt-4 max-w-xl text-ink-2">
          Four projects across AI-generated video and a weekly explainer series, all written,
          produced and edited solo.
        </p>
      </div>

      <div
        ref={trackRef}
        onWheel={onWheel}
        className="filmstrip-track flex snap-x snap-proximity gap-10 overflow-x-auto scroll-smooth px-6 pb-16 pt-4 sm:px-10 lg:px-16"
        style={{ scrollPaddingLeft: "1.5rem" }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
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
