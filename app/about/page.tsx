import type { Metadata } from "next";

import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { ProfessionalProfile } from "@/components/about/professional-profile";
import { TechnologiesOverview } from "@/components/about/technologies-overview";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { CtaSection } from "@/components/ui/cta-section";
import { PageHeader } from "@/components/ui/page-header";
import { ABOUT_CTA, ABOUT_HEADER } from "@/lib/constants/about";

export const metadata: Metadata = {
  title: "About",
};

/**
 * Approved reading progression: identity, then the background behind it and the
 * evidence of how it was built, then the next step toward the work itself.
 */
export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHeader
        title={ABOUT_HEADER.title}
        description={ABOUT_HEADER.description}
      />
      <ProfessionalProfile />
      <Education />
      <Experience />
      <TechnologiesOverview />
      <CtaSection
        id="projects-cta"
        title={ABOUT_CTA.title}
        description={ABOUT_CTA.description}
        actionLabel={ABOUT_CTA.action.label}
        actionHref={ABOUT_CTA.action.href}
      />
    </PageWrapper>
  );
}
