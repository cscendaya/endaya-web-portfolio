import { ProjectScreenshot } from "@/components/projects/project-screenshot";
import { TechnologyBadge } from "@/components/projects/technology-badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "@/components/ui/external-link";
import { PROJECT_LABELS } from "@/lib/constants/projects";
import type { Project } from "@/types";

/**
 * One project, presented the same way every time: purpose, then engineering
 * contribution, then the technologies behind it. A static card — the whole
 * record is readable in place, so nothing here navigates except the approved
 * external resources, and the card itself is never a link.
 */
export function ProjectCard({
  slug,
  title,
  summary,
  contribution,
  technologies,
  repository,
  demo,
  screenshot,
}: Project) {
  const titleId = `${slug}-title`;
  const contributionId = `${slug}-contribution`;
  const technologiesId = `${slug}-technologies`;

  return (
    <Card className="flex flex-col gap-5">
      <div>
        <h3 id={titleId} className="text-lg font-semibold text-text-primary">
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
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
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
