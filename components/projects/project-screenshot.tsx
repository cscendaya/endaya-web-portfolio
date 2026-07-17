import Image from "next/image";

import type { ProjectScreenshotAsset } from "@/types";

/**
 * Authentic project imagery. Rendered only when an approved asset exists — no
 * placeholder frame stands in for one, since an invented visual would misstate
 * the work. Sized to the container and lazily loaded, as screenshots sit below
 * the fold of the listing.
 */
export function ProjectScreenshot({ src, alt }: ProjectScreenshotAsset) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1280}
      height={720}
      sizes="(min-width: 48rem) 42rem, 100vw"
      className="h-auto w-full rounded-(--radius-token-md) border border-border-subtle"
    />
  );
}
