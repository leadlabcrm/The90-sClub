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
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="type-label text-xs text-blue">{eyebrow}</p>
      ) : null}
      <h2 className="type-display mt-3 text-4xl text-blue sm:text-5xl lg:text-6xl">{title}</h2>
      {lede ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/75 sm:text-lg">{lede}</p>
      ) : null}
    </div>
  );
}
