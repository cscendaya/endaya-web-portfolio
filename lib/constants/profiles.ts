import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/lib/constants/contact";
import type { ExternalProfile } from "@/types";

/**
 * Footer contact links. Destinations come from the contact constants rather than
 * being repeated, so the footer and the Contact page cannot drift apart.
 */
export const EXTERNAL_PROFILES: ExternalProfile[] = [
  { label: "GitHub", href: GITHUB_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Email", href: `mailto:${CONTACT_EMAIL}` },
];
