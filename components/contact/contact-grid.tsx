import { ContactCard } from "@/components/contact/contact-card";
import type { ContactMethod } from "@/types";

interface ContactGridProps {
  methods: ContactMethod[];
}

/**
 * Lays out contact methods as a list, since they are a set of equivalent
 * channels rather than prose. Owns the grid only — the cards own their content,
 * and the section owns the heading.
 */
export function ContactGrid({ methods }: ContactGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {methods.map((method) => (
        <li key={method.id} className="flex">
          <ContactCard {...method} />
        </li>
      ))}
    </ul>
  );
}
