import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/lib/constants/contact";
import type { ExternalProfile } from "@/types";

/** Footer contact destinations, sourced from the author's CV. */
export const EXTERNAL_PROFILES: ExternalProfile[] = [
  { label: "GitHub", href: "https://github.com/cscendaya" },
  { label: "LinkedIn", href: "https://linkedin.com/in/carlie-shaye-endaya" },
  { label: "Email", href: "mailto:carlieendaya@gmail.com" },
];
