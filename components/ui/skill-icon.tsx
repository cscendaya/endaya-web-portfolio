import type { LucideIcon } from "lucide-react";

interface SkillIconProps {
  icon: LucideIcon;
}

/**
 * Renders a skill's optional icon at the shared size. Decorative: the skill name
 * always sits beside it, so the icon is hidden from screen readers rather than
 * repeating a label they already read.
 */
export function SkillIcon({ icon: Icon }: SkillIconProps) {
  return <Icon aria-hidden="true" className="size-4 shrink-0" />;
}
