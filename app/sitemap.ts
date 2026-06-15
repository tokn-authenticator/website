import type { MetadataRoute } from "next";
import { competitors } from "@/lib/site";
import { routing } from "@/i18n/routing";
import { absoluteUrl } from "@/lib/meta";

export const dynamic = "force-static";

const pages = [
  { path: "/", changeFrequency: "monthly" as const, priority: 1 },
  { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.4 },
  ...competitors.map((c) => ({
    path: `/vs/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, changeFrequency, priority } of pages) {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [locale, absoluteUrl(locale, path)]),
    );

    for (const locale of routing.locales) {
      entries.push({
        url: absoluteUrl(locale, path),
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages },
      });
    }
  }

  return entries;
}
