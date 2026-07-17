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
      body: "I'm Carlie Shaye C. Endaya, an Information Technology student specializing in cybersecurity. What pulled me into technology was wanting to know how things actually work underneath — not just that a request returns data, but what happens between the two. That curiosity is what this portfolio presents: secure, maintainable, data-driven systems, built mostly from the backend out.",
    },
    {
      heading: "Professional background",
      body: "My work so far has been academic, and it has been real engineering. I led a Wi-Fi security assessment platform that uses a Raspberry Pi as its probe, owning the backend, the frontend, the database architecture, and the integration between them. On other projects I built REST services with PHP and PDO, and object-oriented game systems in C#. Cybersecurity is my specialization, and it shapes how I write backend code even when security is not the point of the project.",
    },
    {
      heading: "Engineering philosophy",
      body: "I believe good software is simple, secure, maintainable, and well documented. I try to understand a system as a whole before optimizing any individual part of it, because most of the expensive mistakes I've seen come from fixing a component without understanding what it sits inside. Documentation is part of the work rather than an afterthought — code that nobody can pick up is code that quietly dies.",
    },
    {
      heading: "Career objectives",
      body: "I'm looking for work in backend development, cybersecurity, data engineering, and systems engineering, and I'm continuing to build toward scalable systems. Systems thinking is my strength; troubleshooting and analytical problem-solving are what I'm deliberately sharpening, by taking on projects that are harder than the last one.",
    },
  ],
} as const;

export const ABOUT_EDUCATION = {
  title: "Education",
  description: "Where the formal side of my background comes from.",
  entries: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Specialization in Cybersecurity",
      year: "2022 — 2026",
      description:
        "Coursework and capstone work in security assessment, backend development, and relational database design. The projects in this portfolio come out of this programme.",
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
      organization: "Faculty Recitation Management App — academic project",
      duration: "Academic project",
      summary:
        "Built the RESTful APIs and backend services, designed normalized database structures, and implemented CRUD operations, pagination, and secure server-side logic in PHP with PDO.",
    },
    {
      role: "Backend Developer",
      organization: "Bagsik ng Malayan — academic project",
      duration: "Academic project",
      summary:
        "Built the game logic and object-oriented systems for a terminal-based C# game, focusing on gameplay mechanics and modular, maintainable structure.",
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
  body: "I spend most of my time on the backend — REST services, server-side logic, and relational database design — and I'm comfortable enough on the frontend to carry a full-stack project on my own. Security work and Raspberry Pi integration sit alongside that rather than apart from it. I pick tools for what a project needs and how easily the next person can maintain the result, not for novelty. The complete list is on the Skills page.",
  action: { label: "View all skills", href: "/skills" },
} as const;

export const ABOUT_CTA = {
  title: "See the work",
  description:
    "The projects below are where this background actually shows up.",
  action: { label: "View projects", href: "/projects" },
} as const;
