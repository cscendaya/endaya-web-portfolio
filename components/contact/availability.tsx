import { AvailabilityCard } from "@/components/contact/availability-card";
import { Section } from "@/components/layout/section";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeader } from "@/components/ui/section-header";
import {
  AVAILABILITY_ITEMS,
  AVAILABILITY_SECTION,
} from "@/lib/constants/contact";

const HEADING_ID = "availability-heading";

/**
 * Where availability information will live. Sits after the contact methods so it
 * supports them rather than gating them: a visitor never has to read this to
 * find a way to make contact.
 */
export function Availability() {
  return (
    <Section id="availability" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={AVAILABILITY_SECTION.title}
        description={AVAILABILITY_SECTION.description}
      />
      {AVAILABILITY_ITEMS.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {AVAILABILITY_ITEMS.map((item) => (
            <li key={item.id} className="flex">
              <AvailabilityCard {...item} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState message={AVAILABILITY_SECTION.emptyState} />
      )}
    </Section>
  );
}
