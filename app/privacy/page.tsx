import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Tokn is built so there is nothing to collect. No accounts, no analytics, no tracking, on the app or this website.",
};

const h2 = "font-display text-2xl font-semibold tracking-tight mt-12";
const p = "mt-4 text-pretty leading-relaxed text-muted";
const li = "leading-relaxed text-muted";
const mail = "contact@diamondforge.me";
const link = "font-medium text-primary underline-offset-4 hover:underline";

export default function Privacy() {
  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Tokn home">
            <BrandMark className="h-9 w-9" />
            <span className="font-display text-lg font-semibold tracking-tight">Tokn</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-text"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>

        <h1 className="mt-6 text-balance text-4xl font-bold">Privacy</h1>
        <p className="mt-3 font-mono text-sm text-muted">Effective 2026-04-05</p>

        <p className="mt-8 text-pretty text-lg leading-relaxed text-muted">
          This policy covers the Tokn app and this website. Tokn is a free service from DiamondForge
          Labs (the &ldquo;Service Provider&rdquo;), provided as is. It is built so there is nothing
          to collect.
        </p>

        <h2 className={h2}>What the app collects</h2>
        <p className={p}>
          The Application does not obtain any information when you download and use it. No
          registration or account is required.
        </p>
        <ul className="mt-4 space-y-3 pl-5 [list-style:disc]">
          <li className={li}>
            <span className="font-medium text-text">No account.</span> You never sign up or log in.
            There is no Tokn server.
          </li>
          <li className={li}>
            <span className="font-medium text-text">No analytics or telemetry.</span> The app does
            not track usage and ships no ad or analytics SDKs. It does not use Google Play Services.
          </li>
          <li className={li}>
            <span className="font-medium text-text">Your data stays on your device.</span> Accounts
            and secrets live in an SQLCipher-encrypted database on your phone. Codes are generated
            locally and the app works fully offline.
          </li>
          <li className={li}>
            <span className="font-medium text-text">Backups and sync are yours.</span> Encrypted
            backups are written where you choose. Device-to-device sync happens directly between
            your phones over the local network and is end-to-end encrypted. Nothing passes through
            us.
          </li>
          <li className={li}>
            <span className="font-medium text-text">No location.</span> The app does not collect
            precise location information from your device.
          </li>
        </ul>

        <p className={p}>The app requests only the permissions it needs:</p>
        <ul className="mt-4 space-y-3 pl-5 [list-style:disc]">
          <li className={li}>
            <span className="font-medium text-text">Camera</span> to scan QR codes when adding an
            account or syncing.
          </li>
          <li className={li}>
            <span className="font-medium text-text">Internet (optional, off by default)</span> only
            if you opt in to fetching service icons.
          </li>
          <li className={li}>
            <span className="font-medium text-text">Biometric</span> to unlock the vault.
          </li>
        </ul>

        <h2 className={h2}>This website</h2>
        <p className={p}>
          <span className="font-medium text-text">Static and quiet.</span> This site sets no
          cookies, runs no analytics, and does not track you. Fonts are served from the site itself,
          not a third party.
        </p>
        <p className={p}>
          <span className="font-medium text-text">Outbound links.</span> Buttons to Google Play,
          F-Droid, and GitHub take you to those services, which have their own privacy policies.
        </p>

        <h2 className={h2}>Third parties</h2>
        <p className={p}>
          Because the Application does not collect any information, no data is shared with third
          parties.
        </p>

        <h2 className={h2}>Your opt-out rights</h2>
        <p className={p}>
          You can stop all collection of information by uninstalling the app. Use the standard
          uninstall process available on your device or through the app marketplace you installed
          from.
        </p>

        <h2 className={h2}>Children</h2>
        <p className={p}>
          The Application is not used to knowingly solicit data from or market to children under the
          age of 13. The Service Provider does not knowingly collect personally identifiable
          information from children, and encourages all children never to submit any personally
          identifiable information through the Application. Parents and legal guardians are
          encouraged to monitor their children&apos;s internet usage and to help enforce this policy
          by instructing their children never to provide personally identifiable information through
          the Application without their permission.
        </p>
        <p className={p}>
          If you have reason to believe that a child has provided personally identifiable
          information to the Service Provider through the Application, please contact us at{" "}
          <a href={site.links.email} className={link}>
            {mail}
          </a>{" "}
          so we can take the necessary action. You must also be at least 16 years of age to consent
          to the processing of your personally identifiable information in your country (in some
          countries we may allow your parent or guardian to do so on your behalf).
        </p>

        <h2 className={h2}>Security</h2>
        <p className={p}>
          The Service Provider is concerned about safeguarding the confidentiality of your
          information. Because the Application does not collect any information, there is no risk of
          your data being accessed by unauthorized individuals.
        </p>

        <h2 className={h2}>Changes</h2>
        <p className={p}>
          This Privacy Policy may be updated from time to time for any reason. We will notify you of
          any changes by updating this page with the new policy and effective date. You are advised
          to review this page regularly, as continued use is deemed approval of all changes.
        </p>

        <h2 className={h2}>Your consent</h2>
        <p className={p}>
          By using the Application, you consent to the processing of your information as set out in
          this Privacy Policy, now and as amended by the Service Provider.
        </p>

        <h2 className={h2}>Contact</h2>
        <p className={p}>
          If you have any questions about privacy or these practices, email us at{" "}
          <a href={site.links.email} className={link}>
            {mail}
          </a>
          . For bugs or feature requests, open an issue on{" "}
          <a href={site.links.issues} target="_blank" rel="noreferrer" className={link}>
            GitHub
          </a>
          .
        </p>
      </main>

      <Footer />
    </>
  );
}
