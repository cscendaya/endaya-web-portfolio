import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@/types";

interface ProjectsGridProps {
  projects: Project[];
}

/**
 * Lays out project cards. A list, because the projects are a set of peers and
 * the count is part of the information; the grid is the arrangement only. One
 * column while a card's prose needs the full measure, two once there is room —
 * cards stretch to a shared row height so the rhythm survives uneven summaries.
 */
export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug} className="flex">
          <ProjectCard {...project} />
        </li>
      ))}
    </ul>
  );
}
