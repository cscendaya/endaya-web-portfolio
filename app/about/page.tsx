import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHeader title="About" />
    </PageWrapper>
  );
}
