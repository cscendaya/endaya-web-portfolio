import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SkillIcon } from "@/components/ui/skill-icon";

interface SkillBadgeProps {
  name: string;
  icon?: LucideIcon;
}

/**
 * Names one skill. Shared by the Home preview and the Skills page, and identical
 * in every competency category — per the Design System there are no
 * category-specific variants, and per FR-SKILL-005 nothing here can carry a
 * rating, so a badge stays the whole presentation of a skill's name.
 */
export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <Badge className="gap-1.5">
      {icon ? <SkillIcon icon={icon} /> : null}
      {name}
    </Badge>
  );
}
