import Link from "next/link";
import { projects } from "@/lib/projects";
import { CONTACT } from "@/lib/site";

const names = (status: string) =>
  projects
    .filter((p) => p.status === status)
    .map((p) => p.title)
    .join(", ");

/** Every answer below is taken from copy and data already on the site. Gaps are not papered over. */
const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What do you make?",
    a: "AI UGC and talking-head ads, product and spec ads, character-driven short-form video, and explainer and narrative video. I work solo, from script to final cut.",
  },
  {
    q: "Do you film anything?",
    a: "No. I build video without a camera: voiceover written and timed, references generated and locked, each shot generated, then edited into a final sequence.",
  },
  {
    q: "How do you keep a character consistent?",
    a: (
      <>
        The character is locked once, then generated shot by shot: same face, same outfit, shot to
        shot. The{" "}
        <Link href="/work/ugc-talking-head-ads" className="text-accent underline underline-offset-4">
          UGC campaigns
        </Link>{" "}
        show it across two full campaigns.
      </>
    ),
  },
  {
    q: "Which tools do you use?",
    a: "ComfyUI running Wan 2.2 14B and MiniMax H3 locally, Google Flow for character locks and references, Veo 3.1 for hero shots and in-shot dialogue, ElevenLabs for voiceover, and CapCut or Premiere Pro for the edit. I also built my own tool, CineFlow, for the repetitive parts of the pipeline.",
  },
  {
    q: "What formats and lengths do you work in?",
    a: "My current work is vertical 9:16: a four-shot spec ad of about 29 seconds, a fourteen-shot gig intro of about 74 seconds, and a microdrama episode cut toward 60 to 70 seconds. The brief form below asks for length and platform.",
  },
  {
    q: "Is everything on this site finished?",
    a: `No, and each project is flagged by its status. Completed: ${names("Completed")}. In production: ${names("In Production")}.`,
  },
  {
    q: "Who will I be working with?",
    a: "Me, Kazi Yousuf, based in Dhaka, Bangladesh. Character design, prompt writing, generation and the edit are all done by me.",
  },
  {
    q: "How do I start, and what does it cost?",
    a: (
      <>
        Fill in the brief below: project type, length, deadline, platform and a one-line idea. It
        opens a pre-filled email or WhatsApp message to me. You can also write directly to{" "}
        {CONTACT.email} or {CONTACT.whatsappDisplay}. Prices are not listed on this site.
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="cv-auto relative px-6 py-section [--cv-h:1746px] sm:px-10 sm:[--cv-h:1014px] lg:px-16 lg:[--cv-h:718px]"
    >
      <div className="mx-auto max-w-container">
        <div data-reveal>
          <h2 className="font-display text-h1 font-semibold">Questions</h2>
          <p className="mt-4 max-w-md text-ink-2">What clients usually want to know first.</p>
        </div>

        <dl className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} data-reveal className="border-t border-white/10 pt-4">
              <dt className="font-display text-h3 font-semibold">{f.q}</dt>
              <dd className="mt-2 text-ink-2">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
