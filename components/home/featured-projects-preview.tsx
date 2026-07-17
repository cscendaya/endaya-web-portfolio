import { Section } from "@/components/layout/section";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeader } from "@/components/ui/section-header";
import { HOME_FEATURED_PROJECTS } from "@/lib/constants/home";
import { PROJECTS } from "@/lib/constants/projects";

const HEADING_ID = "featured-projects-heading";

/** Only the projects marked featured; the Projects page carries the full set. */
const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);

/**
 * Preview of selected projects, rendered through the same grid and card as the
 * Projects page so neither can present a project differently. Falls back to the
 * shared empty state when no project is featured.
 */
const featuredProjects = PROJECTS.filter((project) => project.featured);

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
      {FEATURED_PROJECTS.length > 0 ? (
        <ProjectsGrid projects={FEATURED_PROJECTS} />
      ) : (
        <EmptyState message={HOME_FEATURED_PROJECTS.emptyState} />
      )}
    </Section>
  );
}
