import GleamText from "./GleamText";

const services = [
  "AI UGC / talking-head ads",
  "Product & spec ads",
  "Character-driven short-form video",
  "Explainer & narrative video",
];

const links = [
  {
    label: "Email",
    value: "kaziyy999@gmail.com",
    href: "mailto:kaziyy999@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kaziaiops",
    href: "https://linkedin.com/in/kaziaiops",
  },
  {
    label: "GitHub",
    value: "github.com/kaziaiops",
    href: "https://github.com/kaziaiops",
  },
  {
    label: "WhatsApp",
    value: "+880 1410-216644",
    href: "https://wa.me/8801410216644",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-28 sm:px-10 sm:py-36 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl">
          <GleamText text="Start a project" />
        </h2>
        <p
          className="sweep-wrap mt-3 max-w-md text-ink/65"
          style={{ "--sweep-delay": "0.5s" } as React.CSSProperties}
        >
          Available for freelance AI video production work. Reach out
          directly.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {services.map((service) => (
            <span
              key={service}
              className="rounded-full border border-ink/15 px-3 py-1.5 text-sm text-ink/70"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-md border border-ink/12 p-5 transition-colors hover:border-gold/50"
            >
              <span className="text-sm text-ink/50">{link.label}</span>
              <p className="mt-2 break-words text-ink group-hover:text-gold transition-colors">
                {link.value}
              </p>
            </a>
          ))}
        </div>

        <p className="mt-16 text-sm text-ink/40">
          © {new Date().getFullYear()} Kazi Yousuf, Dhaka, Bangladesh.
        </p>
      </div>
    </section>
  );
}
