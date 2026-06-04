import { Lock, ShieldCheck, WifiOff, GitBranch, type LucideIcon } from "lucide-react";
import { principles } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  lock: Lock,
  shield: ShieldCheck,
  "wifi-off": WifiOff,
  git: GitBranch,
};

export function Principles() {
  return (
    <section className="relative z-10 mx-auto -mt-2 max-w-6xl px-5 sm:px-8">
      <div className="grid gap-2 rounded-3xl border border-border bg-surface p-4 shadow-sm sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
        {principles.map((p) => {
          const Icon = icons[p.icon];
          return (
            <div key={p.title} className="flex gap-3.5 rounded-2xl p-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-container text-on-primary-container">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
