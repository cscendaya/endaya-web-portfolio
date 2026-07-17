import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: string;
  className?: string;
}

/**
 * Link to a destination outside the portfolio. The icon marks the departure
 * visually and the underline carries it without relying on colour alone; the
 * appended text states it for screen readers, since the icon is decorative.
 */
export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 rounded-(--radius-token-sm) text-sm font-medium text-accent-primary underline underline-offset-4 transition-colors hover:text-accent-primary-hover",
        className,
      )}
    >
      {children}
      <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
