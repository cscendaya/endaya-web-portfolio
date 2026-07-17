import type { Project, ProjectStatus } from "@/types";

/**
 * Projects page copy and project records. No project, technology, or external
 * resource is invented here. Approved project content is added to PROJECTS —
 * the page, the grid, and the card read entirely from this list, so nothing
 * else has to change when real projects arrive.
 */
export const PROJECTS_HEADER = {
  title: "Projects",
  description:
    "[Short introductory description — one or two sentences framing the selected work and what each entry demonstrates.]",
} as const;

export const PROJECTS_LISTING = {
  title: "Selected projects",
  description:
    "[Supporting description — one sentence framing the projects below.]",
  /** Rendered when PROJECTS is empty, matching the Home preview's behaviour. */
  emptyState:
    "Project content has not been added yet. Approved projects will be presented here using the shared project card.",
} as const;

export const PROJECT_LABELS = {
  contribution: "Engineering contribution",
  technologies: "Technologies",
  featured: "Featured",
} as const;

/** Presentation text for each status; the union keeps the set closed. */
export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  "in-progress": "In progress",
  completed: "Completed",
  maintained: "Maintained",
};

/**
 * Empty until approved project content exists. Fabricated entries would read as
 * portfolio evidence, so the page renders its empty state instead.
 *
 * Each approved project is one `Project` record:
 *
 *   {
 *     slug: "inventory-service",
 *     title: "Inventory Service",
 *     summary: "…purpose, understandable without opening any link.",
 *     contribution: "…what was designed, built, and decided.",
 *     technologies: ["TypeScript", "PostgreSQL"],
 *     category: "Backend service",
 *     status: "completed",                                     // optional
 *     featured: true,                                          // optional
 *     repository: { label: "Repository", href: "https://…" },  // optional
 *     demo: { label: "Live demo", href: "https://…" },         // optional
 *   }
 *
 * `repository`, `demo`, `status`, `featured`, and `screenshot` stay omitted
 * unless the approved resource or fact exists — the card renders each only when
 * it is present.
 */
export const PROJECTS: Project[] = [];

export const PROJECTS_CTA = {
  title: "Get in touch",
  description:
    "[Supporting description — one sentence inviting discussion of the work above.]",
  action: { label: "Contact", href: "/contact" },
} as const;
