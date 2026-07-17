import type { SkillCategory } from "@/types";

/**
 * Skills page copy and skill records. No technology is invented here: every
 * entry below is one I have worked with on the projects in this portfolio or on
 * the portfolio itself. The page, the sections, and the cards read entirely from
 * SKILL_CATEGORIES.
 */
export const SKILLS_HEADER = {
  title: "Skills",
  description:
    "The technologies I have worked with, grouped by the part of a system they belong to. Most of them come from the projects listed in this portfolio.",
} as const;

export const SKILLS_OVERVIEW = {
  title: "Overview",
  description: "What this page does and does not claim.",
  body: "This page lists the technologies I have actually built with, grouped by competency area. It describes exposure rather than measured expertise — a technology appears here because I have used it in a project, not because I claim a level in it. Where a tool sits at the centre of my work, the group description says what I used it for.",
} as const;

export const SKILL_CATEGORIES_SECTION = {
  title: "Competency groups",
  description:
    "Grouped by area so you can find the part of the stack you care about.",
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
    "Drawn directly from the projects on this site, so this list stays honest to the work.",
  emptyState:
    "No project technologies to summarise yet. Once approved projects are added, the technologies they use are listed here.",
} as const;

/**
 * The approved competency groups. Nothing here records proficiency, level, or
 * years — per FR-SKILL-005 the page presents technologies worked with, not
 * quantified expertise, and the `Skill` type has no field to express one.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming-languages",
    name: "Programming Languages",
    description: "The languages I reach for on backend and systems work.",
    skills: [
      { name: "C#", description: "Object-oriented game logic and systems." },
      { name: "PHP", description: "REST services and server-side logic." },
      { name: "SQL", description: "Schema definition and queries." },
      {
        name: "TypeScript",
        description: "Typed application code, including this portfolio.",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    description:
      "Where most of my work lives: designing the services and the logic behind them.",
    skills: [
      { name: "REST API design" },
      {
        name: "PDO",
        description: "Prepared statements and safe data access in PHP.",
      },
      { name: "CRUD and pagination" },
      { name: "Object-oriented programming" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    description:
      "Enough of the client side to ship a full-stack project myself.",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    id: "database",
    name: "Database",
    description: "Structuring data so the system stays correct as it grows.",
    skills: [
      { name: "Relational database design" },
      { name: "Normalization" },
      { name: "Database architecture" },
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "My specialization, and the focus of my capstone work.",
    skills: [
      { name: "Wi-Fi security assessment" },
      { name: "Network security fundamentals" },
      { name: "Secure server-side practices" },
    ],
  },
  {
    id: "systems-and-hardware",
    name: "Systems & Hardware",
    description: "Getting software and the machine underneath it to cooperate.",
    skills: [
      {
        name: "Raspberry Pi",
        description: "Hardware probe for security assessments.",
      },
      { name: "System integration" },
    ],
  },
  {
    id: "tools-and-version-control",
    name: "Tools & Version Control",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Technical documentation" },
    ],
  },
];
