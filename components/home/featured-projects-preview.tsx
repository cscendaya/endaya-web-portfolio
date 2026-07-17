import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeader } from "@/components/ui/section-header";
import { HOME_FEATURED_PROJECTS } from "@/lib/constants/home";

const HEADING_ID = "featured-projects-heading";

/**
 * Preview of selected projects. No project data exists yet, so the section
 * renders its empty state; the project card arrives with approved content.
 */
export function FeaturedProjectsPreview() {
  return (
    <Section id="featured-projects" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={HOME_FEATURED_PROJECTS.title}
        description={HOME_FEATURED_PROJECTS.description}
        action={
          <Button href={HOME_FEATURED_PROJECTS.action.href} variant="text">
            {HOME_FEATURED_PROJECTS.action.label}
          </Button>
        }
      />
      <EmptyState message={HOME_FEATURED_PROJECTS.emptyState} />
    </Section>
  );
}
