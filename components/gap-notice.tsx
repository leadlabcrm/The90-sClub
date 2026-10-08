export function GapNotice({
  id,
  kicker,
  title,
  children,
}: {
  id?: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="club-card-dark scroll-mt-36 p-6 sm:p-8"
    >
      <p className="type-label text-xs text-gold">{kicker}</p>
      <h2 className="type-display mt-3 text-4xl text-cream">{title}</h2>
      <div className="mt-4 max-w-3xl space-y-3 text-base leading-relaxed text-cream/80">
        {children}
      </div>
    </section>
  );
}
