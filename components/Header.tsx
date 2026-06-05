"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#sync", label: "Sync" },
  { href: "#compare", label: "Compare" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-bg/85 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Tokn home">
          <BrandMark className="h-9 w-9" />
          <span className="font-display text-lg font-semibold tracking-tight">Tokn</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted transition hover:text-text"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#get"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary transition hover:bg-primary-strong sm:inline-flex"
          >
            Get Tokn
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition hover:text-text md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-text transition hover:bg-surface-2"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#get"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-primary px-4 py-3 text-center text-base font-semibold text-on-primary"
            >
              Get Tokn
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
