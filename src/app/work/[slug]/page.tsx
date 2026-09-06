import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import GleamText from "@/components/GleamText";
import { projects, type ProjectStatus } from "@/lib/projects";

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "border-gold/40 text-gold",
  "In Production": "border-rust/50 text-rust",
  "Coming Soon": "border-ink/25 text-ink/60",
};

export function generateStaticParams() {
  return projects.filter((p) => !p.external).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} — Kazi Yousuf` : "Kazi Yousuf" };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project || project.external) notFound();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-6 pb-28 pt-32 sm:px-10 sm:pt-40 lg:px-16">
        <Link
          href="/#work"
          className="text-sm text-ink/60 transition-colors hover:text-gold"
        >
          Back to Selected work
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="font-display text-3xl sm:text-4xl">
            <GleamText text={project.title} />
          </h1>
          <span
            className={`rounded-full border px-2.5 py-1 text-xs ${statusStyles[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        <p className="mt-4 max-w-2xl text-ink/75">{project.description}</p>
        <p className="mt-3 max-w-2xl text-sm text-ink/55">{project.detail}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink/15 px-2.5 py-1 text-xs text-ink/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {project.videos.map((v) => (
            <div key={v.src}>
              <p className="mb-3 text-sm text-ink/60">{v.label}</p>
              <video
                className="glass glass-glow w-full rounded-sm"
                style={{ aspectRatio: project.aspect === "portrait" ? "9 / 16" : "16 / 9" }}
                src={v.src}
                poster={v.poster}
                controls
                playsInline
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
