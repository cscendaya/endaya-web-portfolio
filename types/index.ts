import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  /**
   * Present when the entry retrieves a file from `public` rather than moving to
   * a page; the value is the name the browser saves it under. A downloading
   * entry is never the current page, so it takes no active state.
   */
  download?: string;
  /** Set only where the visible label is not the whole accessible name. */
  ariaLabel?: string;
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

/** One certification the author holds. No proficiency or grade beyond what the credential itself states. */
export interface CertificateEntry {
  name: string;
  issuer: string;
  year: string;
}

/** One seminar or training session attended. */
export interface SeminarEntry {
  title: string;
  speaker: string;
  date: string;
}

/** One professional affiliation. `membership` carries the standing, e.g. "Member since 2026". */
export interface AffiliationEntry {
  name: string;
  membership: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  duration: string;
  /** Single-paragraph detail. Present unless the role is detailed as function groups. */
  summary?: string;
  /** Short lead line before function-grouped detail, e.g. the team assignment. */
  intro?: string;
  /** A role broken out by function, each group surfacing its own facts. */
  functionGroups?: { label: string; detail: string }[];
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

/**
 * A labelled subset of chips within a Software/Hardware block, e.g. "Probe".
 * Presentation only: the flat `technologies`/`hardware` arrays stay the source
 * of truth for the portfolio technology index.
 */
export interface TechnologyGroup {
  label: string;
  items: string[];
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
  /** User-facing capability, rendered above the engineering contribution. */
  features?: string[];
  /** FR-PROJ-004: primary technologies only, not an exhaustive list. */
  technologies: string[];
  /** Optional labelled grouping of `technologies` for display; the flat array stays authoritative. */
  softwareGroups?: TechnologyGroup[];
  /** Capstone hardware. When present, the card labels technologies "Software Used" and adds a "Hardware Used" block. */
  hardware?: string[];
  /** Optional labelled grouping of `hardware` for display; the flat array stays authoritative. */
  hardwareGroups?: TechnologyGroup[];
  /** Groups the project against the approved categories, e.g. "Web application". */
  category: string;
  status?: ProjectStatus;
  /** Calendar date the work was done, e.g. "Jan 2022". Presentation only. */
  year?: string;
  /** Academic-year tag, e.g. "Year 1". Independent of list ordering. */
  academicYear?: string;
  /** Marks the project for the Home preview; on Projects it only adds a badge. */
  featured?: boolean;
  repository?: ProjectResource;
  demo?: ProjectResource;
  /** Approved screenshots. One per project; the capstone is the only card with two. */
  screenshots?: ProjectScreenshotAsset[];
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
