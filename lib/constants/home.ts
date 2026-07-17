/**
 * Home page copy. Sourced from the author's CV, the Datamatics narrative report,
 * and the Mapúa Malayan Colleges Laguna training plan. Claims are limited to what
 * those documents support: exposure and contribution are stated as they occurred,
 * without upgrading assistance into ownership.
 */
export const HOME_HERO = {
  name: "Carlie Shaye C. Endaya",
  role: "IT Student specializing in Cybersecurity | Backend & Systems Engineering",
  introduction:
    "I build server-side systems — REST APIs, normalized schemas, and the middleware that connects mobile, IoT, and hardware clients to backend services. My capstone is a Raspberry Pi-based Wi-Fi security assessment platform, and an Information Security internship at Datamatics Philippines gave me enterprise exposure to SIEM monitoring, vulnerability management, and ISO 27001 compliance work.",
  primaryAction: { label: "View projects", href: "/projects" },
  secondaryAction: { label: "Get in touch", href: "/contact" },
} as const;

export const HOME_SUMMARY = {
  title: "Professional summary",
  description:
    "A backend-first engineering profile, developed across academic systems work and an enterprise information security internship.",
  points: [
    "Backend-focused IT student specializing in Cybersecurity at Mapúa Malayan Colleges Laguna, working primarily in API design, middleware, and server-side architecture.",
    "Builds RESTful backends with front-controller routing and PDO-based data access layers, backed by normalized schemas with secure CRUD operations.",
    "Integrates systems across boundaries — Raspberry Pi probes, Wemos D1 and Arduino sensors, and Android clients all wired to backend services over HTTP.",
    "Applied information security in an enterprise setting at Datamatics Philippines: SIEM log review, endpoint monitoring through SentinelOne and Wazuh, vulnerability scanning with OpenVAS, and ISMS documentation against ISO 27001:2022, PCI DSS, and SOC 2 Type II.",
    "Working toward backend, systems, data, and security engineering roles, with an emphasis on designs that stay maintainable after delivery.",
  ],
} as const;

export const HOME_FEATURED_PROJECTS = {
  title: "Featured projects",
  description:
    "Selected work, led by the capstone: a Wi-Fi security assessment platform built on a Raspberry Pi probe and a secure web application.",
  /** Rendered only if no project is marked featured. */
  emptyState:
    "Featured project content has not been added yet. Approved projects will be presented here using the shared project card.",
  action: { label: "View all projects", href: "/projects" },
} as const;

export const HOME_SKILLS_PREVIEW = {
  title: "Skills",
  description:
    "Competency groups spanning backend engineering, databases, systems integration, and enterprise information security.",
  /** Rendered only if no skill category exists. */
  emptyState:
    "Skill content has not been added yet. Approved competency groups will be presented here.",
  action: { label: "View all skills", href: "/skills" },
} as const;

export const HOME_CTA = {
  title: "Get in touch",
  description:
    "Open to backend, systems, and security engineering conversations, including internships and entry-level roles.",
  action: { label: "Contact", href: "/contact" },
} as const;
