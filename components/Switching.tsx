// import * as simpleIcons from "simple-icons";
import { importSources } from "@/lib/site";
// import { BrandGlyph } from "./BrandGlyph";
import { Screenshot } from "./Screenshot";
import { Import } from "lucide-react";

// type SimpleIcon = { title: string; path: string };

// const brands = worksWith
//   .map((k) => (simpleIcons as Record<string, SimpleIcon>)[k])
//   .filter(Boolean);

export function Switching() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary">
            <Import className="h-4 w-4" /> Switching over
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Coming from Aegis, Authy, or Ente Auth?
          </h2>
          <p className="mt-4 max-w-md text-pretty text-lg text-muted">
            Tokn is a free, open-source authenticator in the same spirit as Aegis and Ente Auth, and
            a fully offline alternative to cloud apps like Authy and Google Authenticator. Wherever
            your old app lets you export, Tokn reads the format directly, so you are not re-adding
            every account by hand. Keep an encrypted backup while you are at it.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {importSources.map((s) => (
              <span
                key={s.name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-sm"
              >
                <span className="font-medium">{s.name}</span>
                <span className="text-muted">{s.note}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-center gap-3 sm:gap-5">
          <Screenshot
            name="import-source-picker"
            alt="Picking an import source"
            className="w-1/2 max-w-[200px]"
          />
          <Screenshot
            name="backup-restore"
            alt="Encrypted backup and restore"
            className="mb-10 w-1/2 max-w-[200px]"
          />
        </div>
      </div>

      <div className="mt-16">
        <p className="text-center text-sm text-muted">
          Works with any service that supports standard TOTP or HOTP two-factor authentication
        </p>
        {/* Company logos commented out
        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3">
          {brands.map((b) => (
            <div
              key={b.title}
              role="img"
              aria-label={b.title}
              title={b.title}
              className="flex w-[calc((100%-2.25rem)/4)] items-center justify-center rounded-2xl border border-border bg-surface p-4 text-muted transition hover:text-text sm:w-[calc((100%-3.75rem)/6)]"
            >
              <BrandGlyph icon={b} className="h-6 w-6" />
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
