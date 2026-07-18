import type { Project, ProjectStatus, TechnologyGroup } from "@/types";

/**
 * Capstone Software/Hardware, authored as labelled subgroups. The flat
 * `technologies`/`hardware` arrays on the project are derived from these via
 * flattenGroups, so the groups and the portfolio technology index cannot drift
 * apart. Presentation differs per §46: Software Used renders the subgroup labels
 * (they carry the probe-vs-web-tier boundary), Hardware Used renders the flat
 * list only — the hardware labels are authored but not shown.
 */
const WHYPII_SOFTWARE_GROUPS: TechnologyGroup[] = [
  { label: "Probe", items: ["Python", "Kismet", "Kali Linux", "Tailscale", "MySQL"] },
  {
    label: "Web application",
    items: ["React", "Node.js", "Tailwind CSS", "Chart.js", "Supabase"],
  },
  { label: "Interface", items: ["REST API design"] },
];

const WHYPII_HARDWARE_GROUPS: TechnologyGroup[] = [
  { label: "Compute", items: ["Raspberry Pi 5 Model B Rev 1.0"] },
  {
    label: "Wireless",
    items: [
      "Alfa AWUS036NHA Wireless Adapter",
      "ALFA AWUS036ACM Wireless Adapter",
      "Greo USB Antenna Ctrl Fox Wireless Adapter",
    ],
  },
  { label: "Storage", items: ["SanDisk Ultra MicroSDXC A1"] },
  { label: "Power", items: ["Official Raspberry Pi 5 USB-C Power Supply"] },
  { label: "Enclosure", items: ["52Pi Raspberry Pi 5 Case with Armor Lite V5 Fan"] },
];

const flattenGroups = (groups: TechnologyGroup[]): string[] =>
  groups.flatMap((group) => group.items);

/**
 * Projects page copy and project records. Sourced from the author's CV. External
 * resources (repository, demo, screenshot) stay omitted until an approved URL or
 * asset exists, so no link is invented here.
 */
export const PROJECTS_HEADER = {
  title: "Projects",
  description:
    "Academic software projects where I led or built the server side. Each entry states what the system does and the part I was responsible for.",
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
  features: "Features",
  contribution: "Engineering contribution",
  technologies: "Technologies",
  software: "Software Used",
  hardware: "Hardware Used",
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
    features: [
      "Passively observes nearby public Wi-Fi access points from a Raspberry Pi probe deployed in the field, without transmitting to or probing the networks it assesses.",
      "Detects security weaknesses in observed network configurations.",
      "Assigns each network a normalized risk score reflecting the severity of the weaknesses found.",
      "Retains assessment history, so a network's security posture can be reviewed across scans rather than as a single snapshot.",
      "Serves general users a captive portal on connection, surfacing the network's risk at the moment they join it.",
      "Gives security, network, and systems professionals a separate web dashboard for tracking risks across assessed networks, with charted breakdowns of security posture.",
    ],
    contribution:
      "Technical lead and full-stack developer. I designed the system boundaries — deciding what the probe owns, what the backend owns, and the contract between them — and built the data pipeline connecting the Raspberry Pi probe to the web application, including the REST endpoints that receive scan data and the relational schema that stores it. I coordinated the team and carried the system from concept through deployment. The engineering problems here were integration problems rather than feature problems: reconciling an intermittently connected field device with a backend that has to stay authoritative about scan history, and keeping a tool that handles network reconnaissance data from becoming a security liability itself.",
    // Software Used. MySQL (probe) and Supabase (web tier) are both present — a
    // subsystem split, not a substitution. REST API design retained: the
    // contribution prose above references the REST endpoints. Flat array is
    // derived from the subgroups so the two cannot drift.
    technologies: flattenGroups(WHYPII_SOFTWARE_GROUPS),
    softwareGroups: WHYPII_SOFTWARE_GROUPS,
    // Hardware Used. Exact models from submission-assets.md, verbatim.
    hardware: flattenGroups(WHYPII_HARDWARE_GROUPS),
    hardwareGroups: WHYPII_HARDWARE_GROUPS,
    screenshots: [
      {
        src: "/images/whypii-dashboard.png",
        alt: "Why-Pii dashboard: overall Wi-Fi security risk score, a severity breakdown chart, and a table of the highest-risk assessed networks.",
      },
      {
        src: "/images/whypii-captiveportal.jpg",
        alt: "Why-Pii captive portal shown when joining a network, displaying its estimated risk score and a plain-language warning about the weakness found.",
      },
    ],
    category: "Capstone project",
    year: "2026",
    academicYear: "Year 4",
    featured: true,
  },
  {
    slug: "r-easecite",
    title: "R-EaseCite Mobile App",
    summary:
      "A faculty recitation management application for onsite classroom use, covering section and student management, question organization, and score recording within a limited-use academic environment.",
    features: [
      "Manage class sections and the students enrolled in them.",
      "Organize the questions used during recitation.",
      "Record student scores during onsite recitation.",
      "Draw students and questions through built-in randomization.",
    ],
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
    screenshots: [
      {
        src: "/images/REASECITE-setround.png",
        alt: "R-EaseCite Set Round screen: selecting subject and section, then setting participants, score range, and time limit before starting a recitation.",
      },
    ],
    category: "Backend service",
    year: "Jul 2025",
    academicYear: "Year 3",
    status: "completed",
  },
  {
    slug: "doorbell-notification-system",
    title: "Doorbell Notification System",
    summary:
      "An IoT doorbell system that captures motion and sound events at the door and records them server-side for review.",
    features: [
      "Detect motion and sound events at the door through PIR and sound sensors.",
      "Record captured door events server-side for later review.",
    ],
    contribution:
      "Backend and device logic developer. I built the middleware layer receiving motion and sound event data transmitted from a Wemos D1 over HTTP and persisting it to a MySQL event store, and wrote the Arduino and Wemos firmware capturing PIR and sound sensor input and transmitting event payloads to the backend — both sides of the device-to-server boundary.",
    technologies: [
      "PHP",
      "MySQL",
      "XAMPP",
      "Wemos D1",
      "Arduino",
      "PIR sensor",
      "Sound sensor",
      "Kotlin",
    ],
    category: "IoT integration",
    year: "Nov 2025",
    academicYear: "Year 4",
    status: "completed",
  },
  {
    slug: "ccis-event-enlistment",
    title: "CCIS Department Event Enlistment Mobile App",
    summary:
      "An application for the CCIS Department tracking student participation in departmental events, including attendance records, event counts, and which events each student joined.",
    features: [
      "Track student attendance at departmental events.",
      "See how many events each student joined.",
      "View the specific events a student participated in.",
    ],
    contribution:
      "Developer and group lead. I integrated the client with backend functionality, wiring data-bound views to server-side event and attendance operations, and coordinated the team's tasks and development progress. The delivered system received positive faculty feedback.",
    technologies: ["ASP.NET", "C#", "JavaScript", "CSS"],
    category: "Web application",
    year: "Jul 2024",
    academicYear: "Year 3",
    status: "completed",
  },
  {
    slug: "careby",
    title: "Careby Web Application",
    summary:
      "A web application for scheduling and conducting online mental health therapy sessions.",
    features: [
      "Schedule online mental health therapy sessions.",
      "Conduct therapy sessions online.",
      "Manage session scheduling and details.",
    ],
    contribution:
      "Developer and group lead. I integrated application components with backend functionality supporting scheduling and session management, and coordinated the team's tasks and development progress.",
    technologies: ["ASP.NET", "C#", "JavaScript", "CSS"],
    screenshots: [
      {
        src: "/images/careby-homepage.jpg",
        alt: "Careby home page showing a patient's upcoming therapy appointment with controls to start the session or book a new one.",
      },
    ],
    category: "Web application",
    year: "Mar 2024",
    academicYear: "Year 2",
    status: "completed",
  },
  {
    slug: "bagsik-ng-malayan",
    title: "Bagsik ng Malayan: The Game",
    summary:
      "A terminal-based game built in C#, developed as an early exercise in object-oriented design.",
    features: [
      "Play a terminal-based game.",
      "Progress through gameplay driven by the game's core mechanics.",
    ],
    contribution:
      "Backend developer. I designed the core game logic and mechanics, applying object-oriented programming to structure the gameplay systems and organize reusable game objects.",
    technologies: ["C#"],
    category: "Application",
    year: "Jan 2022",
    academicYear: "Year 1",
    status: "completed",
  },
];

export const PROJECTS_CTA = {
  title: "Get in touch",
  description:
    "Happy to walk through the architecture or the decisions behind any of the systems above.",
  action: { label: "Contact", href: "/contact" },
} as const;
