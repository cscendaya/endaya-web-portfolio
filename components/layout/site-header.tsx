import Link from "next/link";

import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { PageContainer } from "@/components/layout/page-container";
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
          className="rounded-(--radius-token-sm) text-sm font-medium text-text-primary"
          aria-label={`${SITE_NAME} — home`}
        >
          {SITE_NAME}
        </Link>
        <MainNav />
        <MobileNav />
      </PageContainer>
    </header>
  );
}
