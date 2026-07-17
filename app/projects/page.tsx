import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { ProjectListing } from "@/components/projects/project-listing";
import { CtaSection } from "@/components/ui/cta-section";
import { PageHeader } from "@/components/ui/page-header";
import { PROJECTS_CTA, PROJECTS_HEADER } from "@/lib/constants/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: PROJECTS_HEADER.description,
  openGraph: { title: "Projects", description: PROJECTS_HEADER.description },
};

/**
 * Approved structure: page introduction, then the listing, then the next step.
 * Every project entry is presented through the shared card, so the page itself
 * owns no project-specific layout.
 */
export default function ProjectsPage() {
  return (
    <PageWrapper>
      <PageHeader
        title={PROJECTS_HEADER.title}
        description={PROJECTS_HEADER.description}
      />
      <ProjectListing />
      <CtaSection
        id="contact-cta"
        title={PROJECTS_CTA.title}
        description={PROJECTS_CTA.description}
        actionLabel={PROJECTS_CTA.action.label}
        actionHref={PROJECTS_CTA.action.href}
      />
    </PageWrapper>
  );
}
