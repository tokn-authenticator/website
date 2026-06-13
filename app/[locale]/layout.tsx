import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HtmlLang } from "@/components/HtmlLang";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";
import { languageAlternates, localizedPath, ogLocale } from "@/lib/meta";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    metadataBase: new URL(site.url),
    title: {
      default: t("title"),
      template: "%s - Tokn",
    },
    description: t("description"),
    applicationName: "Tokn",
    keywords: [
      "2FA",
      "two-factor authentication",
      "MFA",
      "TOTP",
      "authenticator app",
      "open source authenticator",
      "offline",
      "privacy",
      "Android",
      "F-Droid",
      "Zwei-Faktor-Authentifizierung",
      "kostenlose Authenticator App",
      "DSGVO konform",
    ],
    authors: [{ name: "DiamondForge Labs", url: site.links.github }],
    creator: "DiamondForge Labs",
    publisher: "DiamondForge Labs",
    category: "security",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: { telephone: false, email: false, address: false },
    alternates: {
      canonical: localizedPath(locale, "/"),
      languages: languageAlternates("/"),
    },
    openGraph: {
      type: "website",
      url: localizedPath(locale, "/"),
      title: t("title"),
      description: t("description"),
      siteName: "Tokn",
      locale: ogLocale[locale],
      images: [
        {
          url: "/feature-graphic.png",
          width: 1024,
          height: 500,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/feature-graphic.png"],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c11" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <HtmlLang locale={locale} />
      {children}
    </NextIntlClientProvider>
  );
}
