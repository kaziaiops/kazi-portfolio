import { BRIEF_FORMATS, BRIEF_GREETING, BRIEF_LENGTHS, BRIEF_PLATFORMS, BRIEF_TYPES, mailtoUrl, whatsappUrl } from "@/lib/brief";
import { CONTACT } from "@/lib/site";
import BriefFormEnhancer from "./BriefFormEnhancer";

/**
 * Server-rendered, no backend. Submitting builds a pre-filled message and hands it to the
 * visitor's own email app or WhatsApp (see briefFormEnhance.ts, loaded lazily). Without JS the
 * form posts to the same mailto: address, and the two plain links underneath always work.
 */
export default function BriefForm() {
  const fallback = mailtoUrl(`${BRIEF_GREETING}\n\nProject type:\nFormat:\nLength:\nDeadline:\nPlatform:\nBrief:`);

  return (
    <form
      id="brief-form"
      noValidate
      action={`mailto:${CONTACT.email}`}
      method="post"
      encType="text/plain"
      aria-labelledby="brief-heading"
      data-reveal
      className="glass mt-10 rounded-surface p-6 sm:p-8"
    >
      <h3 id="brief-heading" className="font-display text-h2 font-semibold">
        Brief to quote
      </h3>
      <p className="mt-2 max-w-xl text-sm text-ink-2">
        Six quick answers. It opens a pre-filled email or WhatsApp message to me, nothing is
        stored on this site. I reply within 8 hours.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="field">
          <label htmlFor="brief-type">
            Project type <span className="field-req">(required)</span>
          </label>
          <select id="brief-type" name="type" defaultValue="" required>
            <option value="" disabled>
              Choose one
            </option>
            {BRIEF_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <p id="brief-type-err" role="alert" hidden className="field-err" />
        </div>

        <div className="field">
          <label htmlFor="brief-format">Format</label>
          <select id="brief-format" name="format" defaultValue="">
            <option value="">Not sure yet</option>
            {BRIEF_FORMATS.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="brief-length">Length</label>
          <select id="brief-length" name="length" defaultValue="">
            <option value="">Not sure yet</option>
            {BRIEF_LENGTHS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="brief-deadline">Deadline</label>
          <input id="brief-deadline" name="deadline" type="date" />
        </div>

        <div className="field">
          <label htmlFor="brief-platform">Platform</label>
          <select id="brief-platform" name="platform" defaultValue="">
            <option value="">Not sure yet</option>
            {BRIEF_PLATFORMS.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="field md:col-span-2">
          <label htmlFor="brief-text">
            One-line brief <span className="field-req">(required)</span>
          </label>
          <textarea
            id="brief-text"
            name="brief"
            rows={3}
            maxLength={400}
            required
            placeholder="What is the video, and who is it for?"
          />
          <p id="brief-text-err" role="alert" hidden className="field-err" />
        </div>

        <div className="field md:col-span-2 md:max-w-sm">
          <label htmlFor="brief-name">Your name (optional)</label>
          <input id="brief-name" name="name" type="text" autoComplete="name" />
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <button type="submit" name="via" value="email" className="btn btn-primary">
          Send by email
        </button>
        <button type="submit" name="via" value="whatsapp" className="btn btn-secondary">
          Send on WhatsApp
        </button>
      </div>

      <p id="brief-status" role="status" aria-live="polite" className="mt-4 min-h-[1.25rem] text-sm text-ink-2" />

      <p className="mt-2 text-sm text-ink-3">
        Prefer not to use the form?{" "}
        <a href={fallback} className="text-ink-2 underline underline-offset-4 hover:text-accent">
          Email me
        </a>{" "}
        or{" "}
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-2 underline underline-offset-4 hover:text-accent"
        >
          message me on WhatsApp
        </a>
        .
      </p>
      <BriefFormEnhancer />
    </form>
  );
}
