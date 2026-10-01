import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoFacade from "@/components/VideoFacade";
import { SITE_NAME } from "@/lib/site";
import { projects, type ProjectStatus } from "@/lib/projects";

const statusClass: Record<ProjectStatus, string> = {
  Completed: "tag-done",
  "In Production": "tag-prod",
  "Coming Soon": "tag-soon",
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
      <main className="mx-auto max-w-5xl px-6 pb-28 pt-32 sm:px-10 sm:pt-40 lg:px-16">
        <Link href="/#work" className="text-sm text-ink-3 transition-colors hover:text-accent">
          Back to Selected work
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <h1 className="font-display text-h1 font-semibold">{project.title}</h1>
          <span className={`tag ${statusClass[project.status]}`}>{project.status}</span>
        </div>

        <p className="mt-5 max-w-2xl text-lead text-ink-2">{project.description}</p>
        <p className="mt-3 max-w-2xl text-sm text-ink-3">{project.detail}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {project.videos.map((v) => (
            <div key={v.youtubeId}>
              <p className="mb-3 text-sm text-ink-2">{v.label}</p>
              <VideoFacade
                youtubeId={v.youtubeId}
                title={`${project.title}: ${v.label}`}
                poster={v.poster}
                aspect={project.aspect}
                sizes="(max-width: 640px) 92vw, 440px"
                className="w-full"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start gap-4 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-h2 font-semibold">Have a project like this in mind?</p>
          <Link href="/#contact" className="btn btn-primary">
            Start a project
          </Link>
        </div>
      </main>
    </>
  );
}
