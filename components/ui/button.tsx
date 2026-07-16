import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "text";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
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
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(BASE_CLASSES, VARIANT_CLASSES[variant], className)}
    >
      {children}
    </Link>
  );
}
