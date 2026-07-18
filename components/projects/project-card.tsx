import { ProjectScreenshot } from "@/components/projects/project-screenshot";
import { TechnologyBadge } from "@/components/projects/technology-badge";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "@/components/ui/external-link";
import {
  PROJECT_LABELS,
  PROJECT_STATUS_LABELS,
} from "@/lib/constants/projects";
import type { Project, TechnologyGroup } from "@/types";

/**
 * Labelled chip subgroups: an h5 heading over the shared TechnologyBadge list,
 * repeated per group. Composition of existing primitives — not a new component
 * pattern — so the heading order stays h3 (title) → h4 (section) → h5 (group).
 */
function ChipGroups({
  groups,
  baseId,
}: {
  groups: TechnologyGroup[];
  baseId: string;
}) {
  return (
    <div className="mt-3 flex flex-col gap-4">
      {groups.map((group) => {
        const groupId = `${baseId}-${group.label.toLowerCase().replace(/\s+/g, "-")}`;
        return (
          <div key={group.label}>
            <h5
              id={groupId}
              className="text-xs font-semibold tracking-wide text-text-secondary uppercase"
            >
              {group.label}
            </h5>
            <ul
              aria-labelledby={groupId}
              className="mt-2 flex flex-wrap gap-2"
            >
              {group.items.map((item) => (
                <li key={item}>
                  <TechnologyBadge name={item} />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

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
  features,
  contribution,
  technologies,
  softwareGroups,
  hardware,
  category,
  status,
  year,
  academicYear,
  featured,
  repository,
  demo,
  screenshots,
}: Project) {
  const titleId = `${slug}-title`;
  const featuresId = `${slug}-features`;
  const contributionId = `${slug}-contribution`;
  const technologiesId = `${slug}-technologies`;
  const hardwareId = `${slug}-hardware`;

  return (
    <Card className="flex h-full w-full flex-col gap-5">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{category}</Badge>
          {academicYear ? (
            <Badge>{year ? `${academicYear} · ${year}` : academicYear}</Badge>
          ) : null}
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

      {features && features.length > 0 ? (
        <div>
          <h4
            id={featuresId}
            className="text-sm font-semibold text-text-primary"
          >
            {PROJECT_LABELS.features}
          </h4>
          <ul
            aria-labelledby={featuresId}
            className="mt-2 flex max-w-(--container-prose) list-disc flex-col gap-1.5 pl-5 text-base text-text-secondary"
          >
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {screenshots && screenshots.length > 0 ? (
        <div
          className={
            screenshots.length > 1
              ? "grid items-start gap-3 sm:grid-cols-2"
              : undefined
          }
        >
          {screenshots.map((shot) => (
            <ProjectScreenshot key={shot.src} {...shot} />
          ))}
        </div>
      ) : null}

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
          {hardware ? PROJECT_LABELS.software : PROJECT_LABELS.technologies}
        </h4>
        {softwareGroups && softwareGroups.length > 0 ? (
          <ChipGroups groups={softwareGroups} baseId={technologiesId} />
        ) : (
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
        )}
      </div>

      {hardware && hardware.length > 0 ? (
        <div>
          <h4
            id={hardwareId}
            className="text-sm font-semibold text-text-primary"
          >
            {PROJECT_LABELS.hardware}
          </h4>
          {/* Flat chip list, not subgroups: seven items across five roles is
              more heading than content. Software Used keeps its subgroups
              because they carry the probe-vs-web-tier boundary the contribution
              prose describes; hardware has no such split to preserve. */}
          <ul
            aria-labelledby={hardwareId}
            className="mt-2 flex flex-wrap gap-2"
          >
            {hardware.map((item) => (
              <li key={item}>
                <TechnologyBadge name={item} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}

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
