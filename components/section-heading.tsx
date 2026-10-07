export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
      ) : null}
      <h2 className="type-display mt-2 text-4xl text-teal sm:text-5xl">{title}</h2>
      {lede ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">{lede}</p>
      ) : null}
    </div>
  );
}
