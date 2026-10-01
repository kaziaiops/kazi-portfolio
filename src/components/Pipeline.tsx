import { PIPELINE } from "@/lib/pipeline";

/** The client's side of the pipeline, in the owner's own wording. Not per stage, to avoid inventing steps. */
const CLIENT_STEPS = [
  { label: "You send", text: "The script, and your format (9:16 or 16:9)." },
  { label: "You approve", text: "The script, before voiceover starts." },
  { label: "You get", text: "The finished video, delivered once the balance is paid." },
];

/**
 * Server-rendered and fully visible by default (static list). The lazy motion layer
 * (components/motion) upgrades it to a pinned scroll story on desktop, or a stacked
 * reveal on small/touch screens, and never runs under prefers-reduced-motion.
 */
export default function Pipeline() {
  return (
    <section id="pipeline" className="pipeline relative px-6 py-section sm:px-10 lg:px-16">
      <div className="pipeline-pin mx-auto max-w-container">
        <div data-reveal className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <h2 className="font-display text-h1 font-semibold">How a project runs</h2>
            <p className="mt-4 max-w-md text-ink-2">
              From your script to the final cut, one stage at a time, all by one person.
            </p>
          </div>

          <dl className="glass rounded-surface p-5 text-sm sm:p-6">
            {CLIENT_STEPS.map((c, i) => (
              <div
                key={c.label}
                className={`grid grid-cols-[5.5rem_1fr] gap-3 ${i ? "mt-3 border-t border-white/10 pt-3" : ""}`}
              >
                <dt className="text-accent">{c.label}</dt>
                <dd className="text-ink-2">{c.text}</dd>
              </div>
            ))}
          </dl>
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
