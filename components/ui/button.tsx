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
   * Suggested filename for a static asset the action saves rather than opens.
   * Present means the destination is a file, not a route.
   */
  download?: string;
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
 * Deliberate action, presented through the shared button styling. Every Version 1
 * action navigates, so this renders a link — the accessible element for a
 * destination — and variants are configuration rather than separate components.
 */
export function Button({
  href,
  children,
  variant = "primary",
  className,
  download,
}: ButtonProps) {
  const classes = cn(BASE_CLASSES, VARIANT_CLASSES[variant], className);

  /*
    A file in /public is not a route, so it takes a plain anchor: `next/link`
    would prefetch it and swallow the download. `target` lets a browser that
    prefers viewing PDFs open it in a new tab instead of saving it, which the
    `download` hint alone would not allow.
  */
  if (download) {
    return (
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
