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
