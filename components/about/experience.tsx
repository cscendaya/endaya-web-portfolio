import { ExperienceCard } from "@/components/about/experience-card";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ABOUT_EXPERIENCE } from "@/lib/constants/about";

const HEADING_ID = "experience-heading";

/**
 * Experience summary as a stacked, reverse-chronological list. Ordered, because
 * the sequence of roles is itself the information; the visual rhythm comes from
 * the shared card and section spacing rather than a decorative timeline rail.
 */
export function Experience() {
  return (
    <Section id="experience" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={ABOUT_EXPERIENCE.title}
        description={ABOUT_EXPERIENCE.description}
      />
      <ol className="flex flex-col gap-4">
        {ABOUT_EXPERIENCE.entries.map((entry) => (
          <li key={`${entry.role}-${entry.organization}-${entry.duration}`}>
            <ExperienceCard {...entry} />
          </li>
        ))}
      </ol>
    </Section>
  );
}
