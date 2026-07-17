import type { EducationEntry, ExperienceEntry } from "@/types";

/**
 * About page copy. No history is invented here: the education and experience
 * records state only facts the author has supplied, and the experience list is
 * academic rather than employment, because no professional roles exist yet.
 */
export const ABOUT_HEADER = {
  title: "About",
  description:
    "An IT student specializing in cybersecurity, working mostly on the server side — secure backends, database design, and the systems that hold them together.",
} as const;

export const ABOUT_PROFILE = {
  title: "Professional profile",
  description: "Who I am, how I work, and where I am heading.",
  /** Ordered narrative: who, background, how they work, where they are headed. */
  entries: [
    {
      heading: "Introduction",
      body: "I'm Carlie Shaye C. Endaya, a fourth-year BS Information Technology student specializing in cybersecurity, and a consistent Dean's Lister. What pulled me into technology was wanting to know how things actually work underneath — not that a request returns data, but what happens between the two. I would rather reason about the system behind an interface than design the interface itself.",
    },
    {
      heading: "Professional background",
      body: "My work so far has been academic. It has meant integrating APIs, databases, mobile applications, and embedded devices into systems that had to run as a whole, most of it from the backend and the architecture outward. Cybersecurity is my specialization, and it shapes how I write backend code even on projects where security is not the point.",
    },
    {
      heading: "Engineering philosophy",
      body: "I understand a problem before designing for it, and I understand a system as a whole before optimizing any part of it — most of the expensive mistakes I've seen come from fixing a component without knowing what it sits inside. Simplicity and maintainability are the goal; documentation is part of the work rather than an afterthought.",
    },
    {
      heading: "Career objectives",
      body: "I am currently building a strong foundation in backend development and cybersecurity while expanding my knowledge of distributed systems, cloud technologies, and data infrastructure. As I continue to grow professionally, I aim to specialize in Data Engineering and Systems Engineering, designing secure and scalable platforms that support real-world applications.",
    },
    {
      heading: "About this portfolio",
      body: "This site began as an academic requirement. I intend to keep it as a working record of what I build, and to let it grow with my career rather than end with the course.",
    },
  ],
} as const;

export const ABOUT_EDUCATION = {
  title: "Education",
  description: "Where the formal side of my background comes from.",
  entries: [
    {
      degree:
        "Bachelor of Science in Information Technology — Cybersecurity specialization",
      institution: "[Institution]",
      year: "2022 — 2026",
      description:
        "Fourth year, and a consistent Dean's Lister. Coursework and capstone work in security assessment, backend development, and relational database design. The projects in this portfolio come out of this programme.",
    },
  ] satisfies EducationEntry[],
} as const;

/**
 * Academic rather than employment history: no professional roles exist yet, and
 * inventing one would misrepresent the record. Each entry is a role actually
 * held on a project presented on the Projects page.
 */
export const ABOUT_EXPERIENCE = {
  title: "Academic experience",
  description:
    "Roles I held on academic software projects. I have no professional employment history yet.",
  /** Reverse-chronological, mirroring the Projects page ordering. */
  entries: [
    {
      role: "Technical Lead / Full Stack Developer",
      organization: "Wi-Fi Security Assessment Tool — academic project",
      duration: "Academic project",
      summary:
        "Led development of a web-based Wi-Fi security assessment platform using a Raspberry Pi as the hardware probe, covering backend, frontend, database architecture, and system integration.",
    },
    {
      role: "Backend Developer",
      organization: "R-EaseCite Mobile Application — academic project",
      duration: "Academic project",
      summary:
        "Built the RESTful API and the relational schema behind it, and implemented secure CRUD operations, pagination, and server-side logic in PHP with PDO for an Android client.",
    },
    {
      role: "Backend Developer",
      organization: "CCIS Department Event Enlistment App — academic project",
      duration: "Academic project",
      summary:
        "Worked on the ASP.NET backend for event tracking and attendance management, in a team where coordinating the work was part of the work.",
    },
  ] satisfies ExperienceEntry[],
} as const;

/**
 * Contextual framing only. The full inventory lives on the Skills page and is
 * deliberately not duplicated here.
 */
export const ABOUT_TECHNOLOGIES = {
  title: "Technologies",
  description: "The parts of the stack I actually work in.",
  body: "I spend most of my time on the backend — REST services, server-side logic, and relational database design — and I'm comfortable enough on the frontend to carry a full-stack project on my own. Security work and embedded integration sit alongside that rather than apart from it. I pick tools for what a project needs and how easily the next person can maintain the result, not for novelty. The complete list is on the Skills page.",
  action: { label: "View all skills", href: "/skills" },
} as const;

export const ABOUT_CTA = {
  title: "See the work",
  description:
    "The projects below are where this background actually shows up.",
  action: { label: "View projects", href: "/projects" },
} as const;
