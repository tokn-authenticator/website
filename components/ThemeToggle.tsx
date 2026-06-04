"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

type Mode = "light" | "dark" | "system";
const order: Mode[] = ["light", "dark", "system"];
const icons = { light: Sun, dark: Moon, system: SunMoon };

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // next-themes only knows the real theme after mount; this guards the hydration mismatch.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const current: Mode = mounted ? ((theme as Mode) ?? "system") : "system";
  const next = order[(order.indexOf(current) + 1) % order.length];
  const Icon = icons[current];

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={mounted ? `Theme: ${current}. Switch to ${next}.` : "Toggle theme"}
      title={mounted ? `Theme: ${current}` : undefined}
      className="inline-grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted transition hover:border-border-strong hover:text-text"
    >
      <Icon className="h-[18px] w-[18px]" />
    </button>
  );
}
