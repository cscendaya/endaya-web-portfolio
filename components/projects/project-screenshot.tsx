import Image from "next/image";

import { cn } from "@/lib/utils";
import type { ProjectScreenshotAsset } from "@/types";

/**
 * Authentic project imagery. Rendered only when an approved asset exists — no
 * placeholder frame stands in for one, since an invented visual would misstate
 * the work. Lazily loaded, as screenshots sit below the fold of the listing.
 *
 * The intrinsic dimensions set next/image's aspect ratio (so the space is
 * reserved and nothing shifts) and decide the layout: a landscape capture fills
 * the card width; a portrait phone capture is capped in height (max-h-[28rem],
 * within the design system's vertical rhythm) and centred, so a tall screen
 * grab no longer dominates the card and pushes content below the fold. Width
 * follows the aspect either way — the image is never distorted.
 */
export function ProjectScreenshot({
  src,
  alt,
  width,
  height,
}: ProjectScreenshotAsset) {
  const isPortrait = height > width;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={isPortrait ? "240px" : "(min-width: 48rem) 42rem, 100vw"}
      className={cn(
        "rounded-(--radius-token-md) border border-border-subtle",
        isPortrait
          ? "mx-auto h-auto max-h-[28rem] w-auto max-w-full"
          : "h-auto w-full",
      )}
    />
  );
}
