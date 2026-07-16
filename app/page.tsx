import { FeaturedProjectsPreview } from "@/components/home/featured-projects-preview";
import { Hero } from "@/components/home/hero";
import { ProfessionalSummary } from "@/components/home/professional-summary";
import { SkillsPreview } from "@/components/home/skills-preview";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { CtaSection } from "@/components/ui/cta-section";
import { HOME_CTA } from "@/lib/constants/home";

/** Approved narrative order: identity, then supporting evidence, then next step. */
export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <ProfessionalSummary />
      <FeaturedProjectsPreview />
      <SkillsPreview />
      <CtaSection
        id="contact-cta"
        title={HOME_CTA.title}
        description={HOME_CTA.description}
        actionLabel={HOME_CTA.action.label}
        actionHref={HOME_CTA.action.href}
      />
    </PageWrapper>
  );
}
