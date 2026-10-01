const RESUME_PDF = "/resume/Kazi-Yousuf-Resume.pdf";

export default function Resume() {
  return (
    <section id="resume" className="relative px-6 py-20 sm:px-10 lg:px-16">
      <div data-reveal className="glass mx-auto flex max-w-container flex-col items-start justify-between gap-6 rounded-surface p-8 sm:flex-row sm:items-center sm:p-10">
        <div>
          <h2 className="font-display text-h2 font-semibold">Want the short version?</h2>
          <p className="mt-2 max-w-md text-ink-2">Everything above, condensed to one page.</p>
        </div>
        <a
          href={RESUME_PDF}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="btn btn-secondary shrink-0"
        >
          Download résumé (PDF)
        </a>
      </div>
    </section>
  );
}
