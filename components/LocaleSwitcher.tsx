"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { Languages, Check, ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

function persistLocale(locale: string) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);
  const finishTransition = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!isPending && finishTransition.current) {
      finishTransition.current();
      finishTransition.current = null;
    }
  }, [isPending]);

  const labelFor = (l: string) => (l === "de" ? t("german") : t("english"));

  useEffect(() => {
    for (const l of routing.locales) {
      if (l !== locale) router.prefetch(pathname, { locale: l });
    }
  }, [locale, pathname, router]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const select = (l: string) => {
    setOpen(false);
    if (l === locale) return;

    persistLocale(l);

    const navigate = () =>
      startTransition(() => {
        router.replace(pathname, { locale: l, scroll: false });
      });

    if (typeof document === "undefined" || !document.startViewTransition) {
      navigate();
      return;
    }

    document.startViewTransition(
      () =>
        new Promise<void>((resolve) => {
          finishTransition.current = resolve;
          navigate();
          setTimeout(() => {
            if (finishTransition.current) {
              finishTransition.current = null;
              resolve();
            }
          }, 600);
        }),
    );
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-busy={isPending}
        aria-label={`${t("language")}: ${labelFor(locale)}`}
        className={`inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-surface pl-3 pr-2.5 text-sm font-semibold text-muted transition hover:border-border-strong hover:text-text ${
          isPending ? "opacity-60" : ""
        }`}
      >
        <Languages className="h-[18px] w-[18px]" />
        <span className="uppercase">{locale}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t("language")}
          className="absolute right-0 z-50 mt-2 min-w-[9rem] overflow-hidden rounded-2xl border border-border bg-surface p-1 shadow-lg shadow-black/5"
        >
          {routing.locales.map((l) => {
            const active = l === locale;
            return (
              <button
                key={l}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => select(l)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm transition ${
                  active
                    ? "bg-primary-container/50 font-semibold text-text"
                    : "text-muted hover:bg-surface-2 hover:text-text"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-5 shrink-0 text-xs font-semibold uppercase text-muted">{l}</span>
                  {labelFor(l)}
                </span>
                {active && <Check className="h-4 w-4 shrink-0 text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
