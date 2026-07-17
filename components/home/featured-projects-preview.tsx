import { Section } from "@/components/layout/section";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeader } from "@/components/ui/section-header";
import { HOME_FEATURED_PROJECTS } from "@/lib/constants/home";
import { PROJECTS } from "@/lib/constants/projects";

const HEADING_ID = "featured-projects-heading";

/**
 * Preview of selected projects, reading the projects marked `featured`. PROJECTS
 * order is preserved, so the capstone leads here as it does on the Projects
 * page. Falls back to the empty state when nothing is featured.
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
      {featuredProjects.length > 0 ? (
        <ProjectsGrid projects={featuredProjects} />
      ) : (
        <EmptyState message={HOME_FEATURED_PROJECTS.emptyState} />
      )}
    </Section>
  );
}
