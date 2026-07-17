import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SKILLS_OVERVIEW } from "@/lib/constants/skills";

const HEADING_ID = "skills-overview-heading";

/**
 * States what this page is and how to read it, before any skill is listed.
 * Prose rather than a list: it frames the groups below, it does not duplicate
 * them.
 */
export function SkillsOverview() {
  return (
    <Section id="skills-overview" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={SKILLS_OVERVIEW.title}
        description={SKILLS_OVERVIEW.description}
      />
      <p className="max-w-(--container-prose) text-base text-text-secondary">
        {SKILLS_OVERVIEW.body}
      </p>
    </Section>
  );
}
