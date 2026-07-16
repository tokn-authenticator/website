import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ChevronDown, Import } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BrandMark } from "@/components/BrandMark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Footer } from "@/components/Footer";
import { CtaBand } from "@/components/CtaBand";
import { Screenshot } from "@/components/Screenshot";
import { StoreButtons } from "@/components/StoreButtons";
import { site, competitors, guideSlug } from "@/lib/site";
import { absoluteUrl, languageAlternates } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: guideSlug(c) }));
}

const stepIds = ["s1", "s2", "s3", "s4"] as const;
const faqIds = ["f1", "f2", "f3"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const competitor = competitors.find((c) => guideSlug(c) === slug);
  if (!competitor) return {};
  const t = await getTranslations({ locale, namespace: "Guides" });
  const path = `/guides/${slug}`;
  return {
    title: { absolute: t(`apps.${competitor.key}.metaTitle`) },
    description: t(`apps.${competitor.key}.metaDescription`),
    alternates: {
      canonical: absoluteUrl(locale, path),
      languages: languageAlternates(path),
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const competitor = competitors.find((c) => guideSlug(c) === slug);
  if (!competitor) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Guides" });
  const nav = await getTranslations({ locale, namespace: "Nav" });
  const tSwitching = await getTranslations({ locale, namespace: "Switching" });

  const app = (key: string) => t(`apps.${competitor.key}.${key}`);
  const title = t("title", { app: competitor.name });
  const home = absoluteUrl(locale, "/");
  const here = absoluteUrl(locale, `/guides/${slug}`);
  const others = competitors.filter((c) => c.slug !== competitor.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${here}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Tokn", item: home },
          { "@type": "ListItem", position: 2, name: title, item: here },
        ],
      },
      {
        "@type": "WebPage",
        "@id": here,
        url: here,
        name: app("metaTitle"),
        description: app("metaDescription"),
        inLanguage: locale,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#app` },
        breadcrumb: { "@id": `${here}#breadcrumbs` },
      },
      {
        "@type": "HowTo",
        "@id": `${here}#howto`,
        name: title,
        description: app("intro"),
        inLanguage: locale,
        step: stepIds.map((id, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: app(`steps.${id}.title`),
          text: app(`steps.${id}.body`),
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${here}#faq`,
        inLanguage: locale,
        mainEntity: faqIds.map((id) => ({
          "@type": "Question",
          name: app(`faq.${id}.q`),
          acceptedAnswer: { "@type": "Answer", text: app(`faq.${id}.a`) },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-border bg-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label={nav("home")}>
            <BrandMark className="h-9 w-9" />
            <span className="font-display text-lg font-semibold tracking-tight">Tokn</span>
          </Link>
          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
            <Link
              href="/#get"
              className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary transition hover:bg-primary-strong sm:inline-flex"
            >
              {nav("getTokn")}
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:pt-20">
          <div className="text-center lg:text-left">
            <p className="flex items-center justify-center gap-2 font-medium text-sm uppercase tracking-widest text-primary lg:justify-start">
              <Import className="h-4 w-4" /> {t("eyebrow")}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.04] sm:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted lg:mx-0">
              {app("intro")}
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <StoreButtons />
            </div>
          </div>

          <div className="hidden justify-center lg:flex lg:justify-end">
            <Screenshot
              name="import-source-picker"
              alt={tSwitching("altPicker")}
              className="w-[300px]"
              priority
              maskEnd={85}
            />
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">{t("stepsHeading")}</h2>
          <ol className="mt-8 space-y-6">
            {stepIds.map((id, i) => (
              <li key={id} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-on-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{app(`steps.${id}.title`)}</h3>
                  <p className="mt-1.5 text-pretty leading-relaxed text-muted">
                    {app(`steps.${id}.body`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-10">
            <Link
              href={`/vs/${competitor.slug}`}
              className="font-medium text-primary underline-offset-4 transition hover:underline"
            >
              {t("compareLink", { app: competitor.name })}
            </Link>
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="text-center">
            <p className="font-medium text-sm uppercase tracking-widest text-primary">FAQ</p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">{t("faqHeading")}</h2>
          </div>
          <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface">
            {faqIds.map((id) => (
              <details key={id} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left sm:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-medium">{app(`faq.${id}.q`)}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-6 text-pretty leading-relaxed text-muted sm:px-6">
                  {app(`faq.${id}.a`)}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <h2 className="text-xl font-semibold sm:text-2xl">{t("othersHeading")}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/guides/${guideSlug(c)}`}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted transition hover:border-border-strong hover:bg-surface-2 hover:text-text"
              >
                {t("title", { app: c.name })}
              </Link>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
