import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { SkillCategories } from "@/components/skills/skill-categories";
import { SkillsOverview } from "@/components/skills/skills-overview";
import { TechnologyOverview } from "@/components/skills/technology-overview";
import { PageHeader } from "@/components/ui/page-header";
import { SKILLS_HEADER } from "@/lib/constants/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: SKILLS_HEADER.description,
  openGraph: { title: "Skills", description: SKILLS_HEADER.description },
};

/**
 * Approved structure: page introduction, what the page covers, the competency
 * groups, then the technologies the portfolio's projects actually use. Every
 * skill is presented through the shared card and badge, so the page itself owns
 * no skill-specific layout.
 */
export default function SkillsPage() {
  return (
    <PageWrapper>
      <PageHeader
        title={SKILLS_HEADER.title}
        description={SKILLS_HEADER.description}
      />
      <SkillsOverview />
      <SkillCategories />
      <TechnologyOverview />
    </PageWrapper>
  );
}
