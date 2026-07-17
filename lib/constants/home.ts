import { RESUME } from "@/lib/constants/site";

/**
 * Home page copy. Kept here rather than inline so the page reads entirely from
 * data and copy revisions stay a single, obvious edit.
 */
export const HOME_HERO = {
  greeting: "Hello, I'm",
  name: "Carlie Shaye C. Endaya",
  role: "IT Student specializing in Cybersecurity",
  introduction:
    "I build secure, maintainable, and data-driven software systems — backend services, security tooling, and the database designs underneath them. I like understanding how a system fits together before optimizing any single part of it.",
  primaryAction: { label: "View projects", href: "/projects" },
  secondaryAction: { label: "Contact me", href: "/contact" },
  resumeAction: {
    label: "Download CV",
    href: RESUME.href,
    fileName: RESUME.fileName,
  },
} as const;

export const HOME_SUMMARY = {
  title: "Professional summary",
  description: "The short version of what I work on and how I approach it.",
  points: [
    "Information Technology student specializing in cybersecurity, with academic projects spanning security assessment tooling, backend services, and game systems.",
    "Most of my work sits on the server side: REST APIs, normalized database design, and the hardware and system integration that ties a platform together.",
    "I work systems-first — map the whole flow, keep the structure simple and documented, then optimize the parts that actually need it.",
    "Currently expanding into scalable software systems, with an interest in backend development, cybersecurity, data engineering, and systems engineering work.",
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
