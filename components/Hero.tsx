import { ArrowUpRight } from "lucide-react";
import { siGithub } from "simple-icons";
import { BrandGlyph } from "./BrandGlyph";
import { StoreButtons } from "./StoreButtons";
import { Screenshot } from "./Screenshot";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-36">
        <div className="text-center lg:text-left">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted transition hover:border-border-strong hover:text-text"
          >
            <BrandGlyph icon={siGithub} className="h-3.5 w-3.5" />
            Open source, GPL-3.0
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.04] sm:text-6xl">
            Your 2FA codes.
            <br />
            <span className="text-primary">Offline.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted lg:mx-0">
            Tokn is a free, open-source authenticator for Android. Your one-time codes stay on your
            device, encrypted. No account, no cloud, no analytics.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <StoreButtons />
          </div>

          <p className="mt-5 text-sm text-muted">
            No account stands between you and your codes, and they&apos;re generated offline.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Screenshot
            name="vault-home"
            alt="Tokn vault on Android"
            className="w-[min(74vw,310px)] sm:w-[330px]"
            priority
            maskEnd={90}
          />
        </div>
      </div>
    </section>
  );
}
