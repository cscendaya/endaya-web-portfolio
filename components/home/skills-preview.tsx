import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeader } from "@/components/ui/section-header";
import { HOME_SKILLS_PREVIEW } from "@/lib/constants/home";

const HEADING_ID = "skills-preview-heading";

/**
 * Preview of the competency groups covered in full on the Skills page. No skill
 * data exists yet, so the section renders its empty state.
 */
export function SkillsPreview() {
  return (
    <Section id="skills-preview" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={HOME_SKILLS_PREVIEW.title}
        description={HOME_SKILLS_PREVIEW.description}
        action={
          <Button href={HOME_SKILLS_PREVIEW.action.href} variant="text">
            {HOME_SKILLS_PREVIEW.action.label}
          </Button>
        }
      />
      <EmptyState message={HOME_SKILLS_PREVIEW.emptyState} />
    </Section>
  );
}
