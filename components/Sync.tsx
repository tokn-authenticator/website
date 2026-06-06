import { Wifi, Radio, QrCode, RefreshCw, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { syncMethods } from "@/lib/site";
import { Screenshot } from "./Screenshot";

const icons: Record<string, LucideIcon> = {
  wifi: Wifi,
  radio: Radio,
  qr: QrCode,
};

export function Sync() {
  const t = useTranslations("Sync");
  return (
    <section id="sync" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 flex items-end justify-center gap-3 sm:gap-5 lg:order-1">
          <Screenshot
            name="sync-send-receive"
            alt={t("altSendReceive")}
            className="mb-10 w-1/2 max-w-[200px]"
          />
          <Screenshot
            name="sync-methods"
            alt={t("altMethods")}
            className="w-1/2 max-w-[200px]"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary">
            <RefreshCw className="h-4 w-4" /> {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 max-w-md text-pretty text-lg text-muted">
            {t("lead")}
          </p>

          <ul className="mt-8 grid gap-3">
            {syncMethods.map((m) => {
              const Icon = icons[m.icon];
              return (
                <li
                  key={m.id}
                  className="flex items-start gap-3.5 rounded-2xl border border-border bg-surface p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-container text-on-primary-container">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold">{t(`${m.id}.title`)}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">{t(`${m.id}.text`)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
