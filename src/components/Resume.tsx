import GleamText from "./GleamText";

const RESUME_PDF = "/resume/Kazi-Yousuf-Resume.pdf";

export default function Resume() {
  return (
    <section id="resume" className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display text-3xl sm:text-4xl">
          <GleamText text="Want the short version?" />
        </h2>
        <p className="mt-3 max-w-md text-ink/65">
          Everything above, condensed to one page.
        </p>
        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="glass glass-glow mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-ink transition-colors hover:border-gold hover:text-gold"
        >
          Download résumé (PDF)
        </a>
      </div>
    </section>
  );
}
