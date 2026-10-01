import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoFacade from "@/components/VideoFacade";
import GleamText from "@/components/GleamText";
import { SITE_NAME } from "@/lib/site";
import { projects, type ProjectStatus } from "@/lib/projects";

const statusStyles: Record<ProjectStatus, string> = {
  Completed: "border-gold/40 text-gold",
  "In Production": "border-rust/50 text-rust",
  "Coming Soon": "border-ink/25 text-ink/60",
};

export function generateStaticParams() {
  return projects.filter((p) => p.videos.length > 0).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: SITE_NAME };
  const title = project.title;
  const url = `/work/${project.slug}`;
  return {
    title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: `${title} | ${SITE_NAME}`, description: project.description, siteName: SITE_NAME },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE_NAME}`, description: project.description },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project || project.videos.length === 0) notFound();

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
            <div key={v.youtubeId}>
              <p className="mb-3 text-sm text-ink/60">{v.label}</p>
              <VideoFacade
                youtubeId={v.youtubeId}
                title={`${project.title} — ${v.label}`}
                poster={v.poster}
                aspect={project.aspect}
                sizes="(max-width: 640px) 92vw, 440px"
                className="w-full rounded-sm"
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
