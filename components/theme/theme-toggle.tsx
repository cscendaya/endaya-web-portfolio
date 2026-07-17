"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";

/** Cycle order, and the presentation of each step. */
const THEMES: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

/** Never resubscribes — mounted state flips once and never changes again. */
const subscribeToNothing = () => () => {};

/**
 * Theme control: a single button cycling Light → Dark → System. One control
 * rather than a menu — three states are cheap to step through, and the header
 * stays as quiet as the rest of the Version 1 chrome.
 *
 * The icon reflects the chosen setting, not the resolved one, so "System" stays
 * legible as its own choice.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  // The stored theme is unknown on the server, so the icon is only correct once
  // mounted. Until then a fixed icon renders, matching what the server sent.
  const isMounted = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );

  const currentIndex = THEMES.findIndex((entry) => entry.value === theme);
  const current = isMounted && currentIndex >= 0 ? THEMES[currentIndex] : null;
  const next = THEMES[((current ? currentIndex : 0) + 1) % THEMES.length];
  const Icon = current?.Icon ?? Monitor;

  return (
    <button
      type="button"
      onClick={() => setTheme(next.value)}
      aria-label={
        current
          ? `Theme: ${current.label}. Switch to ${next.label}.`
          : "Change theme"
      }
      className={cn(
        "flex items-center rounded-(--radius-token-sm) p-2 text-text-secondary transition-colors hover:text-text-primary",
        className,
      )}
    >
      <Icon aria-hidden="true" className="size-5" />
    </button>
  );
}
