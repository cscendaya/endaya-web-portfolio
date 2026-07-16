import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  /** Anchor target; also gives the section a stable scroll offset. */
  id?: string;
  /** Id of the heading that names this section, for screen reader landmarks. */
  labelledBy?: string;
  className?: string;
}

/**
 * Structural wrapper for one page section. Owns the section landmark and the
 * shared vertical rhythm only — content and headings stay page-specific.
 */
export function Section({ children, id, labelledBy, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "flex scroll-mt-(--spacing-section) flex-col gap-6",
        className,
      )}
    >
      {children}
    </section>
  );
}
