import Link from "next/link";
import { siGithub, siFdroid, siGoogleplay } from "simple-icons";
import { BrandGlyph } from "./BrandGlyph";
import { BrandMark } from "./BrandMark";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features", external: false },
      { label: "Security", href: "#security", external: false },
      { label: "Sync", href: "#sync", external: false },
      { label: "FAQ", href: "#faq", external: false },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Source code", href: site.links.github, external: true },
      { label: "Releases", href: site.links.releases, external: true },
      { label: "Report an issue", href: site.links.issues, external: true },
      { label: "License (GPL-3.0)", href: site.links.license, external: true },
    ],
  },
];

const socials = [
  { icon: siGithub, href: site.links.github, label: "GitHub" },
  { icon: siGoogleplay, href: site.links.play, label: "Google Play" },
  { icon: siFdroid, href: site.links.fdroid, label: "F-Droid" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <BrandMark className="h-9 w-9" />
              <span className="font-display text-lg font-semibold tracking-tight">Tokn</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline} A free, open-source 2FA authenticator for Android.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition hover:border-border-strong hover:text-text"
                >
                  <BrandGlyph icon={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="text-muted transition hover:text-text"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            Copyright {year} DiamondForgeLabs. Free software under the GPL-3.0.
          </p>
          <div className="flex items-center gap-5 text-sm">
            <Link href="/privacy" className="text-muted transition hover:text-text">
              Privacy
            </Link>
            <a
              href={site.links.license}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition hover:text-text"
            >
              License
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted">
          All product names, logos and brands are property of their respective owners. References to
          other apps and services are nominative and do not imply any affiliation or endorsement.
        </p>
      </div>
    </footer>
  );
}
