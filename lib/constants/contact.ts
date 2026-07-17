import { Briefcase, GitBranch, Mail } from "lucide-react";

import type { AvailabilityItem, ContactMethod } from "@/types";

/** The approved destinations, shared with the footer so the two cannot drift. */
export const CONTACT_EMAIL = "carlieendaya@gmail.com";
export const GITHUB_URL = "https://github.com/cscendaya";
export const LINKEDIN_URL = "https://www.linkedin.com/in/carlie-shaye-endaya";

/**
 * Contact page copy and contact records. The page reads entirely from this file,
 * so a changed destination is a one-line edit here.
 */
export const CONTACT_HEADER = {
  title: "Contact",
  description:
    "Open to internship opportunities, collaborations, and backend, cybersecurity, or software engineering projects. Every channel below reaches me directly.",
} as const;

export const CONTACT_INTRODUCTION = {
  title: "Get in touch",
  description: "Where to start, depending on what you need.",
  body: "If you're hiring for backend, cybersecurity, data, or systems work — or you want to build something together — I'd like to hear about it. Email is the most direct route and I read every message myself. GitHub and LinkedIn work just as well if you'd rather look at the work or the background first.",
} as const;

export const CONTACT_METHODS_SECTION = {
  title: "Ways to reach me",
  description: "Three channels, all monitored.",
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
      "Best for opportunities, project enquiries, and anything that needs a real reply.",
    linkLabel: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    id: "github",
    title: "GitHub",
    // Lucide no longer ships brand marks, so each profile takes the icon that
    // describes what it holds. Decorative either way: the title names the channel.
    icon: GitBranch,
    description:
      "Source code for my projects, including this portfolio, and what I'm currently building.",
    linkLabel: "Open GitHub profile",
    href: GITHUB_URL,
    external: true,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: Briefcase,
    description:
      "Academic background, specialization, and the professional side of my work.",
    linkLabel: "Open LinkedIn profile",
    href: LINKEDIN_URL,
    external: true,
  },
];

export const AVAILABILITY_SECTION = {
  title: "Availability",
  description: "What I'm currently open to.",
  emptyState:
    "Availability details have not been added yet. Current openness to opportunities, collaboration, freelance, and employment will be presented here.",
} as const;

/** Each entry states an openness the author has confirmed; nothing is implied. */
export const AVAILABILITY_ITEMS: AvailabilityItem[] = [
  {
    id: "opportunities",
    title: "Opportunities",
    description:
      "Open to internships and entry-level roles in backend development, cybersecurity, data engineering, and systems engineering.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "Open to collaborating on projects where I can contribute backend, security, or database work.",
  },
  {
    id: "freelance",
    title: "Freelance",
    description:
      "Open to small freelance work that fits alongside my studies — happy to discuss scope first.",
  },
  {
    id: "employment",
    title: "Employment",
    description:
      "Open to conversations about roles starting after I complete my degree.",
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
