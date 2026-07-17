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
    "Security tooling, backend services, and system integration — ordered by the scope of my contribution.",
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
      "A web platform that runs Wi-Fi security assessments using a Raspberry Pi as the hardware probe, turning wireless monitoring in the field into an auditing workflow a reviewer can act on.",
    contribution:
      "Technical Lead and Full Stack Developer. I put the Raspberry Pi at the edge and kept assessment logic on the server, so the probe stays replaceable and the platform holds the rules. I designed the database around the scan record as the unit of history, exposed the probe to the platform through an API rather than a shared filesystem, and automated the assessment run so a reviewer reads results instead of operating hardware.",
    technologies: ["Raspberry Pi"],
    category: "Cybersecurity platform",
    featured: true,
  },
  {
    slug: "r-easecite-mobile-application",
    title: "R-EaseCite Mobile Application",
    summary:
      "An Android application for managing recitation records, backed by REST services that keep one authoritative copy of the data behind every device.",
    contribution:
      "Backend Developer. I built the RESTful API and the relational schema underneath it, keeping the Android client a consumer of the API rather than an owner of the data. CRUD operations run through parameterized server-side logic in PHP with PDO, and pagination is handled server-side so the response size stays bounded as records accumulate.",
    technologies: ["PHP", "PDO", "REST API", "Android"],
    category: "Mobile application backend",
    featured: true,
  },
  {
    slug: "ccis-event-enlistment-app",
    title: "CCIS Department Event Enlistment App",
    summary:
      "An ASP.NET application for enlisting students into department events and tracking attendance against them.",
    contribution:
      "Backend Developer on a team. I worked on the ASP.NET backend covering event tracking and attendance management, and shared coordination of the work so the parts we built separately fit together.",
    technologies: ["ASP.NET"],
    category: "Web application backend",
  },
];

export const PROJECTS_CTA = {
  title: "Get in touch",
  description:
    "Happy to walk through any of these — the design decisions, the trade-offs, or the parts I would build differently now.",
  action: { label: "Contact", href: "/contact" },
} as const;
