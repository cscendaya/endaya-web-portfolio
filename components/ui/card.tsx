import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/** Base container for grouped content. Higher-level cards compose this. */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-(--radius-token-lg) border border-border-subtle bg-surface p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
