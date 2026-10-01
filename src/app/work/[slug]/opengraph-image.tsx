import { projects } from "@/lib/projects";
import { renderOgImage, OG_SIZE } from "@/lib/og";

export const alt = "Kazi Yousuf | project";
export const size = OG_SIZE;
export const contentType = "image/png";
export const runtime = "edge";

export default function Image({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  return renderOgImage(
    project?.title ?? "Kazi Yousuf",
    project ? `${project.status} | Kazi Yousuf` : "Kazi Yousuf | AI Video Creator",
    project?.tags.join(" | ") ?? "Dhaka, Bangladesh",
  );
}
