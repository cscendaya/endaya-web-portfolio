import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <PageWrapper>
      <PageHeader title="Skills" />
    </PageWrapper>
  );
}
