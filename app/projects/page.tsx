import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <PageHeader title="Projects" />
    </PageWrapper>
  );
}
