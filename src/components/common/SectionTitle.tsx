interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({
  badge,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-16">
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg text-body">
          {subtitle}
        </p>
      )}
    </div>
  );
}