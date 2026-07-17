"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isNavItemActive } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
  /** File name to save under; set only for entries that retrieve a file. */
  download?: string;
  /** Set only where the visible label is not the whole accessible name. */
  ariaLabel?: string;
}

/**
 * Single navigation destination, shared by the desktop and mobile navigations so
 * both resolve and present the active page identically. Client component only
 * because active-page indication depends on the current pathname.
 */
export function NavLink({
  href,
  label,
  className,
  onNavigate,
  download,
  ariaLabel,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = download === undefined && isNavItemActive(pathname, href);

  const classes = cn(
    "rounded-(--radius-token-sm) text-sm transition-colors",
    // Active state is carried by weight and underline as well as colour.
    isActive
      ? "font-medium text-text-primary underline underline-offset-8"
      : "text-text-secondary hover:text-text-primary",
    className,
  );

  // A downloading entry points at a file in `public`, not a route: `next/link`
  // exists to prefetch and client-navigate routes, and the browser can save the
  // file natively instead. Such an entry never becomes the current page, so it
  // carries no active state — but it must still close the panel it sits in.
  if (download !== undefined) {
    return (
      <a
        href={href}
        download={download}
        aria-label={ariaLabel}
        onClick={onNavigate}
        className={classes}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      aria-label={ariaLabel}
      onClick={onNavigate}
      className={classes}
    >
      {label}
    </Link>
  );
}
