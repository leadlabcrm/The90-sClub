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
    <header className="sunburst relative overflow-hidden border-b-2 border-charcoal bg-blue text-cream">
      <div className="ink-grid absolute inset-0 opacity-40" />
      <div className="absolute -right-8 -top-6 hidden rotate-6 opacity-15 sm:block">
        <BrandLogo compact inverse className="w-44" />
      </div>
      <div className="relative mx-auto w-full max-w-[1220px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="type-label text-xs text-gold">{eyebrow}</p>
        <h1 className="type-display mt-4 max-w-5xl text-5xl text-cream sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 sm:text-xl">{lede}</p>
      </div>
    </header>
  );
}
