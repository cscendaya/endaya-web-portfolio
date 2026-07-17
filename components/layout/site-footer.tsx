import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { ResumeDownload } from "@/components/ui/resume-download";
import { PAGE_NAV_ITEMS } from "@/lib/constants/navigation";
import { EXTERNAL_PROFILES } from "@/lib/constants/profiles";
import { SITE_NAME } from "@/lib/constants/site";

/** One footer link, so both lists and the résumé present identically. */
const FOOTER_LINK_CLASSES =
  "inline-block rounded-(--radius-token-sm) py-1 text-sm font-normal text-text-secondary no-underline transition-colors hover:text-text-primary";

/**
 * Shared footer: secondary navigation, professional link placeholders, and
 * copyright. Destinations are filled in during the content phase.
 *
 * The résumé sits with the professional links rather than in the footer
 * navigation: the navigation lists pages, and repeating the header's Résumé
 * entry here would offer the same file twice within one footer.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <PageContainer className="flex flex-col gap-8 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {PAGE_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={FOOTER_LINK_CLASSES}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {EXTERNAL_PROFILES.map((profile) => (
              <li key={profile.label}>
                <a href={profile.href} className={FOOTER_LINK_CLASSES}>
                  {profile.label}
                </a>
              </li>
            ))}
            <li>
              <ResumeDownload variant="text" className={FOOTER_LINK_CLASSES} />
            </li>
          </ul>
        </div>
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </PageContainer>
    </footer>
  );
}
