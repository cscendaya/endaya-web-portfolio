import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { ResumeDownload } from "@/components/ui/resume-download";
import { HOME_HERO } from "@/lib/constants/home";

/**
 * Home introduction: professional identity first, then the two approved next
 * steps — see the work, or take the résumé away. Composed from Page Header,
 * Button, and the profile image placeholder.
 */
export function Hero() {
  return (
    <Section id="hero">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="max-w-(--container-prose)">
          <PageHeader title={HOME_HERO.name} description={HOME_HERO.role} />
          <p className="mt-6 text-base text-text-secondary">
            {HOME_HERO.introduction}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={HOME_HERO.primaryAction.href}>
              {HOME_HERO.primaryAction.label}
            </Button>
            <ResumeDownload variant="secondary" />
          </div>
        </div>
        {/*
          Placeholder frame for the profile image. It carries no information, so
          it stays out of the accessibility tree; `next/image` replaces it once
          the approved photograph exists.
        */}
        <div
          aria-hidden="true"
          className="flex aspect-square w-40 shrink-0 items-center justify-center rounded-(--radius-token-lg) border border-border-subtle bg-surface text-center text-sm text-text-secondary md:w-56"
        >
          Profile image placeholder
        </div>
      </div>
    </Section>
  );
}
