import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

interface CtaSectionProps {
  id: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

/**
 * Closing call-to-action, composed from Section, Section Header, and Button
 * rather than a standalone visual pattern. Shared by Home and Contact.
 */
export function CtaSection({
  id,
  title,
  description,
  actionLabel,
  actionHref,
}: CtaSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <Section id={id} labelledBy={headingId}>
      <SectionHeader id={headingId} title={title} description={description} />
      <div>
        <Button href={actionHref}>{actionLabel}</Button>
      </div>
    </Section>
  );
}
