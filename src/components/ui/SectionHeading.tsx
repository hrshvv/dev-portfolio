interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-2">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
