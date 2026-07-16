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
}

/**
 * Single navigation destination, shared by the desktop and mobile navigations so
 * both resolve and present the active page identically. Client component only
 * because active-page indication depends on the current pathname.
 */
export function NavLink({ href, label, className, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = isNavItemActive(pathname, href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "rounded-(--radius-token-sm) text-sm transition-colors",
        // Active state is carried by weight and underline as well as colour.
        isActive
          ? "font-medium text-text-primary underline underline-offset-8"
          : "text-text-secondary hover:text-text-primary",
        className,
      )}
    >
      {label}
    </Link>
  );
}
