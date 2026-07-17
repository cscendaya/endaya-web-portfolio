import { Section } from "@/components/layout/section";
import { SkillCategoryCard } from "@/components/skills/skill-category-card";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeader } from "@/components/ui/section-header";
import { HOME_SKILLS_PREVIEW } from "@/lib/constants/home";
import { SKILL_CATEGORIES } from "@/lib/constants/skills";

const HEADING_ID = "skills-preview-heading";

/** A preview, so it leads with the first groups and defers the rest to /skills. */
const PREVIEW_COUNT = 4;

/**
 * Preview of the competency groups covered in full on the Skills page. Reads
 * SKILL_CATEGORIES in order and reuses the Skills page card, so a group cannot
 * present differently here than it does there. Falls back to the empty state
 * when no category exists.
 */
const previewCategories = SKILL_CATEGORIES.slice(0, PREVIEW_COUNT);

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
      {previewCategories.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {previewCategories.map((category) => (
            <li key={category.id} className="flex">
              <SkillCategoryCard {...category} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState message={HOME_SKILLS_PREVIEW.emptyState} />
      )}
    </Section>
  );
}
