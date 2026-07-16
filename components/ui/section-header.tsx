import type { ReactNode } from "react";

/**
 * Shared section introduction. `id` names the section landmark it heads, so the
 * heading and the surrounding Section stay tied together for screen readers.
 */
interface SectionHeaderProps {
  id: string;
  title: string;
  description?: string;
  /** Supporting action; kept visually subordinate to the section heading. */
  action?: ReactNode;
}

export function SectionHeader({
  id,
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-(--container-prose)">
        <h2
          id={id}
          className="text-xl font-semibold tracking-tight text-text-primary md:text-2xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-2 text-base text-text-secondary">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
