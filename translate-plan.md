# Translate Plan: Deutsch via next-intl

Ziel: tokn-website zweisprachig (en/de) fuer doppelte Keyword-Abdeckung + DACH-Markt.
Status: geplant, noch nicht umgesetzt (Stand 2026-06-06).

Infra-Fakt: `next.config.ts` hat `output: "standalone"` -> Node-Server -> Middleware
funktioniert -> next-intl Routing ist der saubere Weg. Next 16.2.7, React 19, next-intl v4.

## Strategie

- next-intl v4 mit Middleware-Routing.
- localePrefix: "as-needed" -> Englisch auf usetokn.app/ (keine kaputten Links),
  Deutsch auf usetokn.app/de/. defaultLocale = en.
- locales: ["en", "de"].

## Stil-Regeln fuer die deutsche Copy (HART)

- KEIN Emdash, KEIN Endash. Nur normaler Bindestrich bei Komposita.
  Einschuebe als Doppelpunkt, Komma oder eigener Satz.
- Kein AI-Sound: keine 1:1-Woertlichkeit, keine Floskeln ("Darueber hinaus",
  "Nahtlos", "Muehelos", "Tauche ein"). Kurze, direkte Saetze.
- Du-Form, konsistent durchziehen (passt zur lockeren Marke).
- Fachbegriffe englisch wo ueblich: 2FA, Open Source, Backup, Sync. Vault ggf. "Tresor".
- DE-Keywords eigenstaendig, nicht uebersetzt: "Authenticator App offline",
  "2FA ohne Google", "TOTP Open Source", "Aegis Alternative".

## Schritt 1: Geruest

- npm i next-intl
- i18n/routing.ts (locales, defaultLocale, localePrefix)
- i18n/request.ts (getRequestConfig, laedt passendes Message-File)
- middleware.ts im Root (matcht alles ausser /_next, statische Assets,
  robots.txt, sitemap.xml, manifest)

## Schritt 2: Routen umbauen

- Seiten unter app/[locale]/ verschieben: page.tsx, privacy/, imprint/, layout.tsx.
- app/[locale]/layout.tsx: <html lang={locale}>, NextIntlClientProvider,
  setRequestLocale(locale) fuer statisches Rendering.
- Bleiben im Root (nicht locale-spezifisch): robots.ts, icon.png, apple-icon.png.
- Locale-aware machen: sitemap.ts (beide Sprachen + hreflang-Alternates),
  manifest.ts (name/description), generateMetadata pro Seite
  (alternates.languages fuer en/de + x-default).

## Schritt 3: Texte rausziehen

Uebersetzbar -> messages/en.json + messages/de.json:
- Alle Strings aus lib/site.ts: tagline, description, principles, features
  (inkl. shot.alt), importSources.note, faqs, comparison.feature/note.
- Hartkodierte Strings in Components: Faq.tsx ("Questions, answered" etc.),
  Hero, Features, Security, Sync, Switching, Comparison, Header, Footer, CtaBand.

Bleibt struktur-only in lib/site.ts:
- links, packageId, comparison-Zellwerte (yes/no/partial), icon-Namen,
  worksWith-Slugs, comparisonApps (Eigennamen).
- WICHTIG: jedem Array-Item eine stabile id/key geben, damit die Uebersetzung
  zugeordnet wird (next-intl mag keine Index-basierten Arrays).

JSON-LD in page.tsx:
- Zieht aktuell aus faqs/features -> muss lokalisierte Werte nehmen,
  plus inLanguage pro Locale.

## Schritt 4: Inhalte uebersetzen

- messages/de.json nach den Stil-Regeln oben fuellen.
- Privacy + Imprint: Imprint ist DE-rechtlich (par 5 DDG) -> deutsche Version
  sorgfaeltig, nicht maschinell. Privacy-Policy inhaltlich gespiegelt.

## Schritt 5: Language-Switcher

- Kleiner en/de-Umschalter in Header und/oder Footer, der per next-intl
  Link/usePathname die Locale wechselt und den aktuellen Pfad behaelt.

## SEO-Checkliste (i18n-Pflicht)

- [ ] Reziproke hreflang (en<->de) + x-default
- [ ] Eigene Canonicals pro Sprache
- [ ] <html lang> korrekt pro Route
- [ ] sitemap.xml mit beiden Sprachen + xhtml:link-Alternates
- [ ] openGraph.locale pro Sprache (en_US / de_DE)

## Aufwand

Geruest + Routen-Umbau: ueberschaubar. Hauptarbeit: sauberes Rausziehen der
Component-Strings + handgemachte Uebersetzung.
