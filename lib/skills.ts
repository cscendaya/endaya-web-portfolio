import { PROJECTS } from "@/lib/constants/projects";

/**
 * The distinct technologies used by the approved projects, sorted for a stable,
 * scannable order. Derived rather than maintained by hand so the Skills page's
 * technology overview always reflects the portfolio itself (FR-SKILL-004), and
 * returns nothing while no projects exist rather than inventing a stack.
 */
export function getPortfolioTechnologies(): string[] {
  const technologies = PROJECTS.flatMap((project) => project.technologies);

  return [...new Set(technologies)].sort((a, b) => a.localeCompare(b));
}
