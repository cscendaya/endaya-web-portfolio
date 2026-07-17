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
