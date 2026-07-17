export const SITE_NAME = "Carlie Shaye C. Endaya";

export const SITE_TITLE =
  "Carlie Shaye C. Endaya — IT Student specializing in Cybersecurity";

export const SITE_DESCRIPTION =
  "Portfolio of Carlie Shaye C. Endaya, an IT student specializing in cybersecurity who builds secure, maintainable, data-driven software systems across backend development, security assessment, and systems engineering.";

/** Natural-language terms the portfolio is actually about; no keyword stuffing. */
export const SITE_KEYWORDS = [
  "Carlie Shaye C. Endaya",
  "IT student",
  "cybersecurity",
  "backend development",
  "systems engineering",
  "data engineering",
  "REST API",
  "PHP",
  "C#",
  "Raspberry Pi",
  "Wi-Fi security assessment",
  "software portfolio",
];

/** Set to the production origin before deployment; used for metadata resolution. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Served from /public; the download action links to it directly. */
export const RESUME = {
  href: "/Carlie_Endaya_CV.pdf",
  fileName: "Carlie_Endaya_CV.pdf",
} as const;
