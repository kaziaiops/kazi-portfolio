const services = [
  "AI UGC / talking-head ads",
  "Product & spec ads",
  "Character-driven short-form video",
  "Explainer & narrative video",
];

const icons = {
  email: (
    <path d="M3 5h18v14H3V5Zm0 0 9 7 9-7" />
  ),
  linkedin: (
    <path d="M6 8v10M6 5v.01M11 18v-6a3 3 0 0 1 6 0v6M11 12v6" />
  ),
  github: (
    <path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.5a3.5 3.5 0 0 0-1-2.5 3.2 3.2 0 0 0-.1-2.4s-.9-.3-2.9 1a10 10 0 0 0-5 0c-2-1.3-2.9-1-2.9-1a3.2 3.2 0 0 0-.1 2.4A3.5 3.5 0 0 0 5.5 12c0 3.5 2 4.3 4 4.5-.5.5-.5 1-.5 1.8V21" />
  ),
  whatsapp: (
    <path d="M7 17.5 3.5 20l1.2-3.7A8 8 0 1 1 7 17.5Zm2.2-8.7c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.7.7 1.8.1.1.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.2.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.4.1.4.3 0 .2 0 1-.3 1.4-.4.5-1.3 1-2.3.9-1.7-.2-3.4-1-4.7-2.3-1.1-1-2-2.4-2.3-3.5-.3-1 0-1.9.2-2.2Z" />
  ),
};

const links = [
  {
    label: "Email",
    value: "kaziyy999@gmail.com",
    href: "mailto:kaziyy999@gmail.com",
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
    value: "+880 1410-216644",
    href: "https://wa.me/8801410216644",
    icon: icons.whatsapp,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-section sm:px-10 lg:px-16">
      <div className="mx-auto max-w-container">
        <h2 className="font-display text-h1 font-semibold">Start a project</h2>
        <p className="mt-4 max-w-md text-ink-2">
          Available for freelance AI video production work. Reach out directly.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {services.map((service) => (
            <span key={service} className="tag h-9 px-4 text-sm">
              {service}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.label}
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
