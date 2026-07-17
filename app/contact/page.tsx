import type { Metadata } from "next";

import { Availability } from "@/components/contact/availability";
import { ContactIntroduction } from "@/components/contact/contact-introduction";
import { ContactMethods } from "@/components/contact/contact-methods";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { CtaSection } from "@/components/ui/cta-section";
import { PageHeader } from "@/components/ui/page-header";
import { CONTACT_CTA, CONTACT_HEADER } from "@/lib/constants/contact";

export const metadata: Metadata = {
  title: "Contact",
};

/**
 * Approved structure: page introduction, an invitation to make contact, the
 * approved channels, availability context, then the closing call-to-action.
 * Version 1 has no form — every channel is a direct one, presented through the
 * shared contact card, so the page itself owns no contact-specific layout.
 */
export default function ContactPage() {
  return (
    <PageWrapper>
      <PageHeader
        title={CONTACT_HEADER.title}
        description={CONTACT_HEADER.description}
      />
      <ContactIntroduction />
      <ContactMethods />
      <Availability />
      <CtaSection
        id="contact-cta"
        title={CONTACT_CTA.title}
        description={CONTACT_CTA.description}
        actionLabel={CONTACT_CTA.action.label}
        actionHref={CONTACT_CTA.action.href}
      />
    </PageWrapper>
  );
}
