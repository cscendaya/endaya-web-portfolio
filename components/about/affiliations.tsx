import { Section } from "@/components/layout/section";
import { DetailCard } from "@/components/ui/detail-card";
import { SectionHeader } from "@/components/ui/section-header";
import { ABOUT_AFFILIATIONS } from "@/lib/constants/about";

const HEADING_ID = "affiliations-heading";

/** Professional affiliations. Each record carries its name and standing only. */
export function Affiliations() {
  return (
    <Section id="affiliations" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={ABOUT_AFFILIATIONS.title}
        description={ABOUT_AFFILIATIONS.description}
      />
      <ul className="flex flex-col gap-4">
        {ABOUT_AFFILIATIONS.entries.map((entry) => (
          <li key={entry.name}>
            <DetailCard title={entry.name} meta={entry.membership} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
