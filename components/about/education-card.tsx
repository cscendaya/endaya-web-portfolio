import { DetailCard } from "@/components/ui/detail-card";
import type { EducationEntry } from "@/types";

/** One education record, named in the vocabulary of the domain it presents. */
export function EducationCard({
  degree,
  institution,
  year,
  description,
}: EducationEntry) {
  return (
    <DetailCard
      title={degree}
      subtitle={institution}
      meta={year}
      description={description}
    />
  );
}
