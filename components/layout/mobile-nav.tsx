"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import { NavLink } from "@/components/layout/nav-link";
import { NAV_ITEMS } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

/** Matches --breakpoint-md, so the panel closes exactly when MainNav takes over. */
const DESKTOP_QUERY = "(min-width: 48rem)";

/**
 * Mobile global navigation. Same destinations and labels as MainNav; only the
 * presentation adapts. Client component because the disclosure needs local
 * state, focus management, and document-level listeners.
 */
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeAndRestoreFocus = useCallback(() => {
    setIsOpen(false);
    toggleRef.current?.focus();
  }, []);

  // A completed navigation always leaves the menu closed, including history
  // moves that no link click can observe. Adjusted during render rather than in
  // an effect so no open panel is ever committed for the new route.
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setIsOpen(false);
  }

  // Move focus into the panel on open; the toggle regains focus on close.
  useEffect(() => {
    if (!isOpen) return;
    panelRef.current?.querySelector("a")?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closeAndRestoreFocus();
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    // Without this the body would stay locked when the panel is hidden by the
    // md breakpoint while open.
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    desktop.addEventListener("change", handleBreakpointChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      desktop.removeEventListener("change", handleBreakpointChange);
    };
  }, [isOpen, closeAndRestoreFocus]);

  /** Keeps Tab cycling between the toggle and the open panel's links. */
  const handleTabKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen || event.key !== "Tab") return;

    const focusable: HTMLElement[] = [];
    if (toggleRef.current) focusable.push(toggleRef.current);
    if (panelRef.current) {
      focusable.push(
        ...panelRef.current.querySelectorAll<HTMLAnchorElement>("a"),
      );
    }
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div ref={rootRef} className="md:hidden" onKeyDown={handleTabKey}>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? "Close main menu" : "Open main menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center rounded-(--radius-token-sm) p-2 text-text-secondary transition-colors hover:text-text-primary"
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      {/* Kept mounted so open and close both transition; `invisible` also removes
          the closed links from the tab order. */}
      <div
        id={panelId}
        ref={panelRef}
        className={cn(
          "absolute inset-x-0 top-full border-b border-border-subtle bg-background shadow-(--shadow-token-md)",
          "transition duration-200 ease-out",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col px-6 py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  onNavigate={() => setIsOpen(false)}
                  className="block py-3"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
