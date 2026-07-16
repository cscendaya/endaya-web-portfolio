"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
}

/**
 * Client component only because active-page indication depends on the current
 * pathname. Kept minimal so the rest of the header stays server-rendered.
 */
export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "rounded-(--radius-token-sm) px-1 py-2 text-sm transition-colors",
        // Active state is carried by weight and underline as well as colour.
        isActive
          ? "font-medium text-text-primary underline underline-offset-8"
          : "text-text-secondary hover:text-text-primary",
      )}
    >
      {label}
    </Link>
  );
}
