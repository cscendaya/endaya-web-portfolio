import { SkillItem } from "@/components/skills/skill-item";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

interface SkillGroupProps {
  skills: Skill[];
  /** Id of the heading naming the category these skills belong to. */
  labelledBy?: string;
}

/**
 * Lays out the skills of one category. A list, because the skills are a set of
 * peers and their order carries no ranking.
 *
 * Bare names wrap inline, which reads as the single scannable row it is. Once
 * any skill in the group carries a description, the badges need their own
 * column each so a description sits under its own name and not beside a
 * neighbour's — the whole group switches together, keeping the alignment
 * consistent across the category as FR-SKILL-006 requires.
 */
export function SkillGroup({ skills, labelledBy }: SkillGroupProps) {
  const hasDescriptions = skills.some((skill) => skill.description);

  return (
    <ul
      aria-labelledby={labelledBy}
      className={cn(
        hasDescriptions
          ? "grid grid-cols-1 gap-4 sm:grid-cols-2"
          : "flex flex-wrap gap-2",
      )}
    >
      {skills.map((skill) => (
        <SkillItem key={skill.name} {...skill} />
      ))}
    </ul>
  );
}
