export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl text-secondary md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground">{description}</p>
      )}
      <div className={`mt-4 h-[2px] w-20 bg-temple-gradient ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
