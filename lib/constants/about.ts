import type { EducationEntry, ExperienceEntry } from "@/types";

/**
 * About page placeholder copy. Every value below is an implementation
 * placeholder written in brackets so it can never be mistaken for approved
 * content; real copy is supplied during the content phase. No personal history
 * is invented here — the entry lists carry placeholder records with the approved
 * shape, and are replaced wholesale once real records exist.
 */
export const ABOUT_HEADER = {
  title: "About",
  description:
    "[Short introductory description — one or two sentences framing the professional context expanded on this page.]",
} as const;

export const ABOUT_PROFILE = {
  title: "Professional profile",
  description:
    "[Supporting description — one sentence framing the profile below.]",
  /** Ordered narrative: who, background, how they work, where they are headed. */
  entries: [
    {
      heading: "Introduction",
      body: "[Personal introduction — two or three sentences establishing professional identity and the engineering focus this portfolio presents.]",
    },
    {
      heading: "Professional background",
      body: "[Professional background — two or three sentences covering the path into engineering and the kind of work carried out so far.]",
    },
    {
      heading: "Engineering philosophy",
      body: "[Engineering philosophy — two or three sentences on how problems are approached, what quality means in practice, and which trade-offs are favoured.]",
    },
    {
      heading: "Career objectives",
      body: "[Career objectives — two or three sentences on intended direction and the kind of engineering work being pursued.]",
    },
  ],
} as const;

export const ABOUT_EDUCATION = {
  title: "Education",
  description:
    "[Supporting description — one sentence framing the educational background below.]",
  /** Replaced with approved records; placeholders never state real history. */
  entries: [
    {
      degree: "[Degree]",
      institution: "[Institution]",
      year: "2022 — 2026",
      description:
        "[Optional description — one sentence on focus areas or relevant coursework.]",
    },
  ] satisfies EducationEntry[],
} as const;

export const ABOUT_EXPERIENCE = {
  title: "Experience",
  description:
    "[Supporting description — one sentence framing the professional experience below.]",
  /** Reverse-chronological once approved records replace these placeholders. */
  entries: [
    {
      role: "[Current role]",
      organization: "[Organization]",
      duration: "[Start — Present]",
      summary:
        "[Summary — one or two sentences on responsibilities, engineering contribution, and outcome.]",
    },
    {
      role: "[Previous role]",
      organization: "[Previous organization]",
      duration: "[Start — End]",
      summary:
        "[Summary — one or two sentences on responsibilities, engineering contribution, and outcome.]",
    },
  ] satisfies ExperienceEntry[],
} as const;

/**
 * Contextual framing only. The full inventory lives on the Skills page and is
 * deliberately not duplicated here.
 */
export const ABOUT_TECHNOLOGIES = {
  title: "Technologies",
  description:
    "[Supporting description — one sentence framing technical capability at a high level.]",
  body: "[Technologies overview — two or three sentences describing the areas of the stack worked in and how tools are chosen. Kept contextual; the complete skill inventory is presented on the Skills page.]",
  action: { label: "View all skills", href: "/skills" },
} as const;

export const ABOUT_CTA = {
  title: "See the work",
  description:
    "[Supporting description — one sentence transitioning from professional context to the projects that demonstrate it.]",
  action: { label: "View projects", href: "/projects" },
} as const;
