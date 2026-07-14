import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Principles } from "@/components/Principles";
import { Features } from "@/components/Features";
import { Security } from "@/components/Security";
import { Sync } from "@/components/Sync";
import { Switching } from "@/components/Switching";
import { Comparison } from "@/components/Comparison";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { site, faqs, features } from "@/lib/site";
import { absoluteUrl } from "@/lib/meta";

const orgId = `${site.url}/#org`;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tMeta = await getTranslations({ locale, namespace: "Meta" });
  const tFeatures = await getTranslations({ locale, namespace: "Features" });
  const tFaq = await getTranslations({ locale, namespace: "Faq" });

  const url = absoluteUrl(locale, "/");
  const screenshots = features
    .filter((f) => f.shot)
    .map((f) => `${site.url}/screens/light/${f.shot}.webp`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "DiamondForge Labs",
        url: site.url,
        logo: `${site.url}/icon.png`,
        sameAs: [site.links.github],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: "Tokn",
        url,
        description: tMeta("description"),
        inLanguage: locale,
        publisher: { "@id": orgId },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${site.url}/#app`,
        name: "Tokn",
        operatingSystem: "Android",
        applicationCategory: "SecurityApplication",
        applicationSubCategory: "Authenticator",
        description: tMeta("description"),
        url,
        downloadUrl: site.links.play,
        installUrl: site.links.play,
        softwareHelp: { "@type": "CreativeWork", url: site.links.github },
        softwareVersion: "latest",
        softwareRequirements: "Android 8.0 or later",
        releaseNotes: site.links.releases,
        license: "https://www.gnu.org/licenses/gpl-3.0.html",
        isAccessibleForFree: true,
        inLanguage: locale,
        image: `${site.url}/feature-graphic.png`,
        screenshot: screenshots,
        featureList: features.map((f) => tFeatures(`${f.id}.title`)),
        keywords: [
          "2FA",
          "TOTP",
          "HOTP",
          "authenticator",
          "open source",
          "offline",
          "Android",
          "F-Droid",
          "encrypted",
          "no cloud",
          "audit log",
          "recycle bin",
          "Aegis alternative",
          "Authy alternative",
          "Google Authenticator alternative",
        ].join(", "),
        permissions: "Camera, Biometric, Internet (optional)",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        author: { "@id": orgId },
        publisher: { "@id": orgId },
        sameAs: [site.links.play, site.links.fdroid, site.links.github],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: locale,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: tFaq(`${f.id}.q`),
          acceptedAnswer: {
            "@type": "Answer",
            text: tFaq(`${f.id}.a`).replace(/:?\s*__EMAIL__/g, ""),
          },
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
      <Header />
      <main>
        <Hero />
        <Principles />
        <Features />
        <Security />
        <Sync />
        <Switching />
        <Comparison />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
