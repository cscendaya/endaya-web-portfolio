import { Briefcase, GitBranch, Mail } from "lucide-react";

import type { AvailabilityItem, ContactMethod } from "@/types";

/**
 * Contact page copy and contact records. No contact detail is invented here: the
 * approved channels are fixed by FR-CONTACT-001/002/003. The email destination
 * stays unset until the real address is supplied during the content phase, the
 * same way the footer profiles do. The page reads entirely from this file, so
 * nothing about the UI changes when the real destinations arrive.
 */
export const CONTACT_HEADER = {
  title: "Contact",
  description:
    "[Short introductory description — one or two sentences framing how to reach the author and what kind of message is welcome.]",
} as const;

export const CONTACT_INTRODUCTION = {
  title: "Get in touch",
  description:
    "[Supporting description — one sentence framing the channels below.]",
  body: "[Introduction copy — two or three sentences encouraging professional communication, stating that messages are read directly and that every channel below reaches the author.]",
} as const;

export const CONTACT_METHODS_SECTION = {
  title: "Ways to reach me",
  description:
    "[Supporting description — one sentence framing the approved communication channels.]",
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
      "[Supporting description — one sentence saying what email is best used for.]",
    linkLabel: "[Email address placeholder]",
    href: "#",
    external: false,
  },
  {
    id: "github",
    title: "GitHub",
    // Lucide no longer ships brand marks, so each profile takes the icon that
    // describes what it holds. Decorative either way: the title names the channel.
    icon: GitBranch,
    description:
      "[Supporting description — one sentence saying what the GitHub profile shows.]",
    linkLabel: "Open GitHub profile",
    href: "https://github.com/cscendaya",
    external: true,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: Briefcase,
    description:
      "[Supporting description — one sentence saying what the LinkedIn profile shows.]",
    linkLabel: "Open LinkedIn profile",
    href: "https://www.linkedin.com/in/carlie-shaye-endaya",
    external: true,
  },
];

export const AVAILABILITY_SECTION = {
  title: "Availability",
  description:
    "[Supporting description — one sentence framing the kinds of work currently of interest.]",
  emptyState:
    "Availability details have not been added yet. Current openness to opportunities, collaboration, freelance, and employment will be presented here.",
} as const;

/**
 * Placeholder framing only. Each entry names a kind of work the author may be
 * open to; the descriptions are supplied during the content phase rather than
 * asserted here, since availability is a claim only the author can make.
 */
export const AVAILABILITY_ITEMS: AvailabilityItem[] = [
  {
    id: "opportunities",
    title: "Opportunities",
    description:
      "[Availability copy — one sentence stating current openness to new opportunities.]",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "[Availability copy — one sentence stating current openness to collaboration on projects.]",
  },
  {
    id: "freelance",
    title: "Freelance",
    description:
      "[Availability copy — one sentence stating current openness to freelance work.]",
  },
  {
    id: "employment",
    title: "Employment",
    description:
      "[Availability copy — one sentence stating current openness to employment.]",
  },
];

/**
 * The closing action points back to the methods above rather than to a single
 * channel, so the page reinforces contact without preferring a destination that
 * has not been provided yet.
 */
export const CONTACT_CTA = {
  title: "[Closing title — a short line reinforcing professional contact.]",
  description:
    "[Supporting description — one sentence encouraging visitors to reach out.]",
  action: { label: "View ways to reach me", href: "#contact-methods" },
} as const;
