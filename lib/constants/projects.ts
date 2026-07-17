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
    "Academic software projects where I led or built the server side. Each entry states what the system does and the part I was responsible for.",
} as const;

export const PROJECTS_LISTING = {
  title: "Selected projects",
  description:
    "Security tooling, backend services, and game systems — ordered by the scope of my contribution.",
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
 * The approved Version 1 projects. `repository`, `demo`, `status`, and
 * `screenshot` stay omitted until the resource or fact exists — the card renders
 * each only when it is present — and the role is stated inside `contribution`
 * rather than as a separate claim.
 */
export const PROJECTS: Project[] = [
  {
    slug: "wifi-security-assessment-tool",
    title: "Web-based Wi-Fi Security Assessment Tool Using Raspberry Pi",
    summary:
      "A web platform that runs Wi-Fi security assessments using a Raspberry Pi as the hardware probe, turning field scans into a practical auditing workflow a reviewer can act on.",
    contribution:
      "Technical Lead and Full Stack Developer. I led backend and frontend development, designed the database architecture, and handled the integration between the Raspberry Pi probe and the web platform so assessments ran end to end.",
    technologies: ["Raspberry Pi"],
    category: "Cybersecurity platform",
    featured: true,
  },
  {
    slug: "faculty-recitation-management",
    title: "Faculty Recitation Management Mobile Application",
    summary:
      "A mobile application for faculty to manage recitation records, backed by REST services that keep the data consistent across devices.",
    contribution:
      "Backend Developer. I built the RESTful APIs and backend services, designed normalized database structures, and implemented CRUD operations, pagination, and secure server-side logic using PHP and PDO.",
    technologies: ["PHP", "PDO", "REST API"],
    category: "Mobile application backend",
    featured: true,
  },
  {
    slug: "bagsik-ng-malayan",
    title: "Bagsik ng Malayan",
    summary:
      "A terminal-based C# game built around object-oriented gameplay systems.",
    contribution:
      "Backend Developer. I built the game logic and object-oriented systems behind the gameplay mechanics, structuring the code into modules so rules could be changed without rewriting the engine around them.",
    technologies: ["C#"],
    category: "Game development",
  },
];

export const PROJECTS_CTA = {
  title: "Get in touch",
  description:
    "Happy to walk through any of these — the design decisions, the trade-offs, or the parts I would build differently now.",
  action: { label: "Contact", href: "/contact" },
} as const;
