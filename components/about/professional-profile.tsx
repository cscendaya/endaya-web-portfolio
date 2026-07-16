import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ABOUT_PROFILE } from "@/lib/constants/about";

const HEADING_ID = "professional-profile-heading";

/**
 * Full professional narrative: the expansion of the condensed summary on the
 * Home page. Each entry is a subsection under the section heading, so the
 * reading order and the heading hierarchy match.
 */
export function ProfessionalProfile() {
  return (
    <Section id="professional-profile" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={ABOUT_PROFILE.title}
        description={ABOUT_PROFILE.description}
      />
      <div className="flex max-w-(--container-prose) flex-col gap-8">
        {ABOUT_PROFILE.entries.map((entry) => (
          <div key={entry.heading}>
            <h3 className="text-base font-semibold text-text-primary">
              {entry.heading}
            </h3>
            <p className="mt-2 text-base text-text-secondary">{entry.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
