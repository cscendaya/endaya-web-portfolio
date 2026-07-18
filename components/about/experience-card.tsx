import { DetailCard } from "@/components/ui/detail-card";
import type { ExperienceEntry } from "@/types";

/**
 * One experience record. A role is presented either as a single summary
 * paragraph or, when its work spans distinct functions, as a lead line followed
 * by function-grouped detail — the same card either way.
 */
export function ExperienceCard({
  role,
  organization,
  duration,
  summary,
  intro,
  functionGroups,
}: ExperienceEntry) {
  if (functionGroups && functionGroups.length > 0) {
    return (
      <DetailCard
        title={role}
        subtitle={organization}
        meta={duration}
        description={intro}
      >
        <ul className="mt-3 flex max-w-(--container-prose) flex-col gap-2 text-base text-text-secondary">
          {functionGroups.map((group) => (
            <li key={group.label}>
              <span className="font-semibold text-text-primary">
                {group.label}.
              </span>{" "}
              {group.detail}
            </li>
          ))}
        </ul>
      </DetailCard>
    );
  }

  return (
    <DetailCard
      title={role}
      subtitle={organization}
      meta={duration}
      description={summary}
    />
  );
}
