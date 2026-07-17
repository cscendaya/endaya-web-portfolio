import { ProjectScreenshot } from "@/components/projects/project-screenshot";
import { TechnologyBadge } from "@/components/projects/technology-badge";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "@/components/ui/external-link";
import {
  PROJECT_LABELS,
  PROJECT_STATUS_LABELS,
} from "@/lib/constants/projects";
import type { Project } from "@/types";

/**
 * One project, presented the same way every time: what it is, then purpose,
 * then engineering contribution, then the technologies behind it. A static card
 * — the whole record is readable in place, so nothing here navigates except the
 * approved external resources, and the card itself is never a link. Links sit
 * at the foot so they align across a row whatever the length of the prose.
 */
export function ProjectCard({
  slug,
  title,
  summary,
  contribution,
  technologies,
  category,
  status,
  featured,
  repository,
  demo,
  screenshot,
}: Project) {
  const titleId = `${slug}-title`;
  const contributionId = `${slug}-contribution`;
  const technologiesId = `${slug}-technologies`;

  return (
    <Card className="flex h-full w-full flex-col gap-5">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{category}</Badge>
          {status ? <Badge>{PROJECT_STATUS_LABELS[status]}</Badge> : null}
          {featured ? (
            <Badge variant="accent">{PROJECT_LABELS.featured}</Badge>
          ) : null}
        </div>
        <h3
          id={titleId}
          className="mt-3 text-lg font-semibold text-text-primary"
        >
          {title}
        </h3>
        <p className="mt-2 max-w-(--container-prose) text-base text-text-secondary">
          {summary}
        </p>
      </div>

      {screenshot ? <ProjectScreenshot {...screenshot} /> : null}

      <div>
        <h4
          id={contributionId}
          className="text-sm font-semibold text-text-primary"
        >
          {PROJECT_LABELS.contribution}
        </h4>
        <p className="mt-2 max-w-(--container-prose) text-base text-text-secondary">
          {contribution}
        </p>
      </div>

      <div>
        <h4
          id={technologiesId}
          className="text-sm font-semibold text-text-primary"
        >
          {PROJECT_LABELS.technologies}
        </h4>
        <ul
          aria-labelledby={technologiesId}
          className="mt-2 flex flex-wrap gap-2"
        >
          {technologies.map((technology) => (
            <li key={technology}>
              <TechnologyBadge name={technology} />
            </li>
          ))}
        </ul>
      </div>

      {repository || demo ? (
        <ul className="mt-auto flex flex-wrap gap-x-6 gap-y-2">
          {repository ? (
            <li>
              <ExternalLink href={repository.href}>
                {repository.label}
              </ExternalLink>
            </li>
          ) : null}
          {demo ? (
            <li>
              <ExternalLink href={demo.href}>{demo.label}</ExternalLink>
            </li>
          ) : null}
        </ul>
      ) : null}
    </Card>
  );
}
