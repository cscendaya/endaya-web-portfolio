import { ProjectCard } from "@/components/projects/project-card";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { PROJECTS, PROJECTS_LISTING } from "@/lib/constants/projects";

const HEADING_ID = "project-listing-heading";

/**
 * The project listing. A list, because the projects are a set of peers and the
 * count is part of the information; the empty state stands in until approved
 * project content exists, matching the Home preview rather than inventing work.
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
        <ul className="flex flex-col gap-6">
          {PROJECTS.map((project) => (
            <li key={project.slug}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      ) : (
        <Card>
          <p className="max-w-(--container-prose) text-base text-text-secondary">
            {PROJECTS_LISTING.emptyState}
          </p>
        </Card>
      )}
    </Section>
  );
}
