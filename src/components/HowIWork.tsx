import { PIPELINE } from "@/lib/pipeline";

const byId = (id: string) => PIPELINE.find((s) => s.id === id)!;
const toolNames = (...ids: string[]) =>
  ids.flatMap((id) => byId(id).tools.map((t) => t.tool)).join(", ");

/**
 * Four client-facing steps folded from the five pipeline stages in lib/pipeline.ts.
 * No timelines, prices or approval rules: none exist in the repo yet.
 */
const steps = [
  {
    title: "Send a brief",
    text: `${byId("script").summary} You tell me the project type, length, deadline, platform and the idea in one line.`,
    tools: toolNames("script"),
  },
  {
    title: "Voice and character",
    text: `${byId("voice").summary} ${byId("reference").summary}`,
    tools: toolNames("voice", "reference"),
  },
  {
    title: "Shots",
    text: byId("shot").summary,
    tools: toolNames("shot"),
  },
  {
    title: "Final cut",
    text: `${byId("cut").summary} You receive the finished video.`,
    tools: toolNames("cut"),
  },
];

export default function HowIWork() {
  return (
    <section id="how-it-works" className="relative px-6 py-section sm:px-10 lg:px-16">
      <div className="mx-auto max-w-container">
        <div data-reveal>
          <h2 className="font-display text-h1 font-semibold">How a project runs</h2>
          <p className="mt-4 max-w-md text-ink-2">Four steps, one person, from your brief to the final cut.</p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} data-reveal className="glass rounded-surface p-6">
              <span className="font-display text-h2 font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-display text-h3 font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-ink-2">{step.text}</p>
              <p className="mt-4 border-t border-white/10 pt-3 text-sm text-ink-3">
                <span className="text-ink-2">Tools:</span> {step.tools}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
