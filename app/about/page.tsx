import type { Metadata } from "next";

import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <PageHeader title="About" />
    </PageContainer>
  );
}
