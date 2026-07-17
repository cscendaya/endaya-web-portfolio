import { Button } from "@/components/ui/button";
import type { ButtonVariant } from "@/components/ui/button";
import { RESUME } from "@/lib/constants/resume";

interface ResumeDownloadProps {
  variant?: ButtonVariant;
  className?: string;
  /** Overrides the default visible label where a shorter one reads better. */
  label?: string;
}

/**
 * The résumé download, wherever it is offered. It exists so the file, the saved
 * name, and the accessible name are stated once and stay identical across the
 * hero and the footer; only the presentation is passed in. The global navigation
 * reaches the same file through NAV_ITEMS, so its entry keeps the ordering and
 * active-state handling every other destination has.
 */
export function ResumeDownload({
  variant = "secondary",
  className,
  label = RESUME.label,
}: ResumeDownloadProps) {
  return (
    <Button
      href={RESUME.href}
      download={RESUME.fileName}
      aria-label={RESUME.ariaLabel}
      variant={variant}
      className={className}
    >
      {label}
    </Button>
  );
}
