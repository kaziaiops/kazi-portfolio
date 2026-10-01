import { CONTACT } from "@/lib/site";
import BriefForm from "./BriefForm";

const services = [
  "AI UGC / talking-head ads",
  "Product & spec ads",
  "Character-driven short-form video",
  "Explainer & narrative video",
];

// All four share one 24x24 grid, a 3-21 live area and the same 1.5 round stroke (set on the
// <svg>), so they read as one set. Outline only: no filled sub-shapes.
const icons = {
  email: <path d="M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM3.5 7.5 12 13.5l8.5-6" />,
  linkedin: (
    <path d="M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3ZM8 10.5V17M8 7.5v.01M12 17v-6.5M12 13.25a2.75 2.75 0 0 1 5.5 0V17" />
  ),
  github: (
    <path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.5a3.5 3.5 0 0 0-1-2.5 3.2 3.2 0 0 0-.1-2.4s-.9-.3-2.9 1a10 10 0 0 0-5 0c-2-1.3-2.9-1-2.9-1a3.2 3.2 0 0 0-.1 2.4A3.5 3.5 0 0 0 5.5 12c0 3.5 2 4.3 4 4.5-.5.5-.5 1-.5 1.8V21" />
  ),
  whatsapp: (
    <path d="M3 21l1.7-5A9 9 0 1 1 8 19.3L3 21ZM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .75a4.5 4.5 0 0 1-2-2l.75-1-1-2L9 8.5Z" />
  ),
};

const links = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: icons.email,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kaziaiops",
    href: "https://linkedin.com/in/kaziaiops",
    icon: icons.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/kaziaiops",
    href: "https://github.com/kaziaiops",
    icon: icons.github,
  },
  {
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: `https://wa.me/${CONTACT.whatsappDigits}`,
    icon: icons.whatsapp,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="cv-auto relative px-6 py-section [--cv-h:2216px] sm:px-10 sm:[--cv-h:1508px] lg:px-16 lg:[--cv-h:1320px]"
    >
      <div className="mx-auto max-w-container">
        <div data-reveal>
          <h2 className="font-display text-h1 font-semibold">Start a project</h2>
          <p className="mt-4 max-w-md text-ink-2">
            Open to new projects. I reply within 8 hours. Reach out directly.
          </p>
        </div>

        <div data-reveal className="mt-6 flex flex-wrap gap-2">
          {services.map((service) => (
            <span key={service} className="tag h-9 px-4 text-sm">
              {service}
            </span>
          ))}
        </div>

        <BriefForm />

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.label}
              data-reveal
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass group rounded-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-depth-3"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-9 w-9 rounded-full border border-white/15 p-2 text-ink-2 transition-colors group-hover:border-accent/50 group-hover:text-accent"
                aria-hidden
              >
                {link.icon}
              </svg>
              <span className="mt-5 block text-sm text-ink-3">{link.label}</span>
              <p className="mt-1 break-words text-ink transition-colors group-hover:text-accent">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        <p className="mt-16 text-sm text-ink-3">
          &copy; {new Date().getFullYear()} Kazi Yousuf, Dhaka, Bangladesh.
        </p>
      </div>
    </section>
  );
}
