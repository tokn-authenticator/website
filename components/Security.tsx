import { Lock, Fingerprint, EyeOff, FileCheck2, ShieldCheck, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { securityPoints } from "@/lib/site";
import { Screenshot } from "./Screenshot";

const icons: Record<string, LucideIcon> = {
  lock: Lock,
  fingerprint: Fingerprint,
  "eye-off": EyeOff,
  "file-check": FileCheck2,
};

export function Security() {
  const t = useTranslations("Security");
  return (
    <section id="security" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="overflow-hidden rounded-[2rem] border border-border bg-surface-2">
        <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:gap-6">
          <div>
            <p className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary">
              <ShieldCheck className="h-4 w-4" /> {t("eyebrow")}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
              {t("heading")}
            </h2>
            <p className="mt-4 max-w-md text-pretty text-lg text-muted">
              {t("lead")}
            </p>

            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              {securityPoints.map((p) => {
                const Icon = icons[p.icon];
                return (
                  <div key={p.id} className="flex gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <dt className="text-[15px] font-semibold">{t(`${p.id}.title`)}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted">{t(`${p.id}.text`)}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          <div className="flex items-end justify-center gap-3 sm:gap-5">
            <Screenshot
              name="security-disabled"
              alt={t("altDisabled")}
              className="w-1/2 max-w-[200px]"
            />
            <Screenshot
              name="security-enabled"
              alt={t("altEnabled")}
              className="mb-10 w-1/2 max-w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
