import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tokn - your 2FA codes, offline",
    template: "%s - Tokn",
  },
  description: site.description,
  applicationName: "Tokn",
  keywords: [
    "2FA",
    "two-factor authentication",
    "MFA",
    "TOTP",
    "HOTP",
    "authenticator app",
    "open source",
    "Android",
    "F-Droid",
    "offline",
    "privacy",
    "Aegis alternative",
    "Ente Auth alternative",
    "Authy alternative",
    "Google Authenticator alternative",
    "Microsoft Authenticator alternative",
    "open source authenticator",
  ],
  authors: [{ name: "DiamondForgeLabs" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Tokn - your 2FA codes, offline",
    description: site.description,
    siteName: "Tokn",
    images: [{ url: "/feature-graphic.png", width: 1024, height: 500, alt: "Tokn" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokn - your 2FA codes, offline",
    description: site.description,
    images: ["/feature-graphic.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c11" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
