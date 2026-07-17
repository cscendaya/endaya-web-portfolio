import { ContactGrid } from "@/components/contact/contact-grid";
import { Section } from "@/components/layout/section";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeader } from "@/components/ui/section-header";
import {
  CONTACT_METHODS,
  CONTACT_METHODS_SECTION,
} from "@/lib/constants/contact";

const HEADING_ID = "contact-methods-heading";

/**
 * The approved communication channels: heading, then either the methods or the
 * empty state. Details are read straight from the data (FR-CONTACT-006 — nothing
 * is asked of the visitor before they are shown), matching the other pages
 * rather than inventing an address.
 */
export function ContactMethods() {
  return (
    <Section id="contact-methods" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={CONTACT_METHODS_SECTION.title}
        description={CONTACT_METHODS_SECTION.description}
      />
      {CONTACT_METHODS.length > 0 ? (
        <ContactGrid methods={CONTACT_METHODS} />
      ) : (
        <EmptyState message={CONTACT_METHODS_SECTION.emptyState} />
      )}
    </Section>
  );
}
