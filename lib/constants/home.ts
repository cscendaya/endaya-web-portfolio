/**
 * Home page placeholder copy. Every value below is an implementation placeholder
 * written in brackets so it can never be mistaken for approved content; real
 * copy is supplied during the content phase. Kept here rather than inline so the
 * replacement is a single, obvious edit.
 */
export const HOME_HERO = {
  name: "[Your Name]",
  role: "[Role or Title]",
  introduction:
    "[Short professional introduction — two or three sentences establishing engineering focus, the kind of work presented here, and current direction.]",
  /**
   * The hero's second action is the résumé download, which names itself from
   * `RESUME` rather than from here — one file name, one label, one place.
   */
  primaryAction: { label: "View projects", href: "/projects" },
} as const;

export const HOME_SUMMARY = {
  title: "Professional summary",
  description:
    "[Supporting description — one sentence framing the summary points below.]",
  points: [
    "[Summary point — engineering background.]",
    "[Summary point — primary areas of technical work.]",
    "[Summary point — how projects are approached and delivered.]",
    "[Summary point — current focus or direction.]",
  ],
} as const;

export const HOME_FEATURED_PROJECTS = {
  title: "Featured projects",
  description:
    "[Supporting description — one sentence framing the selected projects.]",
  /** Rendered until approved project content exists; no projects are invented. */
  emptyState:
    "Featured project content has not been added yet. Approved projects will be presented here using the shared project card.",
  action: { label: "View all projects", href: "/projects" },
} as const;

export const HOME_SKILLS_PREVIEW = {
  title: "Skills",
  description:
    "[Supporting description — one sentence framing the competency groups.]",
  /** Rendered until approved skill content exists; no skills are invented. */
  emptyState:
    "Skill content has not been added yet. Approved competency groups will be presented here.",
  action: { label: "View all skills", href: "/skills" },
} as const;

export const HOME_CTA = {
  title: "Get in touch",
  description:
    "[Supporting description — one sentence inviting professional contact.]",
  action: { label: "Contact", href: "/contact" },
} as const;
