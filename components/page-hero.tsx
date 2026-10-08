import { BrandLogo } from "@/components/brand-logo";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="sunburst relative overflow-hidden border-b-2 border-gold-shadow bg-charcoal text-ivory">
      <div className="ink-grid absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-4 top-8 hidden opacity-30 sm:block">
        <BrandLogo variant="metallic" className="h-56 lg:h-72" />
      </div>
      <div className="relative mx-auto w-full max-w-[1220px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="type-label text-xs text-gold-highlight">{eyebrow}</p>
        <h1 className="type-display mt-4 max-w-5xl text-5xl text-ivory sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/85 sm:text-xl">{lede}</p>
      </div>
    </header>
  );
}
