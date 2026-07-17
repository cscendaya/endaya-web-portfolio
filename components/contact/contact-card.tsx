import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "@/components/ui/external-link";
import type { ContactMethod } from "@/types";

/**
 * One communication channel: its name, what it is for, and the link that reaches
 * it. Every method is rendered through this card, so email and the professional
 * profiles are presented identically (FR-CONTACT-004) and no channel is given
 * more visual weight than another.
 *
 * External destinations use the shared External Link, which marks the departure;
 * anything that stays within the portfolio uses the text button instead, so the
 * page never claims a new tab it does not open.
 */
export function ContactCard({
  id,
  title,
  icon: Icon,
  description,
  linkLabel,
  href,
  external,
}: ContactMethod) {
  const headingId = `contact-method-${id}-heading`;

  return (
    <Card className="flex h-full w-full flex-col">
      <div className="flex items-center gap-2">
        <Icon
          aria-hidden="true"
          className="size-4 shrink-0 text-text-secondary"
        />
        <h3
          id={headingId}
          className="text-base font-semibold text-text-primary"
        >
          {title}
        </h3>
      </div>
      <p className="mt-1 max-w-(--container-prose) text-base text-text-secondary">
        {description}
      </p>
      <div className="mt-4">
        {external ? (
          <ExternalLink href={href}>{linkLabel}</ExternalLink>
        ) : (
          <Button href={href} variant="text">
            {linkLabel}
          </Button>
        )}
      </div>
    </Card>
  );
}
