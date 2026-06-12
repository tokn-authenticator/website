import { Check, Minus, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { comparison, type Cell, type Competitor } from "@/lib/site";

const cellNode: Record<Cell, React.ReactNode> = {
  yes: <Check className="h-[18px] w-[18px] text-primary" />,
  partial: <Minus className="h-[18px] w-[18px] text-muted" />,
  no: <X className="h-4 w-4 text-border-strong" />,
};

export function VsTable({ competitor }: { competitor: Competitor }) {
  const t = useTranslations("Comparison");
  const tVs = useTranslations("Vs");

  const cellLabel: Record<Cell, string> = {
    yes: t("yes"),
    partial: t("partial"),
    no: t("no"),
  };

  return (
    <div>
      <table className="w-full table-fixed border-collapse text-left">
        <caption className="sr-only">{tVs("tableCaption", { app: competitor.name })}</caption>
        <colgroup>
          <col className="w-[44%]" />
          <col className="w-[28%]" />
          <col className="w-[28%]" />
        </colgroup>
        <thead>
          <tr>
            <th className="pb-4 pr-3 align-bottom" />
            <th
              scope="col"
              className="rounded-t-2xl bg-primary-container/40 px-2 pb-4 pt-4 text-center align-bottom text-xs font-semibold leading-tight text-on-primary-container sm:px-3 sm:text-sm"
            >
              Tokn
            </th>
            <th
              scope="col"
              className="px-2 pb-4 text-center align-bottom text-xs font-semibold leading-tight text-muted sm:px-3 sm:text-sm"
            >
              {competitor.name}
            </th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((row, r) => {
            const last = r === comparison.length - 1;
            const theirs = row[competitor.key];
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
                <td
                  className={`bg-primary-container/40 px-2 py-4 text-center align-middle sm:px-3 ${
                    last ? "rounded-b-2xl" : ""
                  }`}
                >
                  <span className="inline-grid place-items-center">
                    {cellNode[row.tokn]}
                    <span className="sr-only">{cellLabel[row.tokn]}</span>
                  </span>
                </td>
                <td className="px-2 py-4 text-center align-middle sm:px-3">
                  <span className="inline-grid place-items-center">
                    {cellNode[theirs]}
                    <span className="sr-only">{cellLabel[theirs]}</span>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

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
    </div>
  );
}
