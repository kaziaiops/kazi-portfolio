"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import GleamText from "./GleamText";

const statusStyles: Record<Project["status"], string> = {
  Completed: "border-gold/40 text-gold",
  "In Production": "border-rust/50 text-rust",
  "Coming Soon": "border-ink/25 text-ink/60",
};

interface ProjectCardProps {
  project: Project;
  reduceMotion: boolean;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, reduceMotion }, ref) => {
    const previewVideo = project.videos[0];
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoFailed, setVideoFailed] = useState(false);

    // Cards autoplay muted while scrolled into view instead of requiring
    // hover — a static poster alone reads as "broken image", not "video".
    useEffect(() => {
      if (reduceMotion || videoFailed || project.external || !previewVideo) return;
      const el = videoRef.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, [reduceMotion, videoFailed, project.external, previewVideo]);

    const mediaClassName =
      "glass glass-glow relative block overflow-hidden border-x border-ink/10";
    const mediaStyle: React.CSSProperties = {
      aspectRatio: project.aspect === "portrait" ? "9 / 16" : "16 / 9",
    };

    const mediaContent = (
      <>
        {project.external || !previewVideo ? (
          <Image
            src={project.poster}
            alt=""
            fill
            sizes="(max-width: 640px) 88vw, 560px"
            className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          />
        ) : !videoFailed ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            src={previewVideo.src}
            poster={project.poster}
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoFailed(true)}
          />
        ) : (
          <Image
            src={project.poster}
            alt=""
            fill
            sizes="(max-width: 640px) 80vw, 560px"
            className="object-cover"
          />
        )}

        <div
          className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/25 to-transparent"
          aria-hidden
        />

        {!project.external && (
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/70 bg-bg/40 backdrop-blur-sm">
              <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-gold" />
            </div>
          </div>
        )}

        <span
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 text-xs backdrop-blur-sm ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="font-display text-xl sm:text-2xl">
            <GleamText text={project.title} />
          </h3>
          <p
            className="sweep-wrap mt-1.5 text-sm text-ink/75"
            style={{ "--sweep-delay": "0.6s", "--sweep-dur": "7s" } as React.CSSProperties}
          >
            {project.description}
          </p>
          <p
            className="sweep-wrap mt-2 hidden text-xs text-ink/60 sm:block"
            style={{ "--sweep-delay": "1.8s", "--sweep-dur": "7s" } as React.CSSProperties}
          >
            {project.detail}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink/15 px-2.5 py-1 text-xs text-ink/70"
              >
                {tag}
              </span>
            ))}
            {project.external ? (
              <span className="ml-auto text-xs text-gold/90 group-hover:text-gold">
                {project.external.cta}
              </span>
            ) : (
              <span className="ml-auto rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs text-gold transition-colors group-hover:border-gold group-hover:bg-gold/20">
                Open
              </span>
            )}
          </div>
        </div>
      </>
    );

    return (
      <div
        ref={ref}
        data-card
        className="filmstrip-card group relative shrink-0 snap-center"
        style={{
          width: project.aspect === "portrait" ? "min(78vw, 340px)" : "min(88vw, 560px)",
        }}
      >
        <div className="sprocket-row h-3 rounded-t-sm" aria-hidden />

        {project.external ? (
          <a
            href={project.external.href}
            target="_blank"
            rel="noopener noreferrer"
            className={mediaClassName}
            style={mediaStyle}
          >
            {mediaContent}
          </a>
        ) : (
          <Link
            href={`/work/${project.slug}`}
            className={mediaClassName}
            style={mediaStyle}
          >
            {mediaContent}
          </Link>
        )}

        <div className="sprocket-row h-3 rounded-b-sm" aria-hidden />
      </div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
