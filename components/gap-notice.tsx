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
    <section id={id} className="scroll-mt-32 border-t border-line py-12">
      <p className="eyebrow text-gold-ink">{kicker}</p>
      <h2 className="lux-h2 mt-4 text-ink">{title}</h2>
      <div className="prose-body mt-5 max-w-3xl space-y-4 text-ink-soft [&_p]:text-ink-soft">{children}</div>
    </section>
  );
}
