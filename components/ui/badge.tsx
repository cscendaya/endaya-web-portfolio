import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Concise metadata, carried without interrupting the reading flow. Static by
 * design: badges label content in Version 1, they never filter or navigate.
 */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-(--radius-token-sm) border border-border-subtle bg-surface px-2.5 py-1 text-sm text-text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
