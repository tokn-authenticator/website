import type { Metadata } from "next";
import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BrandMark } from "@/components/BrandMark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { RevealEmail } from "@/components/RevealEmail";
import { site } from "@/lib/site";
import { absoluteUrl, languageAlternates } from "@/lib/meta";

function PrivacyJsonLd({ locale, title }: { locale: string; title: string }) {
  const home = absoluteUrl(locale, "/");
  const here = absoluteUrl(locale, "/privacy");
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
        name: title,
        inLanguage: locale,
        isPartOf: { "@id": `${site.url}/#website` },
        breadcrumb: { "@id": `${here}#breadcrumbs` },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return {
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    alternates: {
      canonical: absoluteUrl(locale, "/privacy"),
      languages: languageAlternates("/privacy"),
    },
  };
}

const h2 = "font-display text-2xl font-semibold tracking-tight mt-12";
const p = "mt-4 text-pretty leading-relaxed text-muted";
const li = "leading-relaxed text-muted";
const link = "font-medium text-primary underline-offset-4 hover:underline";

export default function Privacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("Privacy");
  const nav = useTranslations("Nav");
  const common = useTranslations("Common");

  return (
    <>
      <PrivacyJsonLd locale={locale} title={t("title")} />
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label={nav("home")}>
            <BrandMark className="h-9 w-9" />
            <span className="font-display text-lg font-semibold tracking-tight">Tokn</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-text"
        >
          <ArrowLeft className="h-4 w-4" /> {common("backHome")}
        </Link>

        <h1 className="mt-6 text-balance text-4xl font-bold">{t("title")}</h1>
        <p className="mt-3 font-medium text-sm text-muted">{t("effective")}</p>

        <p className="mt-8 text-pretty text-lg leading-relaxed text-muted">{t("intro")}</p>

        <h2 className={h2}>{t("controllerHeading")}</h2>
        <p className={p}>{t("controllerText")}</p>

        <h2 className={h2}>{t("appHeading")}</h2>
        <p className={p}>{t("appIntro")}</p>
        <ul className="mt-4 space-y-3 pl-5 [list-style:disc]">
          <li className={li}>
            <span className="font-medium text-text">{t("appNoAccountTitle")}</span>{" "}
            {t("appNoAccountText")}
          </li>
          <li className={li}>
            <span className="font-medium text-text">{t("appNoAnalyticsTitle")}</span>{" "}
            {t("appNoAnalyticsText")}
          </li>
          <li className={li}>
            <span className="font-medium text-text">{t("appOnDeviceTitle")}</span>{" "}
            {t("appOnDeviceText")}
          </li>
          <li className={li}>
            <span className="font-medium text-text">{t("appBackupsTitle")}</span>{" "}
            {t("appBackupsText")}
          </li>
          <li className={li}>
            <span className="font-medium text-text">{t("appLocationTitle")}</span>{" "}
            {t("appLocationText")}
          </li>
        </ul>

        <p className={p}>{t("permissionsIntro")}</p>
        <ul className="mt-4 space-y-3 pl-5 [list-style:disc]">
          <li className={li}>
            <span className="font-medium text-text">{t("permCameraTitle")}</span>{" "}
            {t("permCameraText")}
          </li>
          <li className={li}>
            <span className="font-medium text-text">{t("permInternetTitle")}</span>{" "}
            {t("permInternetText")}
          </li>
          <li className={li}>
            <span className="font-medium text-text">{t("permBiometricTitle")}</span>{" "}
            {t("permBiometricText")}
          </li>
        </ul>

        <h2 className={h2}>{t("siteHeading")}</h2>
        <p className={p}>
          <span className="font-medium text-text">{t("siteAnalyticsTitle")}</span>{" "}
          {t("siteAnalyticsText")}
        </p>
        <p className={p}>
          <span className="font-medium text-text">{t("siteAnalyticsLegalTitle")}</span>{" "}
          {t("siteAnalyticsLegalText")}
        </p>
        <p className={p}>
          <span className="font-medium text-text">{t("siteFontsTitle")}</span> {t("siteFontsText")}
        </p>
        <p className={p}>
          <span className="font-medium text-text">{t("siteLinksTitle")}</span> {t("siteLinksText")}
        </p>

        <h2 className={h2}>{t("thirdPartiesHeading")}</h2>
        <p className={p}>{t("thirdPartiesText")}</p>

        <h2 className={h2}>{t("optOutHeading")}</h2>
        <p className={p}>{t("optOutText")}</p>

        <h2 className={h2}>{t("rightsHeading")}</h2>
        <p className={p}>{t("rightsText")}</p>

        <h2 className={h2}>{t("childrenHeading")}</h2>
        <p className={p}>{t("childrenText1")}</p>
        <p className={p}>
          {t("childrenText2Pre")}
          <RevealEmail className={link} />
          {t("childrenText2Post")}
        </p>

        <h2 className={h2}>{t("securityHeading")}</h2>
        <p className={p}>{t("securityText")}</p>

        <h2 className={h2}>{t("changesHeading")}</h2>
        <p className={p}>{t("changesText")}</p>

        <h2 className={h2}>{t("consentHeading")}</h2>
        <p className={p}>{t("consentText")}</p>

        <h2 className={h2}>{t("contactHeading")}</h2>
        <p className={p}>
          {t("contactPre")}
          <RevealEmail className={link} />
          {t("contactMid")}
          <a href={site.links.issues} target="_blank" rel="noreferrer" className={link}>
            {t("contactGithub")}
          </a>
          {t("contactPost")}
        </p>
      </main>

      <Footer />
    </>
  );
}
