import { Card } from "@/components/ui/card";

interface EmptyStateProps {
  /** States what is absent and when it will appear. Never apologetic copy. */
  message: string;
}

/**
 * Stands in for a section whose approved content does not exist yet. Shared so
 * the Home preview and the Projects listing describe the same absence the same
 * way, and so neither is tempted to fill the space with invented work.
 */
export function EmptyState({ message }: EmptyStateProps) {
  return (
    <Card>
      <p className="max-w-(--container-prose) text-base text-text-secondary">
        {message}
      </p>
    </Card>
  );
}
