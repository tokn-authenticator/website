import { Check, Minus, X, GitCompareArrows } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { comparison, comparisonApps, competitors, type Cell, type ComparisonRow } from "@/lib/site";

const shortNames = ["Tokn", "Aegis", "GAuth", "MSAuth", "Stratum", "Authy"];

const cellNode: Record<Cell, React.ReactNode> = {
  yes: <Check className="h-[18px] w-[18px] text-primary" />,
  partial: <Minus className="h-[18px] w-[18px] text-muted" />,
  no: <X className="h-4 w-4 text-border-strong" />,
};

function rowCells(row: ComparisonRow): Cell[] {
  return [row.tokn, row.aegis, row.googleAuth, row.microsoftAuth, row.stratum, row.authy];
}

export function Comparison() {
  const t = useTranslations("Comparison");
  const tVs = useTranslations("Vs");

  const cellLabel: Record<Cell, string> = {
    yes: t("yes"),
    partial: t("partial"),
    no: t("no"),
  };

  return (
    <section id="compare" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl">
        <p className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary">
          <GitCompareArrows className="h-4 w-4" /> {t("eyebrow")}
        </p>
        <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
          {t("heading")}
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted">
          {t("lead")}
        </p>
      </div>

      <div className="mt-10">
        <table className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">{t("caption")}</caption>
          <colgroup>
            <col className="w-[28%] sm:w-[30%]" />
            <col className="w-[12%]" />
            <col className="w-[12%]" />
            <col className="w-[12%]" />
            <col className="w-[12%]" />
            <col className="w-[12%]" />
            <col className="w-[12%]" />
          </colgroup>
          <thead>
            <tr>
              <th className="pb-4 pr-3 align-bottom" />
              {comparisonApps.map((app, i) => (
                <th
                  key={app}
                  scope="col"
                  className={`pb-4 text-center align-bottom text-[10px] font-semibold leading-tight sm:text-sm ${
                    i === 0
                      ? "rounded-t-2xl bg-primary-container/40 px-1 pt-4 text-on-primary-container sm:px-3"
                      : "px-1 text-muted sm:px-3"
                  }`}
                >
                  <span className="sm:hidden">{shortNames[i]}</span>
                  <span className="hidden sm:inline">{app}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, r) => {
              const last = r === comparison.length - 1;
              const cells = rowCells(row);
              const hasNote = t.has(`rows.${row.id}.note`);
              return (
                <tr key={row.id} className="border-t border-border">
                  <th scope="row" className="py-4 pr-3 text-left align-middle font-normal sm:pr-4">
                    <div className="text-sm font-medium sm:text-[15px]">{t(`rows.${row.id}.feature`)}</div>
                    {hasNote && (
                      <div className="mt-0.5 text-xs leading-snug text-muted sm:text-sm">
                        {t(`rows.${row.id}.note`)}
                      </div>
                    )}
                  </th>
                  {cells.map((value, i) => (
                    <td
                      key={i}
                      className={`px-1 py-4 text-center align-middle sm:px-3 ${
                        i === 0 ? `bg-primary-container/40 ${last ? "rounded-b-2xl" : ""}` : ""
                      }`}
                    >
                      <span className="inline-grid place-items-center">
                        {cellNode[value]}
                        <span className="sr-only">{cellLabel[value]}</span>
                      </span>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-4 w-4 text-primary" /> {t("legendYes")}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Minus className="h-4 w-4" /> {t("legendPartial")}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <X className="h-4 w-4 text-border-strong" /> {t("legendNo")}
        </span>
        <span className="sm:ml-auto">{t("asOf")}</span>
      </div>

      <p className="mt-8 max-w-3xl text-pretty leading-relaxed text-muted">
        {t("summary")}
      </p>

      <p className="mt-8 text-sm font-medium">{t("deepDive")}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {competitors.map((c) => (
          <Link
            key={c.slug}
            href={`/vs/${c.slug}`}
            className="rounded-full border border-border px-4 py-2 text-sm text-muted transition hover:border-border-strong hover:bg-surface-2 hover:text-text"
          >
            {tVs("title", { app: c.name })}
          </Link>
        ))}
      </div>
    </section>
  );
}
