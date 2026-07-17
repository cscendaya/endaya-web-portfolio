import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "text";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /**
   * File name to save the target under. Set only for actions that retrieve a
   * static asset rather than navigate; see the rendering note below.
   */
  download?: string;
  /** Set only where the visible label is not the whole accessible name. */
  "aria-label"?: string;
}

const BASE_CLASSES =
  "inline-flex items-center justify-center rounded-(--radius-token-md) text-sm font-medium transition-colors";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-primary px-5 py-2.5 text-background hover:bg-accent-primary-hover",
  secondary:
    "border border-border-subtle bg-background px-5 py-2.5 text-text-primary hover:bg-surface",
  text: "text-accent-primary underline underline-offset-4 hover:text-accent-primary-hover",
};

/**
 * Deliberate action, presented through the shared button styling. Every action
 * either navigates or retrieves a file, so this renders a link — the accessible
 * element for a destination — and variants are configuration rather than
 * separate components.
 */
export function Button({
  href,
  children,
  variant = "primary",
  className,
  download,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(BASE_CLASSES, VARIANT_CLASSES[variant], className);

  // A download targets a file in `public`, not a route, so it renders a plain
  // anchor: `next/link` exists to prefetch and client-navigate routes, and would
  // do neither usefully here. The `download` attribute then lets the browser
  // save the file natively instead of leaving the page.
  if (download !== undefined) {
    return (
      <a
        href={href}
        download={download}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}
