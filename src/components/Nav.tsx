"use client";

import GleamText from "./GleamText";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-4xl items-center justify-between rounded-full px-5 py-2.5 text-sm">
        <a
          href="/#top"
          className="font-display text-base tracking-tight transition-opacity hover:opacity-80"
        >
          <GleamText text="Kazi Yousuf" />
        </a>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-ink/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
