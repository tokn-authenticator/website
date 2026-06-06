import { siGithub, siFdroid, siGoogleplay } from "simple-icons";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BrandGlyph } from "./BrandGlyph";
import { BrandMark } from "./BrandMark";
import { site } from "@/lib/site";

const socials = [
  { icon: siGithub, href: site.links.github, label: "GitHub" },
  { icon: siGoogleplay, href: site.links.play, label: "Google Play" },
  { icon: siFdroid, href: site.links.fdroid, label: "F-Droid" },
];

export function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Nav");
  const year = new Date().getFullYear();

  const productLinks = [
    { label: nav("features"), href: "#features" },
    { label: nav("security"), href: "#security" },
    { label: nav("sync"), href: "#sync" },
    { label: nav("compare"), href: "#compare" },
    { label: nav("faq"), href: "#faq" },
  ];
  const projectLinks = [
    { label: t("sourceCode"), href: site.links.github },
    { label: t("releases"), href: site.links.releases },
    { label: t("reportIssue"), href: site.links.issues },
    { label: t("licenseGpl"), href: site.links.license },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <BrandMark className="h-9 w-9" />
              <span className="font-display text-lg font-semibold tracking-tight">Tokn</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{t("tagline")}</p>
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

          <div>
            <h3 className="text-sm font-semibold">{t("productTitle")}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted transition hover:text-text">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">{t("projectTitle")}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {projectLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted transition hover:text-text"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">{t("copyright", { year })}</p>
          <div className="flex items-center gap-5 text-sm">
            <Link href="/privacy" className="text-muted transition hover:text-text">
              {t("privacy")}
            </Link>
            <Link href="/imprint" className="text-muted transition hover:text-text">
              {t("imprint")}
            </Link>
            <a
              href={site.links.license}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition hover:text-text"
            >
              {t("license")}
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted">{t("trademarks")}</p>
      </div>
    </footer>
  );
}
