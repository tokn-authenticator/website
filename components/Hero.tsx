import { ArrowUpRight } from "lucide-react";
import { siGithub } from "simple-icons";
import { useTranslations } from "next-intl";
import { BrandGlyph } from "./BrandGlyph";
import { StoreButtons } from "./StoreButtons";
import { Screenshot } from "./Screenshot";
import { site } from "@/lib/site";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <section id="top">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-36">
        <div className="text-center lg:text-left">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted transition hover:border-border-strong hover:text-text"
          >
            <BrandGlyph icon={siGithub} className="h-3.5 w-3.5" />
            {t("badge")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.04] sm:text-6xl">
            {t("titleLine1")}
            <br />
            <span className="text-primary">{t("titleLine2")}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted lg:mx-0">
            {t("lead")}
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <StoreButtons />
          </div>

          <p className="mt-5 text-sm text-muted">
            {t("subnote")}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Screenshot
            name="vault-home"
            alt={t("screenshotAlt")}
            className="w-[min(74vw,310px)] sm:w-[330px]"
            priority
            maskEnd={90}
          />
        </div>
      </div>
    </section>
  );
}
