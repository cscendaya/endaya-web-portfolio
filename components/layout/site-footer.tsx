import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { NAV_ITEMS } from "@/lib/constants/navigation";
import { SITE_NAME } from "@/lib/constants/site";

/**
 * Footer placeholder for PH7.1. External professional links are added once their
 * approved values exist in the content phase.
 */
export function SiteFooter() {
  return (
    <footer className="mt-(--spacing-section) border-t border-border-subtle bg-surface">
      <PageContainer className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </PageContainer>
    </footer>
  );
}
