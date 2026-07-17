import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent";

interface BadgeProps {
  children: ReactNode;
  /** "accent" marks the few badges that carry emphasis, such as Featured. */
  variant?: BadgeVariant;
  className?: string;
}

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  default: "border-border-subtle bg-surface text-text-secondary",
  accent: "border-accent-primary bg-surface text-accent-primary",
};

/**
 * Concise metadata, carried without interrupting the reading flow. Static by
 * design: badges label content in Version 1, they never filter or navigate.
 */
export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-(--radius-token-sm) border px-2.5 py-1 text-sm",
        VARIANT_STYLES[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
