import type { ReactNode } from "react";

export function GapNotice({
  id,
  kicker,
  title,
  children,
}: {
  id?: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 border-t border-line py-10">
      <p className="eyebrow text-gold-ink">{kicker}</p>
      <h2 className="lux-h2 mt-3 text-ink">{title}</h2>
      <div className="prose-body mt-4 space-y-4 text-ink-soft [&_p]:text-ink-soft">{children}</div>
    </section>
  );
}
