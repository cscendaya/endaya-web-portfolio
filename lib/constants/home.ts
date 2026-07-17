/**
 * Home page copy. Kept here rather than inline so the page reads entirely from
 * data and copy revisions stay a single, obvious edit.
 */
export const HOME_HERO = {
  greeting: "Hello, I'm",
  name: "Carlie Shaye C. Endaya",
  role: "IT Student specializing in Cybersecurity",
  introduction:
    "I build systems that connect software, hardware, and data into practical solutions. My interests span backend architecture, cybersecurity, and system design, with a long-term goal of becoming a Data/Systems Engineer focused on secure and scalable infrastructure.",
  /**
   * The hero's second action is the résumé download, which names itself from
   * `RESUME` rather than from here — one file name, one label, one place.
   */
  primaryAction: { label: "View projects", href: "/projects" },
} as const;

export const HOME_SUMMARY = {
  title: "How I think",
  description: "The approach I bring to the systems I work on.",
  points: [
    "I understand the problem before I design anything for it.",
    "I design systems meant to be maintained, not only finished.",
    "I build backend architecture around reliability, and database structures around clarity.",
    "I integrate software, hardware, and data as one system rather than separate parts.",
    "I treat security as part of development rather than a step at the end.",
  ],
} as const;

export const HOME_FEATURED_PROJECTS = {
  title: "Featured projects",
  description:
    "Selected academic work showing how I design and build systems end to end.",
  /** Rendered until approved project content exists; no projects are invented. */
  emptyState:
    "Featured project content has not been added yet. Approved projects will be presented here using the shared project card.",
  action: { label: "View all projects", href: "/projects" },
} as const;

export const HOME_SKILLS_PREVIEW = {
  title: "Skills",
  description:
    "The technologies I have worked with, grouped by the area they belong to.",
  /** Rendered until approved skill content exists; no skills are invented. */
  emptyState:
    "Skill content has not been added yet. Approved competency groups will be presented here.",
  action: { label: "View all skills", href: "/skills" },
} as const;

export const HOME_CTA = {
  title: "Get in touch",
  description:
    "Open to internships, collaboration, and backend or cybersecurity projects — I read every message myself.",
  action: { label: "Contact", href: "/contact" },
} as const;
