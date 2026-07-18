import { Briefcase, GitBranch, Mail } from "lucide-react";

import type { AvailabilityItem, ContactMethod } from "@/types";

/** The approved destinations, shared with the footer so the two cannot drift. */
export const CONTACT_EMAIL = "carlieendaya@gmail.com";
export const GITHUB_URL = "https://github.com/cscendaya";
export const LINKEDIN_URL = "https://www.linkedin.com/in/carlie-shaye-endaya";

/**
 * Contact page copy and contact records. Destinations are sourced from the
 * author's CV. The approved channels are fixed by FR-CONTACT-001/002/003.
 */
export const CONTACT_HEADER = {
  title: "Contact",
  description:
    "The ways to reach me directly. Technical questions, opportunities, and collaboration are all welcome.",
} as const;

export const CONTACT_INTRODUCTION = {
  title: "Get in touch",
  description: "Every channel below reaches me directly.",
  body: "I read and reply to messages myself — there is no form or intermediary between the channels below and my inbox. If you are reviewing my work for a role, email is the most reliable way to start, and I am happy to walk through the architecture or the decisions behind any project in this portfolio. For code, GitHub is the better starting point.",
} as const;

export const CONTACT_METHODS_SECTION = {
  title: "Ways to reach me",
  description: "Three channels, in the order I check them.",
  /** Rendered when CONTACT_METHODS is empty; matches the other page sections. */
  emptyState:
    "Contact methods have not been added yet. Approved communication channels will be presented here using the shared contact card.",
} as const;

/**
 * FR-CONTACT-005: only the communication methods approved for Version 1. Order
 * is deliberate — email first, since FR-CONTACT-001 makes direct contact the
 * page's primary purpose and the profiles support it.
 */
export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: "email",
    title: "Email",
    icon: Mail,
    description:
      "Best for opportunities, technical questions, and anything needing a considered reply.",
    linkLabel: "carlieendaya@gmail.com",
    href: "mailto:carlieendaya@gmail.com",
    external: false,
  },
  {
    id: "github",
    title: "GitHub",
    // Lucide no longer ships brand marks, so each profile takes the icon that
    // describes what it holds. Decorative either way: the title names the channel.
    icon: GitBranch,
    description:
      "Source for the backend and integration work presented in this portfolio.",
    linkLabel: "Open GitHub profile",
    href: "https://github.com/cscendaya",
    external: true,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: Briefcase,
    description:
      "Professional background, education, and internship experience in full.",
    linkLabel: "Open LinkedIn profile",
    href: "https://linkedin.com/in/carlie-shaye-endaya",
    external: true,
  },
];

export const AVAILABILITY_SECTION = {
  title: "Availability",
  description: "What I am currently open to.",
  emptyState:
    "Availability details have not been added yet. Current openness to opportunities, collaboration, freelance, and employment will be presented here.",
} as const;

export const AVAILABILITY_ITEMS: AvailabilityItem[] = [
  {
    id: "opportunities",
    title: "Internships",
    description:
      "Open to backend, systems, data, and security engineering opportunities.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "Open to collaborating on backend, systems integration, and security-focused projects.",
  },
  {
    id: "freelance",
    title: "Freelance",
    description:
      "Considering freelance backend and integration work alongside my studies.",
  },
  {
    id: "engineering-discussions",
    title: "Engineering discussions",
    description:
      "Happy to talk about backend development, cybersecurity, and systems engineering — including the decisions behind the projects here.",
  },
];

/**
 * The closing action points back to the methods above rather than to a single
 * channel, so the page reinforces contact without preferring one destination.
 */
export const CONTACT_CTA = {
  title: "Let's talk",
  description:
    "A short message is enough to start — tell me what you're working on and I'll reply.",
  action: { label: "View ways to reach me", href: "#contact-methods" },
} as const;
