import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@/types";

interface ProjectsGridProps {
  projects: Project[];
}

/**
 * Lays out project cards. A list, because the projects are a set of peers and
 * the count is part of the information. One card per row at the full content
 * measure: each card carries features, screenshots, and grouped Software/
 * Hardware chips that need the whole width. A two-up grid squeezed those chips
 * into ragged single-item columns and, whenever a row held one card (the Home
 * featured preview), left an empty half beside it.
 */
export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <ul className="flex flex-col gap-6">
      {projects.map((project) => (
        <li key={project.slug} className="flex">
          <ProjectCard {...project} />
        </li>
      ))}
    </ul>
  );
}
