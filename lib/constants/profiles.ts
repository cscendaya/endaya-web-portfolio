import type { ExternalProfile } from "@/types";

/**
 * Footer contact links. The Email destination stays unset until the approved
 * address is supplied during the content phase.
 */
export const EXTERNAL_PROFILES: ExternalProfile[] = [
  { label: "GitHub", href: "https://github.com/cscendaya" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carlie-shaye-endaya" },
  { label: "Email", href: "#" },
];
