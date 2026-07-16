import { Card } from "@/components/ui/card";

interface DetailCardProps {
  /** Primary label for the record: the degree, the role. Rendered as an h3. */
  title: string;
  /** The body the record belongs to: the institution, the organization. */
  subtitle: string;
  /** Time span. Kept visually subordinate and read after the subtitle. */
  meta: string;
  description?: string;
}

/**
 * One dated record: what, where, when, and an optional summary. Education and
 * experience entries are the same shape, so they share this presentation rather
 * than each restating the layout.
 */
export function DetailCard({
  title,
  subtitle,
  meta,
  description,
}: DetailCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="text-base font-semibold text-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary sm:shrink-0">{meta}</p>
      </div>
      <p className="mt-1 text-base text-text-secondary">{subtitle}</p>
      {description ? (
        <p className="mt-3 max-w-(--container-prose) text-base text-text-secondary">
          {description}
        </p>
      ) : null}
    </Card>
  );
}
