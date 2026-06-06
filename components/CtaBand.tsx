import { siGoogleplay, siFdroid, siGithub } from "simple-icons";
import { useTranslations } from "next-intl";
import { BrandGlyph } from "./BrandGlyph";
import { StoreQr } from "./StoreQr";
import { site } from "@/lib/site";

export function CtaBand() {
  const t = useTranslations("Cta");
  return (
    <section id="get" className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface px-7 py-12 sm:px-12 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">{t("heading")}</h2>
            <p className="mt-4 max-w-lg text-pretty text-lg text-muted">
              {t("lead")}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 min-[485px]:flex min-[485px]:flex-wrap min-[485px]:items-center">
              <a
                href={site.links.play}
                target="_blank"
                rel="noreferrer"
                className="col-span-2 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-strong min-[485px]:w-auto"
              >
                <BrandGlyph icon={siGoogleplay} className="h-4 w-4" />
                Google Play
              </a>
              <a
                href={site.links.fdroid}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-border px-5 py-3 text-sm font-semibold text-text transition hover:border-border-strong hover:bg-surface-2 min-[485px]:w-auto"
              >
                <BrandGlyph icon={siFdroid} className="h-4 w-4" />
                F-Droid
              </a>
              <a
                href={site.links.releases}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-border px-5 py-3 text-sm font-semibold text-text transition hover:border-border-strong hover:bg-surface-2 min-[485px]:w-auto"
              >
                <BrandGlyph icon={siGithub} className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          <div className="hidden flex-col items-center gap-2 justify-self-end lg:flex">
            <StoreQr size={120} />
            <span className="text-sm text-muted">{t("scan")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
