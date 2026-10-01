import { PIPELINE } from "@/lib/pipeline";

/**
 * Server-rendered and fully visible by default (static list). The lazy motion layer
 * (components/motion) upgrades it to a pinned scroll story on desktop, or a stacked
 * reveal on small/touch screens, and never runs under prefers-reduced-motion.
 */
export default function Pipeline() {
  return (
    <section id="pipeline" className="pipeline relative px-6 py-section sm:px-10 lg:px-16">
      <div className="pipeline-pin mx-auto max-w-container">
        <div data-reveal>
          <h2 className="font-display text-h1 font-semibold">Pipeline</h2>
          <p className="mt-4 max-w-md text-ink-2">
            How a project moves from script to final cut, one stage at a time.
          </p>
        </div>

        {/* pinned mode only: progress rail (decorative, the list below is the content) */}
        <div className="pipeline-rail" aria-hidden>
          <div className="pipeline-rail-line">
            <div className="pipeline-rail-fill" />
          </div>
          <ul>
            {PIPELINE.map((stage, i) => (
              <li key={stage.id} data-rail>
                <span className="text-accent">{String(i + 1).padStart(2, "0")}</span> {stage.name}
              </li>
            ))}
          </ul>
        </div>

        <ol className="pipeline-list mt-12 space-y-4">
          {PIPELINE.map((stage, i) => (
            <li
              key={stage.id}
              data-stage
              className="pipeline-stage glass rounded-surface p-6 sm:p-8"
            >
              <div className="grid gap-6 md:grid-cols-[11rem_1fr_1.3fr] md:gap-10">
                <div>
                  <span className="font-display text-h2 font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-h2 font-semibold">{stage.name}</h3>
                </div>
                <p className="text-ink-2">{stage.summary}</p>
                <ul className="space-y-3">
                  {stage.tools.map((t) => (
                    <li key={t.tool} className="border-t border-white/10 pt-3">
                      <span className="text-sm text-ink">{t.tool}</span>
                      <span className="mt-0.5 block text-sm text-ink-3">{t.use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
