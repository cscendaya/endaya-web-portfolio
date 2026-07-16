import { NavLink } from "@/components/layout/nav-link";
import { NAV_ITEMS } from "@/lib/constants/navigation";

/**
 * Desktop global navigation. Flat list of the approved Version 1 destinations —
 * no dropdowns, no nested navigation. Replaced by MobileNav below the md
 * breakpoint, with identical destinations and labels.
 */
export function MainNav() {
  return (
    <nav aria-label="Primary" className="hidden md:block">
      <ul className="flex items-center gap-x-6">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <NavLink
              href={item.href}
              label={item.label}
              className="px-1 py-2"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
