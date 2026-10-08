import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  alt: string;
}) {
  return (
    <header className="relative flex min-h-[32rem] items-end overflow-hidden bg-black text-ivory lg:min-h-[38rem]">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,9,7,.72)_0%,rgba(10,9,7,.35)_55%,rgba(10,9,7,.2)_100%),linear-gradient(to_top,rgba(10,9,7,.55),transparent_45%)]" />
      <div className="lux-container relative z-10 pb-14 pt-32 lg:pb-20">
        <p className="eyebrow text-gold-highlight">{eyebrow}</p>
        <h1 className="lux-h2 mt-4 max-w-4xl text-ivory">{title}</h1>
        <p className="prose-body mt-5 max-w-xl text-ivory/90">{lede}</p>
      </div>
    </header>
  );
}
