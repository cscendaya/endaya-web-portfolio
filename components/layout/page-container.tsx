import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

/** Shared content container: one width and alignment for every page. */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-(--container-content) px-6 md:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
