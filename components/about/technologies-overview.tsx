import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ABOUT_TECHNOLOGIES } from "@/lib/constants/about";

const HEADING_ID = "technologies-overview-heading";

/**
 * Contextual framing of technical capability. Prose rather than a list: the full
 * inventory belongs to the Skills page and is deliberately not duplicated here.
 */
export function TechnologiesOverview() {
  return (
    <Section id="technologies" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={ABOUT_TECHNOLOGIES.title}
        description={ABOUT_TECHNOLOGIES.description}
        action={
          <Button href={ABOUT_TECHNOLOGIES.action.href} variant="text">
            {ABOUT_TECHNOLOGIES.action.label}
          </Button>
        }
      />
      <p className="max-w-(--container-prose) text-base text-text-secondary">
        {ABOUT_TECHNOLOGIES.body}
      </p>
    </Section>
  );
}
