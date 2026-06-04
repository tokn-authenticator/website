import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Principles } from "@/components/Principles";
import { Features } from "@/components/Features";
import { Security } from "@/components/Security";
import { Sync } from "@/components/Sync";
import { Switching } from "@/components/Switching";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { site, faqs } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Tokn",
      operatingSystem: "Android",
      applicationCategory: "SecurityApplication",
      description: site.description,
      url: site.url,
      downloadUrl: site.links.play,
      license: "https://www.gnu.org/licenses/gpl-3.0.html",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Organization", name: "DiamondForge Labs" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
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
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
