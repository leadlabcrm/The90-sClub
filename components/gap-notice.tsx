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
      className="scroll-mt-36 rounded-2xl border-2 border-dashed border-teal bg-paper p-5 sm:p-7"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">{kicker}</p>
      <h2 className="type-display mt-2 text-4xl text-teal">{title}</h2>
      <div className="mt-3 max-w-2xl space-y-3 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
