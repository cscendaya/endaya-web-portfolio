import type { Project } from "@/types";

/**
 * Projects page copy and project records. Every value is a bracketed
 * implementation placeholder; no project, technology, or external resource is
 * invented. Approved project content replaces PROJECTS wholesale — the page and
 * the card read entirely from this list.
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
} as const;

/**
 * Placeholder records only. `repository`, `demo`, and `screenshot` are omitted
 * rather than filled with invented destinations: the card renders each only when
 * the approved resource exists, so the omissions here exercise that path.
 */
export const PROJECTS: Project[] = [
  {
    slug: "project-one",
    title: "[Project title]",
    summary:
      "[Project summary — two or three sentences on the problem the project addresses and its purpose. Understandable without opening any external resource.]",
    contribution:
      "[Engineering contribution — two or three sentences on what was designed and built, the decisions owned, and the outcome.]",
    technologies: [
      "[Technology one]",
      "[Technology two]",
      "[Technology three]",
    ],
  },
  {
    slug: "project-two",
    title: "[Project title]",
    summary:
      "[Project summary — two or three sentences on the problem the project addresses and its purpose. Understandable without opening any external resource.]",
    contribution:
      "[Engineering contribution — two or three sentences on what was designed and built, the decisions owned, and the outcome.]",
    technologies: ["[Technology one]", "[Technology two]"],
  },
];

export const PROJECTS_CTA = {
  title: "Get in touch",
  description:
    "[Supporting description — one sentence inviting discussion of the work above.]",
  action: { label: "Contact", href: "/contact" },
} as const;
