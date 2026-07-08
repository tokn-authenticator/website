import { site, competitors, features, faqs } from "@/lib/site";
import en from "@/messages/en.json";

export const dynamic = "force-static";

const META = en.Meta;
const FEAT = en.Features as unknown as Record<string, { title: string; text: string }>;
const FAQ = en.Faq as unknown as Record<string, { q: string; a: string }>;

const stripPlaceholder = (s: string) => s.replace(/:?\s*__EMAIL__/g, "").trim();

export function GET() {
  const featureList = features
    .map((f) => `- ${FEAT[f.id].title}: ${FEAT[f.id].text}`)
    .join("\n");

  const comparisons = competitors
    .map((c) => `- [Tokn vs ${c.name} (${c.name} alternative)](${site.url}/vs/${c.slug})`)
    .join("\n");

  const faqList = faqs
    .map((f) => `### ${FAQ[f.id].q}\n${stripPlaceholder(FAQ[f.id].a)}`)
    .join("\n\n");

  const body = `# ${site.name}

> ${META.description}

## Key facts
- Platform: Android 8.0 or later, installable from Google Play and F-Droid.
- License: GPL-3.0, open source. Source on GitHub.
- Privacy: fully offline. Codes never leave the device. No accounts, no cloud, no telemetry, no Google Play Services.
- Positioning: an open-source alternative to Authy, Google Authenticator, and Microsoft Authenticator, in the same spirit as Aegis Authenticator, 2FAS, and Stratum. Imports backups from Aegis, 2FAS, Stratum, and Google Authenticator directly.
- Maintainer: DiamondForge Labs. Lead: fthomys on GitHub.

## Features
${featureList}

## Pages
- [Home](${site.url}): what Tokn is, features, security model, and FAQ.
- [Privacy](${site.url}/privacy): data handling for the app and website.

## Comparisons (Tokn vs alternatives)
${comparisons}

## FAQ
${faqList}

## Links
- Google Play: ${site.links.play}
- F-Droid: ${site.links.fdroid}
- Source code: ${site.links.github}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
