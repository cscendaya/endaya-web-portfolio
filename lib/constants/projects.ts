import type { Project, ProjectStatus } from "@/types";

/**
 * Projects page copy and project records. Sourced from the author's CV. External
 * resources (repository, demo, screenshot) stay omitted until an approved URL or
 * asset exists, so no link is invented here.
 */
export const PROJECTS_HEADER = {
  title: "Projects",
  description:
    "Systems work, led by the capstone. Each entry states what the system does and which parts of it I designed and built.",
} as const;

export const PROJECTS_LISTING = {
  title: "Selected projects",
  description:
    "Ordered by engineering weight rather than recency — the capstone first, then backend and integration work.",
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
 * Why-Pii is the capstone and leads the list everywhere it appears: it is first
 * here, and its `featured` flag makes it first on the Home preview. `category`
 * carries the "Capstone project" label using the existing badge — no new field
 * or component was needed to identify it.
 *
 * `repository`, `demo`, `status`, and `screenshot` stay omitted where the
 * approved resource or fact does not exist; the card renders each only when
 * present.
 */
export const PROJECTS: Project[] = [
  {
    slug: "why-pii",
    title: "Why-Pii — Web-based Wi-Fi Security Assessment Tool",
    summary:
      "A Wi-Fi security assessment platform built around a Raspberry Pi probe and a secure web application. The Pi performs wireless network reconnaissance in the field and transmits its findings to a backend service, which processes and persists the results and presents them through a web interface. The system exists to make network security assessment repeatable: rather than reading raw wireless captures on the device, an assessor reviews structured findings from a browser.",
    contribution:
      "Technical lead and full-stack developer. I designed the system boundaries — deciding what the probe owns, what the backend owns, and the contract between them — and built the data pipeline connecting the Raspberry Pi probe to the web application, including the REST endpoints that receive scan data and the relational schema that stores it. I coordinated the team and carried the system from concept through deployment. The engineering problems here were integration problems rather than feature problems: reconciling an intermittently connected field device with a backend that has to stay authoritative about scan history, and keeping a tool that handles network reconnaissance data from becoming a security liability itself.",
    technologies: [
      "Raspberry Pi",
      "Python",
      "REST API design",
      "MySQL",
      "Kali Linux",
      "Kismet",
      "Tailscale",
    ],
    category: "Capstone project",
    featured: true,
  },
  {
    slug: "r-easecite",
    title: "R-EaseCite Mobile App",
    summary:
      "A faculty recitation management application for onsite classroom use, covering section and student management, question organization, and score recording within a limited-use academic environment.",
    contribution:
      "Backend developer. I architected the RESTful backend with a front-controller routing system and a PDO-based data access layer, designed the normalized relational schema behind the recitation workflow, and implemented secure CRUD operations and paginated retrieval across related entities. I also wired the Android client to the API, handling request flow, filtering, and randomization logic against backend data.",
    technologies: [
      "PHP",
      "MySQL",
      "XAMPP",
      "Kotlin",
      "Android Studio",
      "Jetpack Compose",
    ],
    category: "Backend service",
    status: "completed",
  },
  {
    slug: "doorbell-notification-system",
    title: "Doorbell Notification System",
    summary:
      "An IoT doorbell system that captures motion and sound events at the door and records them server-side for review.",
    contribution:
      "Backend and device logic developer. I built the middleware layer receiving motion and sound event data transmitted from a Wemos D1 over HTTP and persisting it to a MySQL event store, and wrote the Arduino and Wemos firmware capturing PIR and sound sensor input and transmitting event payloads to the backend — both sides of the device-to-server boundary.",
    technologies: [
      "PHP",
      "MySQL",
      "XAMPP",
      "Wemos D1",
      "Arduino",
      "Kotlin",
    ],
    category: "IoT integration",
    status: "completed",
  },
  {
    slug: "ccis-event-enlistment",
    title: "CCIS Department Event Enlistment Mobile App",
    summary:
      "An application for the CCIS Department tracking student participation in departmental events, including attendance records, event counts, and which events each student joined.",
    contribution:
      "Developer and group lead. I integrated the client with backend functionality, wiring data-bound views to server-side event and attendance operations, and coordinated the team's tasks and development progress. The delivered system received positive faculty feedback.",
    technologies: ["ASP.NET", "C#", "JavaScript", "CSS"],
    category: "Web application",
    status: "completed",
  },
  {
    slug: "careby",
    title: "Careby Web Application",
    summary:
      "A web application for scheduling and conducting online mental health therapy sessions.",
    contribution:
      "Developer and group lead. I integrated application components with backend functionality supporting scheduling and session management, and coordinated the team's tasks and development progress.",
    technologies: ["ASP.NET", "C#", "JavaScript", "CSS"],
    category: "Web application",
    status: "completed",
  },
  {
    slug: "bagsik-ng-malayan",
    title: "Bagsik ng Malayan: The Game",
    summary:
      "A terminal-based game built in C#, developed as an early exercise in object-oriented design.",
    contribution:
      "Backend developer. I designed the core game logic and mechanics, applying object-oriented programming to structure the gameplay systems and organize reusable game objects.",
    technologies: ["C#"],
    category: "Application",
    status: "completed",
  },
];

export const PROJECTS_CTA = {
  title: "Get in touch",
  description:
    "Happy to walk through the architecture or the decisions behind any of the systems above.",
  action: { label: "Contact", href: "/contact" },
} as const;
