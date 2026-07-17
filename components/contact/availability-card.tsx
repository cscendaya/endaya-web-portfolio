import { Card } from "@/components/ui/card";
import type { AvailabilityItem } from "@/types";

/**
 * One kind of work the author may be open to. Deliberately plainer than the
 * contact card: availability is context, not a channel, so it carries no link
 * and no icon that would compete with the methods above it.
 */
export function AvailabilityCard({ title, description }: AvailabilityItem) {
  return (
    <Card className="flex h-full w-full flex-col">
      <h3 className="text-base font-semibold text-text-primary">{title}</h3>
      <p className="mt-1 max-w-(--container-prose) text-base text-text-secondary">
        {description}
      </p>
    </Card>
  );
}
