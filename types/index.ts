import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ExternalProfile {
  label: string;
  href: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  duration: string;
  summary: string;
}

/**
 * One technology the author has worked with. FR-SKILL-005 forbids proficiency,
 * so a skill carries no rating, level, or duration — only what it is and, where
 * it helps, what it was used for.
 */
export interface Skill {
  /** The technology's own name, e.g. "TypeScript". Also the list key. */
  name: string;
  /** Decorative mark rendered beside the name; omitted when none applies. */
  icon?: LucideIcon;
  /** One short line of context. Never a claim about depth of experience. */
  description?: string;
}

/**
 * A competency group per FR-SKILL-002. Category names are data, not code: the
 * approved set is chosen in the constants, and the page renders whatever it is
 * given without knowing any category by name.
 */
export interface SkillCategory {
  /** Stable identity for keys and the group's heading id. */
  id: string;
  name: string;
  description?: string;
  skills: Skill[];
}

/** Optional per FR-PROJ-006/007: linked only when the resource is public. */
export interface ProjectResource {
  label: string;
  href: string;
}

export interface ProjectScreenshotAsset {
  src: string;
  /** Describes the work shown, never "screenshot of X". */
  alt: string;
}

/**
 * Version 1 has no filtering, so status is presentation only: it exists to say
 * a project is unfinished when that is true, not to drive behaviour.
 */
export type ProjectStatus = "in-progress" | "completed" | "maintained";

export interface Project {
  /** Stable identity for keys and anchors; independent of the title. */
  slug: string;
  title: string;
  /** FR-PROJ-003: what the project is for. */
  summary: string;
  /** FR-PROJ-005: what the author actually built. */
  contribution: string;
  /** FR-PROJ-004: primary technologies only, not an exhaustive list. */
  technologies: string[];
  /** Groups the project against the approved categories, e.g. "Web application". */
  category: string;
  status?: ProjectStatus;
  /** Marks the project for the Home preview; on Projects it only adds a badge. */
  featured?: boolean;
  repository?: ProjectResource;
  demo?: ProjectResource;
  screenshot?: ProjectScreenshotAsset;
}

/**
 * One approved way to reach the author (FR-CONTACT-001/002/003). The link label
 * is descriptive text rather than an aria-label, so the accessible name is the
 * visible one; `external` records whether the destination leaves the portfolio,
 * which decides how the link is presented (FR-CONTACT-004).
 */
export interface ContactMethod {
  /** Stable identity for keys and the card's heading id. */
  id: string;
  /** The channel's name, e.g. "Email". Rendered as the card heading. */
  title: string;
  /** Decorative mark beside the title; the title always carries the meaning. */
  icon: LucideIcon;
  /** One line saying what this channel is for. */
  description: string;
  /** Reads as an instruction, e.g. "Open GitHub profile". Names the link. */
  linkLabel: string;
  href: string;
  /** True for destinations outside the portfolio, which open in a new tab. */
  external: boolean;
}

/** One line of availability context. Never a commitment the author has not made. */
export interface AvailabilityItem {
  id: string;
  title: string;
  description: string;
}
