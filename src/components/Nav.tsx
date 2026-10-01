import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Primary"
        className="glass flex h-14 w-full max-w-3xl items-center justify-between rounded-pill pl-5 pr-2"
      >
        <Link
          href="/#top"
          className="font-display text-lg font-semibold tracking-tight text-ink transition-opacity hover:opacity-80"
        >
          Kazi Yousuf
        </Link>
        <ul className="flex items-center gap-1 text-sm sm:gap-2">
          {links.map((link) => (
            <li key={link.href} className="hidden sm:block">
              <Link
                href={link.href}
                className="rounded-pill px-3 py-2 text-ink-2 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/#contact" className="btn btn-primary btn-sm">
              Start a project
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
