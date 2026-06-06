import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tokn - your 2FA codes, offline",
    short_name: "Tokn",
    description: site.description,
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
