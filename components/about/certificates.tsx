import { Section } from "@/components/layout/section";
import { DetailCard } from "@/components/ui/detail-card";
import { SectionHeader } from "@/components/ui/section-header";
import { ABOUT_CERTIFICATES } from "@/lib/constants/about";

const HEADING_ID = "certificates-heading";

/** Certifications held. A list of peer records, sharing the dated-record card. */
export function Certificates() {
  return (
    <Section id="certificates" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={ABOUT_CERTIFICATES.title}
        description={ABOUT_CERTIFICATES.description}
      />
      <ul className="flex flex-col gap-4">
        {ABOUT_CERTIFICATES.entries.map((entry) => (
          <li key={`${entry.name}-${entry.issuer}-${entry.year}`}>
            <DetailCard
              title={entry.name}
              subtitle={entry.issuer}
              meta={entry.year}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
