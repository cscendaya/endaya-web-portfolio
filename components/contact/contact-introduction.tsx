import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/ui/section-header";
import { CONTACT_INTRODUCTION } from "@/lib/constants/contact";

const HEADING_ID = "contact-introduction-heading";

/** Frames the channels that follow and encourages professional communication. */
export function ContactIntroduction() {
  return (
    <Section id="contact-introduction" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={CONTACT_INTRODUCTION.title}
        description={CONTACT_INTRODUCTION.description}
      />
      <p className="max-w-(--container-prose) text-base text-text-secondary">
        {CONTACT_INTRODUCTION.body}
      </p>
    </Section>
  );
}
