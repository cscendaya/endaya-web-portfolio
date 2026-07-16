import { DetailCard } from "@/components/ui/detail-card";
import type { ExperienceEntry } from "@/types";

/** One experience record; the summary is always present, unlike education. */
export function ExperienceCard({
  role,
  organization,
  duration,
  summary,
}: ExperienceEntry) {
  return (
    <DetailCard
      title={role}
      subtitle={organization}
      meta={duration}
      description={summary}
    />
  );
}
