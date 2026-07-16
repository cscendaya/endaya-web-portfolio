import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <PageHeader title="Contact" />
    </PageWrapper>
  );
}
