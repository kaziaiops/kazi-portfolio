const stack = [
  { tool: "ComfyUI (local)", use: "Wan 2.2 14B and MiniMax H3 image-to-video, self-hosted" },
  { tool: "MiniMax H3", use: "Primary generator, about 3-4 min per 5-second shot" },
  { tool: "Wan 2.2 14B I2V", use: "Fallback generator, 24fps native duration" },
  { tool: "Google Flow", use: "Character locks and reference images" },
  { tool: "Veo 3.1 / 3.1 Lite", use: "Hero shots and native in-shot dialogue" },
  { tool: "ElevenLabs", use: "Voiceover generation" },
  { tool: "CapCut / Premiere Pro", use: "Editing and final assembly" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-section sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-container gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="font-display text-h1 font-semibold">About</h2>
          <p className="mt-4 max-w-md text-ink-2">
            Script to voice to generated shot to final cut: one continuous pipeline, run solo.
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
          <p>
            I build video without a camera. Every project starts as a script and ends as a cut:
            voiceover written and timed, references generated and locked, each shot generated frame
            by frame, then edited into a final sequence. I run all of it myself: character design,
            prompt writing, generation, and the edit.
          </p>
          <p>
            Two things I hold to on every project. The character doesn&apos;t drift: same face, same
            outfit, shot to shot. And the visual matches the words. If the line says she opens the
            drawer, the shot shows her opening the drawer, not a mood board standing in for it.
          </p>
          <p>
            I&apos;m based in Dhaka, Bangladesh, building toward freelance AI video production work.
            Everything on this site is real, current work, flagged honestly by status, finished or
            not.
          </p>

          <div className="pt-4">
            <h3 className="font-display text-h3 font-semibold text-ink">Pipeline</h3>
            <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {stack.map((s) => (
                <div key={s.tool} className="border-t border-white/10 pt-3">
                  <dt className="text-sm text-ink">{s.tool}</dt>
                  <dd className="mt-0.5 text-sm text-ink-3">{s.use}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="glass mt-6 rounded-surface p-6">
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
