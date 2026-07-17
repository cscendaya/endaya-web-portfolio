import { SkillBadge } from "@/components/ui/skill-badge";
import type { Skill } from "@/types";

/**
 * One skill within a group: the badge, and the optional line of context beneath
 * it. The description is subordinate to the name because the name is the claim —
 * the technology was worked with — and nothing further is asserted.
 */
export function SkillItem({ name, icon, description }: Skill) {
  return (
    <li className="flex flex-col gap-1.5">
      <div className="flex">
        <SkillBadge name={name} icon={icon} />
      </div>
      {description ? (
        <p className="max-w-(--container-prose) text-sm text-text-secondary">
          {description}
        </p>
      ) : null}
    </li>
  );
}
