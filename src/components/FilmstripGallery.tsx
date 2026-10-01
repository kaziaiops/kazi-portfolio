import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

/**
 * Server component: markup only. The tilt-by-distance motion is a ScrollTrigger per card,
 * wired up by the lazy motion layer (components/motion) after first scroll.
 */
export default function FilmstripGallery() {
  return (
    <section id="work" className="relative py-section">
      <div
        data-reveal
        className="mx-auto mb-12 max-w-container px-6 sm:px-10 lg:px-16"
      >
        <h2 className="font-display text-h1 font-semibold">Selected work</h2>
        <p className="mt-4 max-w-xl text-ink-2">
          Four projects across AI-generated video and a weekly explainer series, all written,
          produced and edited solo.
        </p>
      </div>

      <div
        className="filmstrip-track flex snap-x snap-proximity gap-10 overflow-x-auto scroll-smooth px-6 pb-16 pt-4 sm:px-10 lg:px-16"
        style={{ scrollPaddingLeft: "1.5rem" }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        <div className="w-px shrink-0" aria-hidden />
      </div>
    </section>
  );
}
