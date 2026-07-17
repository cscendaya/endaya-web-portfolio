import type { SkillCategory } from "@/types";

/**
 * Skills page copy and skill records. No technology is invented here. Approved
 * competency groups are added to SKILL_CATEGORIES — the page, the sections, and
 * the cards read entirely from that list, so the UI does not change when real
 * skills arrive.
 */
export const SKILLS_HEADER = {
  title: "Skills",
  description:
    "[Short introductory description — one or two sentences framing the technologies presented here and the kind of work they support.]",
} as const;

export const SKILLS_OVERVIEW = {
  title: "Overview",
  description:
    "[Supporting description — one sentence framing what this page covers.]",
  body: "[Overview copy — two or three sentences explaining that this page lists the technologies worked with, grouped by competency area, and that it describes exposure rather than measured expertise.]",
} as const;

export const SKILL_CATEGORIES_SECTION = {
  title: "Competency groups",
  description:
    "[Supporting description — one sentence framing the groups below.]",
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
    "[Supporting description — one sentence framing the technologies used by the projects presented in this portfolio.]",
  emptyState:
    "No project technologies to summarise yet. Once approved projects are added, the technologies they use are listed here.",
} as const;

/**
 * Empty until approved skill content exists. Fabricated entries would read as
 * portfolio evidence, so the page renders its empty state instead.
 *
 * Each approved competency group is one `SkillCategory` record. The names below
 * are illustrative of the shape only — the approved set is chosen when real
 * content arrives, and may be any of Programming Languages, Frontend, Backend,
 * Databases, Tools, DevOps, or Other Technologies:
 *
 *   {
 *     id: "frontend",
 *     name: "Frontend",
 *     description: "…what this group covers.",   // optional
 *     skills: [
 *       { name: "TypeScript" },
 *       { name: "React", icon: Component, description: "…what it was used for." },
 *     ],
 *   }
 *
 * A skill's `icon` and `description` stay omitted unless they add something the
 * name does not. Nothing here records proficiency, level, or years — per
 * FR-SKILL-005 the page presents technologies worked with, not quantified
 * expertise, and the `Skill` type has no field to express one.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [];
