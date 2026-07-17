import { SkillCategoryCard } from "@/components/skills/skill-category-card";
import { Section } from "@/components/layout/section";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeader } from "@/components/ui/section-header";
import {
  SKILL_CATEGORIES,
  SKILL_CATEGORIES_SECTION,
} from "@/lib/constants/skills";

const HEADING_ID = "skill-categories-heading";

/**
 * The competency groups: heading, then either the categories or the empty
 * state. The empty state stands in until approved skill content exists, matching
 * the Home preview and the Projects listing rather than inventing technologies.
 */
export function SkillCategories() {
  return (
    <Section id="skill-categories" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={SKILL_CATEGORIES_SECTION.title}
        description={SKILL_CATEGORIES_SECTION.description}
      />
      {SKILL_CATEGORIES.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => (
            <li key={category.id} className="flex">
              <SkillCategoryCard {...category} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState message={SKILL_CATEGORIES_SECTION.emptyState} />
      )}
    </Section>
  );
}
