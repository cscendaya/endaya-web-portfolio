import { Section } from "@/components/layout/section";
import { DetailCard } from "@/components/ui/detail-card";
import { SectionHeader } from "@/components/ui/section-header";
import { ABOUT_SEMINARS } from "@/lib/constants/about";

const HEADING_ID = "seminars-heading";

/** Seminars and training attended, most recent first, sharing the dated-record card. */
export function Seminars() {
  return (
    <Section id="seminars" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={ABOUT_SEMINARS.title}
        description={ABOUT_SEMINARS.description}
      />
      <ul className="flex flex-col gap-4">
        {ABOUT_SEMINARS.entries.map((entry) => (
          <li key={`${entry.title}-${entry.date}`}>
            <DetailCard
              title={entry.title}
              subtitle={entry.speaker}
              meta={entry.date}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
