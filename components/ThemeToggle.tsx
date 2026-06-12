"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

type Mode = "light" | "dark";
const icons = { light: Sun, dark: Moon };

export function ThemeToggle() {
  const t = useTranslations("ThemeToggle");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // next-themes only knows the real theme after mount; this guards the hydration mismatch.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const current: Mode = mounted ? ((resolvedTheme as Mode) ?? "light") : "light";
  const next: Mode = current === "dark" ? "light" : "dark";
  const Icon = icons[current];

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={mounted ? t("state", { current: t(current), next: t(next) }) : t("toggle")}
      title={mounted ? t(current) : undefined}
      className="inline-grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted transition hover:border-border-strong hover:text-text"
    >
      <Icon className="h-[18px] w-[18px]" />
    </button>
  );
}
