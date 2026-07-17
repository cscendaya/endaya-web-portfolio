import Link from "next/link";

import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { PageContainer } from "@/components/layout/page-container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { SITE_NAME } from "@/lib/constants/site";

/**
 * Global header (NAV-001): brand, global navigation, and the mobile disclosure.
 * `relative` positions the mobile panel directly beneath the header bar. Not
 * sticky — the Design System does not define sticky behaviour for Version 1.
 */
export function SiteHeader() {
  return (
    <header className="relative border-b border-border-subtle bg-background">
      <PageContainer className="flex items-center justify-between gap-x-8 py-4">
        <Link
          href="/"
          className="inline-block rounded-(--radius-token-sm) py-2 text-sm font-medium text-text-primary"
          aria-label={`${SITE_NAME} — home`}
        >
          {SITE_NAME}
        </Link>
        {/* One toggle serves both navigations — it sits outside the disclosure
            so the theme is reachable on mobile without opening the menu. */}
        <div className="flex items-center gap-x-2">
          <MainNav />
          <ThemeToggle className="md:ml-2" />
          <MobileNav />
        </div>
      </PageContainer>
    </header>
  );
}
