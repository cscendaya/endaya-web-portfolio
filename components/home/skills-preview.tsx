import { Section } from "@/components/layout/section";
import { SkillCategoryCard } from "@/components/skills/skill-category-card";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeader } from "@/components/ui/section-header";
import { HOME_SKILLS_PREVIEW } from "@/lib/constants/home";
import { SKILL_CATEGORIES } from "@/lib/constants/skills";

const HEADING_ID = "skills-preview-heading";

/** A preview, so it stops short of the full inventory; Skills carries the rest. */
const PREVIEW_CATEGORIES = SKILL_CATEGORIES.slice(0, 4);

/**
 * Preview of the competency groups covered in full on the Skills page, rendered
 * through the same card so the two cannot describe a group differently.
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
      {PREVIEW_CATEGORIES.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PREVIEW_CATEGORIES.map((category) => (
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
