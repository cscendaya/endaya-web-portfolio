import type { Metadata } from "next";

import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <PageContainer>
      <PageHeader title="Skills" />
    </PageContainer>
  );
}
