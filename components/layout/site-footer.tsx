import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { NAV_ITEMS } from "@/lib/constants/navigation";
import { EXTERNAL_PROFILES } from "@/lib/constants/profiles";
import { SITE_NAME } from "@/lib/constants/site";

/**
 * Shared footer: secondary navigation, professional link placeholders, and
 * copyright. Destinations are filled in during the content phase.
 */
export function SiteFooter() {
  return (
    <footer className="mt-(--spacing-section) border-t border-border-subtle bg-surface">
      <PageContainer className="flex flex-col gap-8 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-(--radius-token-sm) text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {EXTERNAL_PROFILES.map((profile) => (
              <li key={profile.label}>
                <a
                  href={profile.href}
                  className="rounded-(--radius-token-sm) text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {profile.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </PageContainer>
    </footer>
  );
}
