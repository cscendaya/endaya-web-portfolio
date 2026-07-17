import { Badge } from "@/components/ui/badge";

interface TechnologyBadgeProps {
  name: string;
}

/**
 * Names one technology used by a project. A badge in the vocabulary of the
 * domain, so the Projects and Skills pages can stay consistent without either
 * restyling the badge itself.
 */
export function TechnologyBadge({ name }: TechnologyBadgeProps) {
  return <Badge>{name}</Badge>;
}
