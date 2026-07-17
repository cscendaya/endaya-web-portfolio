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
 * Approved reading progression: identity, then applied professional experience,
 * then the academic background behind it, then the next step toward the work.
 */
export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHeader
        title={ABOUT_HEADER.title}
        description={ABOUT_HEADER.description}
      />
      <ProfessionalProfile />
      <Experience />
      <Education />
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
