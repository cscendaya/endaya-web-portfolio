import Link from "next/link";

import { NavLink } from "@/components/layout/nav-link";
import { PageContainer } from "@/components/layout/page-container";
import { NAV_ITEMS } from "@/lib/constants/navigation";
import { SITE_NAME } from "@/lib/constants/site";

/**
 * Global navigation (NAV-001). Placeholder structure for PH7.1: destinations and
 * order are final; presentation is refined in later phases.
 */
export function SiteHeader() {
  return (
    <header className="border-b border-border-subtle bg-background">
      <PageContainer className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-4">
        <Link
          href="/"
          className="text-sm font-medium text-text-primary"
          aria-label={`${SITE_NAME} — home`}
        >
          {SITE_NAME}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>
      </PageContainer>
    </header>
  );
}
