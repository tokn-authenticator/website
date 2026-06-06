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

const orgId = `${site.url}/#org`;
const screenshots = features
  .filter((f) => f.shot)
  .map((f) => `${site.url}/screens/light${f.shot!.src.replace("/screens", "")}`);

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
      url: site.url,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": orgId },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${site.url}/#app`,
      name: "Tokn",
      operatingSystem: "Android",
      applicationCategory: "SecurityApplication",
      description: site.description,
      url: site.url,
      downloadUrl: site.links.play,
      installUrl: site.links.play,
      softwareHelp: site.links.github,
      license: "https://www.gnu.org/licenses/gpl-3.0.html",
      isAccessibleForFree: true,
      inLanguage: "en",
      image: `${site.url}/feature-graphic.png`,
      screenshot: screenshots,
      featureList: features.map((f) => f.title),
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@id": orgId },
      publisher: { "@id": orgId },
      sameAs: [site.links.play, site.links.fdroid, site.links.github],
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a.replace(/:?\s*\{\{email\}\}/g, "") },
      })),
    },
  ],
};

export default function Home() {
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
