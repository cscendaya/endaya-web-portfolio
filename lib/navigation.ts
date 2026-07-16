/**
 * Shared active-page rule so every navigation surface resolves the active item
 * identically (NAV-003). Nested routes mark their top-level section active.
 */
export function isNavItemActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
