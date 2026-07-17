import { Section } from "@/components/layout/section";
import { TechnologyBadge } from "@/components/projects/technology-badge";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeader } from "@/components/ui/section-header";
import { TECHNOLOGY_OVERVIEW } from "@/lib/constants/skills";
import { getPortfolioTechnologies } from "@/lib/skills";

const HEADING_ID = "technology-overview-heading";

/**
 * FR-SKILL-003/004: the technologies the portfolio's own projects use, read from
 * the project records themselves. Nothing is listed here that no project claims,
 * and the shared technology badge keeps the vocabulary identical to Projects.
 */
export function TechnologyOverview() {
  const technologies = getPortfolioTechnologies();

  return (
    <Section id="technology-overview" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={TECHNOLOGY_OVERVIEW.title}
        description={TECHNOLOGY_OVERVIEW.description}
      />
      {technologies.length > 0 ? (
        <ul aria-labelledby={HEADING_ID} className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li key={technology} className="flex">
              <TechnologyBadge name={technology} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState message={TECHNOLOGY_OVERVIEW.emptyState} />
      )}
    </Section>
  );
}
