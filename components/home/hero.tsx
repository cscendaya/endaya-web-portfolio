import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { ResumeDownload } from "@/components/ui/resume-download";
import { HOME_HERO } from "@/lib/constants/home";

/**
 * Home introduction: professional identity first, then the two approved next
 * steps — see the work, or take the résumé away. Composed from Page Header and
 * Button.
 */
export function Hero() {
  return (
    <Section id="hero">
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
    </Section>
  );
}
