import { forwardRef } from "react";
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
}

/** Poster-only card (no player): the video lives behind VideoFacade on the project page. */
const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project }, ref) => {
    const hasPage = project.videos.length > 0;

    const media = (
      <div
        className="glass glass-glow relative block overflow-hidden border-x border-ink/10"
        style={{ aspectRatio: project.aspect === "portrait" ? "9 / 16" : "16 / 9" }}
      >
        <Image
          src={project.poster}
          alt={`${project.title} — poster`}
          fill
          sizes="(max-width: 640px) 78vw, 340px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent"
          aria-hidden
        />
        {hasPage && (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/70 bg-bg/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <div className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-gold" />
            </div>
          </div>
        )}
        <span
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 text-xs backdrop-blur-sm ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>
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
        {hasPage ? (
          <Link
            href={`/work/${project.slug}`}
            aria-label={`${project.title} — open project`}
            className="block"
          >
            {media}
          </Link>
        ) : (
          media
        )}
        <div className="sprocket-row h-3 rounded-b-sm" aria-hidden />

        <div className="px-1 pt-4">
          <h3 className="font-display text-xl sm:text-2xl">
            <GleamText text={project.title} />
          </h3>
          <p className="mt-1.5 text-sm text-ink/75">{project.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink/15 px-2.5 py-1 text-xs text-ink/70"
              >
                {tag}
              </span>
            ))}
          </div>
          {hasPage && (
            <Link
              href={`/work/${project.slug}`}
              className="mt-4 inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm text-gold transition-colors hover:border-gold hover:bg-gold/20"
            >
              Watch project
            </Link>
          )}
        </div>
      </div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
