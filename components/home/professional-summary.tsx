import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HOME_SUMMARY } from "@/lib/constants/home";

const HEADING_ID = "professional-summary-heading";

/** Condensed professional narrative. Expanded in full on the About page. */
export function ProfessionalSummary() {
  return (
    <Section id="professional-summary" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={HOME_SUMMARY.title}
        description={HOME_SUMMARY.description}
      />
      <ul className="flex max-w-(--container-prose) list-disc flex-col gap-3 pl-5 text-base text-text-secondary">
        {HOME_SUMMARY.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </Section>
  );
}
