import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";

// Build a path honoring localePrefix: "as-needed".
// Default locale (en) keeps the bare path; others get a /<locale> prefix.
export function localizedPath(locale: string, path: string): string {
  const clean = path === "/" ? "" : path;
  if (locale === routing.defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}

export function absoluteUrl(locale: string, path: string): string {
  const p = localizedPath(locale, path);
  return p === "/" ? site.url : `${site.url}${p}`;
}

// hreflang alternates map for a given path, including x-default.
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = absoluteUrl(locale, path);
  }
  languages["x-default"] = absoluteUrl(routing.defaultLocale, path);
  return languages;
}

export const ogLocale: Record<string, string> = {
  en: "en_US",
  de: "de_DE",
};
