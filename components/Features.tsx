import {
  LockKeyhole,
  RefreshCw,
  DatabaseBackup,
  Download,
  FolderTree,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { features } from "@/lib/site";
import { Screenshot } from "./Screenshot";

const icons: Record<string, LucideIcon> = {
  "lock-keyhole": LockKeyhole,
  "refresh-cw": RefreshCw,
  "database-backup": DatabaseBackup,
  download: Download,
  "folder-tree": FolderTree,
  palette: Palette,
};

export function Features() {
  const t = useTranslations("Features");
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl">
        <p className="font-medium text-sm uppercase tracking-widest text-primary">{t("eyebrow")}</p>
        <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
          {t("heading")}
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted">
          {t("lead")}
        </p>
      </div>

      <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
        <div className="flex justify-center lg:justify-start">
          <Screenshot
            name="vault-home"
            alt={t("screenshotAlt")}
            className="w-[min(70vw,300px)]"
            maskEnd={90}
          />
        </div>

        <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {features.map((f) => {
            const Icon = icons[f.icon];
            return (
              <div key={f.id} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-container text-on-primary-container">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <div>
                  <dt className="font-semibold">{t(`${f.id}.title`)}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">{t(`${f.id}.text`)}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
