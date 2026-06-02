"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Practice" },
  { href: "/contact", label: "Contact" },
];

type Props = {
  ctaLabel?: string;
};

export default function Header({ ctaLabel = "Schedule Consultation" }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="top-header">
      <Link href="/" className="top-header-brand">
        Bainbridge<span className="brand-mark"> Law</span>
      </Link>
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        ≡
      </button>
      <nav className={`top-nav${open ? " is-open" : ""}`}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="cta" onClick={() => setOpen(false)}>
          {ctaLabel}
        </Link>
      </nav>
    </header>
  );
}
