import { ProjectsGrid } from "@/components/projects/projects-grid";
import { Section } from "@/components/layout/section";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeader } from "@/components/ui/section-header";
import { PROJECTS, PROJECTS_LISTING } from "@/lib/constants/projects";

const HEADING_ID = "project-listing-heading";

/**
 * The project listing section: heading, then either the grid or the empty
 * state. The empty state stands in until approved project content exists,
 * matching the Home preview rather than inventing work.
 */
export function ProjectListing() {
  return (
    <Section id="project-listing" labelledBy={HEADING_ID}>
      <SectionHeader
        id={HEADING_ID}
        title={PROJECTS_LISTING.title}
        description={PROJECTS_LISTING.description}
      />
      {PROJECTS.length > 0 ? (
        <ProjectsGrid projects={PROJECTS} />
      ) : (
        <EmptyState message={PROJECTS_LISTING.emptyState} />
      )}
    </Section>
  );
}
