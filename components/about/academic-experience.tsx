import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ABOUT_ACADEMIC } from "@/lib/constants/about";

const HEADING_ID = "academic-experience-heading";

/**
 * Summary of undergraduate engineering experience. Prose rather than per-project
 * cards: the Projects page owns individual project detail, so this section
 * describes the overall engineering ground covered and points readers there.
 */
export function AcademicExperience() {
  return (
    <Section id="academic-experience" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={ABOUT_ACADEMIC.title}
        description={ABOUT_ACADEMIC.description}
      />
      <div className="flex max-w-(--container-prose) flex-col gap-4">
        {ABOUT_ACADEMIC.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base text-text-secondary">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
