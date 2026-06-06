import { routing } from "@/i18n/routing";

// Build a path honoring localePrefix: "as-needed".
// Default locale (en) keeps the bare path; others get a /<locale> prefix.
export function localizedPath(locale: string, path: string): string {
  const clean = path === "/" ? "" : path;
  if (locale === routing.defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}

// hreflang alternates map for a given path, including x-default.
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = localizedPath(locale, path);
  }
  languages["x-default"] = localizedPath(routing.defaultLocale, path);
  return languages;
}

export const ogLocale: Record<string, string> = {
  en: "en_US",
  de: "de_DE",
};
