import { PROJECTS } from "@/lib/constants/projects";

/**
 * The distinct technologies used by the approved projects, sorted for a stable,
 * scannable order. Derived rather than maintained by hand so the Skills page's
 * technology overview always reflects the portfolio itself (FR-SKILL-004), and
 * returns nothing while no projects exist rather than inventing a stack.
 *
 * Hardware is included alongside technologies: the list claims to be drawn from
 * the projects presented, and it already surfaces Doorbell's hardware (kept in
 * that project's technologies), so the capstone's `hardware` must appear too —
 * otherwise the list would omit the Raspberry Pi while listing Doorbell's
 * sensors, contradicting itself. The Set dedupes across both.
 */
export function getPortfolioTechnologies(): string[] {
  const technologies = PROJECTS.flatMap((project) => [
    ...project.technologies,
    ...(project.hardware ?? []),
  ]);

  return [...new Set(technologies)].sort((a, b) => a.localeCompare(b));
}
