import { Lock, Fingerprint, EyeOff, FileCheck2, ShieldCheck } from "lucide-react";
import { Screenshot } from "./Screenshot";

const points = [
  {
    icon: Lock,
    title: "Encrypted at rest",
    text: "Tokens live in an SQLCipher database. Without your key, the vault is just noise.",
  },
  {
    icon: Fingerprint,
    title: "Biometric or password unlock",
    text: "Open the vault with a fingerprint or your face, with a password as the fallback.",
  },
  {
    icon: EyeOff,
    title: "Screenshot protection",
    text: "Optionally keep codes out of the recents preview and block screen capture.",
  },
  {
    icon: FileCheck2,
    title: "Standards based",
    text: "TOTP and HOTP per RFC 6238 and RFC 4226, with SHA-1, SHA-256 and SHA-512.",
  },
];

export function Security() {
  return (
    <section id="security" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-surface-2">
        <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:gap-6">
          <div>
            <p className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary">
              <ShieldCheck className="h-4 w-4" /> Security
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              Locked down by default
            </h2>
            <p className="mt-4 max-w-md text-pretty text-lg text-muted">
              Most authenticators hand over your tokens the moment you open them. Tokn keeps them
              sealed until you prove it is you.
            </p>

            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              {points.map((p) => (
                <div key={p.title} className="flex gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-[15px] font-semibold">{p.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted">{p.text}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex items-end justify-center gap-3 sm:gap-5">
            <Screenshot
              name="security-disabled"
              alt="Security settings with the vault unencrypted"
              className="w-1/2 max-w-[200px]"
            />
            <Screenshot
              name="security-enabled"
              alt="Security settings with vault encryption and biometrics enabled"
              className="mb-10 w-1/2 max-w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
