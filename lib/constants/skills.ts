import type { SkillCategory } from "@/types";

/**
 * Skills page copy and skill records. Sourced from the author's CV and, for the
 * Enterprise Information Security group, the Datamatics narrative report and
 * training plan — that group lists only tooling and practices actually used
 * during the internship. Nothing here records proficiency, level, or years: per
 * FR-SKILL-005 the page presents technologies worked with, not quantified
 * expertise, and the `Skill` type has no field to express one.
 */
export const SKILLS_HEADER = {
  title: "Skills",
  description:
    "The technologies I have worked with, grouped by competency area — backend and systems engineering first, alongside the security tooling used in enterprise practice.",
} as const;

export const SKILLS_OVERVIEW = {
  title: "Overview",
  description: "What this page covers, and what it does not.",
  body: "This page lists the technologies I have worked with, grouped by competency area. It describes exposure rather than measured expertise: a technology appears here because I have built or operated something with it, not to assert a proficiency level. The Enterprise Information Security group covers tooling and practices used during my Information Security internship at Datamatics Philippines, where my involvement ranged from direct monitoring and documentation to assisting senior staff.",
} as const;

export const SKILL_CATEGORIES_SECTION = {
  title: "Competency groups",
  description:
    "Grouped by the kind of work each supports rather than by language.",
  /** Rendered when SKILL_CATEGORIES is empty, matching the Home preview. */
  emptyState:
    "Skill content has not been added yet. Approved competency groups will be presented here using the shared skill card.",
} as const;

/**
 * FR-SKILL-003/004: the technologies actually used by the work on the Projects
 * page. Derived from PROJECTS rather than listed again, so this section cannot
 * drift from the projects it summarises or claim a technology no project uses.
 */
export const TECHNOLOGY_OVERVIEW = {
  title: "Technologies across the portfolio",
  description:
    "Drawn directly from the projects presented here, so this list stays tied to delivered work.",
  emptyState:
    "No project technologies to summarise yet. Once approved projects are added, the technologies they use are listed here.",
} as const;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend-apis",
    name: "Backend & APIs",
    description:
      "Server-side application logic and the interfaces other systems consume.",
    skills: [
      { name: "PHP" },
      { name: "C#" },
      { name: "ASP.NET" },
      { name: "Python" },
      { name: "Express.js" },
      { name: "RESTful API design" },
      { name: "Front-controller routing" },
      { name: "PDO data access layers" },
      { name: "Secure CRUD operations" },
      { name: "Paginated data retrieval" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    description: "Data modelling and persistence.",
    skills: [
      { name: "MySQL" },
      { name: "Supabase" },
      { name: "Normalized schema design" },
    ],
  },
  {
    id: "enterprise-information-security",
    name: "Enterprise Information Security",
    description:
      "Tooling and practices used during my Information Security internship at Datamatics Philippines, under the IT Security team's ISMS function.",
    skills: [
      {
        name: "Wazuh",
        description: "Security log monitoring, event auditing, and threat detection.",
      },
      {
        name: "SentinelOne",
        description:
          "Endpoint detection and response; threat log review, agent version verification, and frontline endpoint diagnostics.",
      },
      {
        name: "OpenVAS",
        description: "Vulnerability scanning and assessment; investigating and documenting findings.",
      },
      {
        name: "FortiGate",
        description:
          "Firewall monitoring and network security configuration; assisted with traffic filtering and policy review.",
      },
      {
        name: "Kaspersky",
        description:
          "Endpoint protection, malware scanning, database updates, and group policy management.",
      },
      {
        name: "SIEM monitoring",
        description: "Daily review and auditing of security logs from the enterprise SIEM platform.",
      },
      {
        name: "Threat Intelligence Process (TIP)",
        description: "Applying TIP and Cyber Threat Intelligence to identify anomalies against internal playbooks.",
      },
      {
        name: "Vulnerability management",
        description: "Scanning and reporting aligned to NIST vulnerability response frameworks.",
      },
      {
        name: "Incident response (NIST)",
        description: "Applying IR procedures, security playbooks, and root cause analysis.",
      },
      {
        name: "Endpoint auditing",
        description: "Monthly desktop auditing and endpoint data compliance verification.",
      },
      { name: "ISMS" },
      { name: "ISO 27001:2022" },
      { name: "PCI DSS" },
      { name: "SOC 2 Type II" },
      {
        name: "Security documentation",
        description:
          "GRC reporting, policy proofreading and editing, and audit evidence preparation.",
      },
      {
        name: "Windows Event Viewer",
        description: "Event ID tracking and system diagnostics.",
      },
    ],
  },
  {
    id: "systems-integration",
    name: "Server & Middleware Environments",
    description:
      "The runtimes and devices the systems above run on, and the boundaries between them.",
    skills: [
      { name: "XAMPP" },
      { name: "Railway" },
      { name: "Raspberry Pi" },
      { name: "Arduino / Wemos D1" },
      { name: "Device-to-server integration" },
    ],
  },
  {
    id: "networking-security",
    name: "Networking & Security",
    description: "Network fundamentals and security assessment tooling.",
    skills: [
      { name: "Cisco Packet Tracer" },
      { name: "Kali Linux" },
      { name: "Kismet" },
      { name: "Tailscale" },
      { name: "Windows Active Directory" },
    ],
  },
  {
    id: "other-languages",
    name: "Other Languages",
    description: "Additional languages worked with across academic and personal projects.",
    skills: [
      { name: "JavaScript" },
      { name: "Kotlin" },
      { name: "C++" },
      { name: "Assembly" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "React.js" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Development Environment",
    skills: [
      { name: "GitHub" },
      { name: "Visual Studio Code" },
      { name: "Android Studio" },
      { name: "Android SDK" },
      { name: "Figma" },
    ],
  },
];
