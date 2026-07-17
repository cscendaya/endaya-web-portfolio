import { SkillGroup } from "@/components/skills/skill-group";
import { Card } from "@/components/ui/card";
import type { SkillCategory } from "@/types";

/**
 * One competency category: its name, optional framing, and its skills. Every
 * category is rendered through this card, so no category can be given more
 * visual weight than another (FR-SKILL-006) and the categories themselves stay
 * data rather than layout.
 */
export function SkillCategoryCard({
  id,
  name,
  description,
  skills,
}: SkillCategory) {
  const headingId = `skill-category-${id}-heading`;

  return (
    <Card className="flex h-full w-full flex-col">
      <h3 id={headingId} className="text-base font-semibold text-text-primary">
        {name}
      </h3>
      {description ? (
        <p className="mt-1 max-w-(--container-prose) text-base text-text-secondary">
          {description}
        </p>
      ) : null}
      <div className="mt-4">
        <SkillGroup skills={skills} labelledBy={headingId} />
      </div>
    </Card>
  );
}
