"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * Theme context for the whole site. next-themes writes the resolved theme onto
 * <html> from a blocking inline script, before paint — the design tokens in
 * globals.css key off that class, so there is no flash of the wrong theme and
 * nothing theme-dependent is rendered during hydration.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="endaya-theme"
    >
      {children}
    </NextThemeProvider>
  );
}
