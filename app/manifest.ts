import type { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations({ locale: routing.defaultLocale, namespace: "Meta" });
  return {
    name: t("title"),
    short_name: "Tokn",
    description: t("description"),
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c11",
    theme_color: "#0c0c11",
    categories: ["security", "utilities", "productivity"],
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
