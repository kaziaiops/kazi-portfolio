export default function About() {
  return (
    <section id="about" className="relative px-6 py-section sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-container gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div data-reveal>
          <h2 className="font-display text-h1 font-semibold">About</h2>
          <p className="mt-4 max-w-md text-ink-2">
            Voice to generated shot to final cut: one continuous pipeline, run solo.
          </p>

          <div className="mt-12">
            <h3 className="font-display text-h3 font-semibold">Education</h3>
            <p className="mt-4 border-t border-white/10 pt-3 text-sm text-ink">
              Higher Secondary Certificate
            </p>
            <p className="mt-0.5 text-sm text-ink-3">
              National Ideal School &amp; College, Dhaka, 2025
            </p>
          </div>
        </div>

        <div className="space-y-6 text-ink-2">
          <p data-reveal>
            I build video without a camera. Every project starts from your script and ends as a cut:
            voiceover generated and timed, references generated and locked, each shot generated frame
            by frame, then edited into a final sequence. I run all of it myself: character design,
            prompt writing, generation, and the edit.
          </p>
          <p data-reveal>
            Two things I hold to on every project. The character doesn&apos;t drift: same face, same
            outfit, shot to shot. And the visual matches the words. If the line says she opens the
            drawer, the shot shows her opening the drawer, not a mood board standing in for it.
          </p>
          <p data-reveal>
            I&apos;m based in Dhaka, Bangladesh, building toward freelance AI video production work.
            Everything on this site is real, current work, flagged honestly by status, finished or
            not.
          </p>

          <div data-reveal className="glass mt-6 rounded-surface p-6">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-h3 font-semibold text-ink">CineFlow</h3>
              <span className="tag">Self-built, still evolving</span>
            </div>
            <p className="mt-3 text-sm">
              I built my own tool for the repetitive parts of this pipeline. It turns a script into
              timed voice tracks, generation prompts, and a draft assembly automatically, so
              multi-shot projects stay organized instead of managed by hand. It&apos;s a working
              personal tool, not a finished product, and I keep extending it as new projects need
              it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
