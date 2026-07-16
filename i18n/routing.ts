import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeCookie: false,
});

export type Locale = (typeof routing.locales)[number];
