import type { ReactNode } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * Standard page frame: the shared container plus the spacing between a page's
 * top-level blocks. Every page composes through this rather than setting its own
 * width or section rhythm.
 */
export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <PageContainer
      className={cn(
        "flex flex-col gap-(--spacing-section) lg:gap-(--spacing-section-lg)",
        className,
      )}
    >
      {children}
    </PageContainer>
  );
}
