interface PageHeaderProps {
  title: string;
  description?: string;
}

/** Shared page introduction: identical structure, page-specific content. */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="max-w-(--container-prose)">
      <h1 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-base text-text-secondary">{description}</p>
      ) : null}
    </div>
  );
}
