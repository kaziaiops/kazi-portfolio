import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const statusClass: Record<Project["status"], string> = {
  Completed: "tag-done",
  "In Production": "tag-prod",
  "Coming Soon": "tag-soon",
};

interface ProjectCardProps {
  project: Project;
}

/** Poster-only card (no player): the video lives behind VideoFacade on the project page. */
export default function ProjectCard({ project }: ProjectCardProps) {
  const hasPage = project.videos.length > 0;

  const media = (
    <div
      className="relative block overflow-hidden rounded-surface border border-white/10 bg-bg-2 shadow-depth-3"
      style={{ aspectRatio: project.aspect === "portrait" ? "9 / 14" : "16 / 9" }}
    >
      <Image
        src={project.poster}
        alt={`${project.title} - poster`}
        fill
        sizes="(max-width: 640px) 78vw, 340px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent"
        aria-hidden
      />
      {hasPage && (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/60 bg-bg/50 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:scale-110">
            <div className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-accent" />
          </div>
        </div>
      )}
      <span className={`tag absolute right-3 top-3 bg-bg/60 backdrop-blur-sm ${statusClass[project.status]}`}>
        {project.status}
      </span>
    </div>
  );

  return (
    <div
      data-card
      className="group shrink-0 snap-center"
      style={{
        width: project.aspect === "portrait" ? "min(78vw, 320px)" : "min(88vw, 520px)",
      }}
    >
      <div className="film-card">
        {hasPage ? (
          <Link
            href={`/work/${project.slug}`}
            aria-label={`${project.title}: open project`}
            className="block"
          >
            {media}
          </Link>
        ) : (
          media
        )}
      </div>

      <div className="pt-8">
        <h3 className="font-display text-h3 font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-ink-2">{project.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {hasPage && (
          <Link href={`/work/${project.slug}`} className="btn btn-secondary btn-sm mt-5">
            Watch project
          </Link>
        )}
      </div>
    </div>
  );
}
