import { RESUME } from "@/lib/constants/resume";
import type { NavItem } from "@/types";

/** NAV-002/NAV-004: approved Version 1 pages, in fixed order. */
export const PAGE_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

/** The résumé as a navigation destination, rather than as a download. */
const RESUME_NAV_ITEM: NavItem = {
  label: RESUME.navLabel,
  href: RESUME.href,
  download: RESUME.fileName,
  ariaLabel: RESUME.ariaLabel,
};

/**
 * The global navigation: the approved pages, with Résumé before Contact. Résumé
 * belongs in this list rather than beside it — it is a destination visitors look
 * for in the navigation, and routing it through here gives the desktop and
 * mobile navigations the same entry, in the same position, without either one
 * learning that a download exists. The footer navigation lists pages only, so it
 * uses PAGE_NAV_ITEMS instead.
 */
export const NAV_ITEMS: NavItem[] = [
  ...PAGE_NAV_ITEMS.slice(0, -1),
  RESUME_NAV_ITEM,
  PAGE_NAV_ITEMS[PAGE_NAV_ITEMS.length - 1],
];
