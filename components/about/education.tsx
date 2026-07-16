import { EducationCard } from "@/components/about/education-card";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ABOUT_EDUCATION } from "@/lib/constants/about";

const HEADING_ID = "education-heading";

/** Educational background. A list, because the records are a set of peers. */
export function Education() {
  return (
    <Section id="education" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={ABOUT_EDUCATION.title}
        description={ABOUT_EDUCATION.description}
      />
      <ul className="flex flex-col gap-4">
        {ABOUT_EDUCATION.entries.map((entry) => (
          <li key={`${entry.degree}-${entry.institution}-${entry.year}`}>
            <EducationCard {...entry} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
