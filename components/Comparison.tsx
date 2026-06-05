import { Check, Minus, X, GitCompareArrows } from "lucide-react";
import { comparison, comparisonApps, type Cell, type ComparisonRow } from "@/lib/site";

const shortNames = ["Tokn", "Aegis", "GAuth", "2FAS", "Stratum", "Authy"];

const cellMeta: Record<Cell, { label: string; node: React.ReactNode }> = {
  yes: { label: "Yes", node: <Check className="h-[18px] w-[18px] text-primary" /> },
  partial: { label: "Partial", node: <Minus className="h-[18px] w-[18px] text-muted" /> },
  no: { label: "No", node: <X className="h-4 w-4 text-border-strong" /> },
};

function CellIcon({ value }: { value: Cell }) {
  const { label, node } = cellMeta[value];
  return (
    <span className="inline-grid place-items-center">
      {node}
      <span className="sr-only">{label}</span>
    </span>
  );
}

function rowCells(row: ComparisonRow): Cell[] {
  return [row.tokn, row.aegis, row.googleAuth, row.twofas, row.stratum, row.authy];
}

export function Comparison() {
  return (
    <section id="compare" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl">
        <p className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary">
          <GitCompareArrows className="h-4 w-4" /> How it compares
        </p>
        <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
          Tokn next to the apps people switch from
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted">
          The honest version. Aegis is a close cousin and 2FAS is solid too. Where Tokn pulls ahead is
          moving accounts to a new phone with no server in the middle.
        </p>
      </div>

      <div className="mt-10">
        <table className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">
            Feature comparison of Tokn versus Aegis, Google Authenticator, 2FAS, Stratum and Authy
          </caption>
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
              return (
                <tr key={row.feature} className="border-t border-border">
                  <th scope="row" className="py-4 pr-3 text-left align-middle font-normal sm:pr-4">
                    <div className="text-sm font-medium sm:text-[15px]">{row.feature}</div>
                    {row.note && (
                      <div className="mt-0.5 text-xs leading-snug text-muted sm:text-sm">
                        {row.note}
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
                      <CellIcon value={value} />
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
          <Check className="h-4 w-4 text-primary" /> Yes
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Minus className="h-4 w-4" /> Partial or optional
        </span>
        <span className="inline-flex items-center gap-1.5">
          <X className="h-4 w-4 text-border-strong" /> No
        </span>
      </div>

      <p className="mt-8 max-w-3xl text-pretty leading-relaxed text-muted">
        Compared with Google Authenticator and Authy, Tokn is open source, keeps your tokens off the
        cloud, and lets you export an encrypted backup you control instead of locking you into an
        account. Aegis, Stratum and 2FAS share most of that privacy-first foundation. What sets Tokn
        apart is moving your accounts to a new phone with no server in the middle, over the local
        Wi-Fi network, Wi-Fi Direct, or an animated QR code.
      </p>
    </section>
  );
}
