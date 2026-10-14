import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TypographicCard } from "@/components/typographic-card";
import { dishHref, findDish, formatPrice } from "@/lib/menu";
import { photos, type Photo } from "@/lib/photos";

const signatures: { name: string; tag: string; photo?: Photo }[] = [
  { name: "Kerala Style Chicken Biryani", tag: "Bestseller", photo: photos.biryani },
  { name: "Coconut Fish Curry", tag: "Seafood" },
  { name: "Prawns Ghee Roast", tag: "Seafood" },
  { name: "Naadan Chicken Curry", tag: "Kerala" },
  { name: "Chicken Ghee Roast", tag: "Chef's pick" },
];

/** 07 Signature dishes. Dishes without a photo yet get a typographic card. */
export function SignatureDishes() {
  return (
    <section className="lux-section bg-ivory">
      <div className="lux-container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow text-gold-ink">Must try</p>
            <h2 className="lux-h2 mt-3 text-ink">
              Our <em>signature</em> dishes
            </h2>
          </div>
          <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-gold-ink">
            View full menu
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {signatures.map((item) => {
            const dish = findDish(item.name);
            return (
              <li key={item.name}>
                <Link href={dishHref(item.name)} className="group block">
                  <div className="relative">
                    {item.photo ? (
                      <div className="lux-photo relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={item.photo.src}
                          alt={item.photo.alt}
                          fill
                          sizes="(min-width: 1024px) 250px, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        />
                      </div>
                    ) : (
                      <TypographicCard title={item.name} kicker="Kerala kitchen" tone="dark" className="aspect-[4/5]" />
                    )}
                    <span className="absolute top-3 left-3 rounded-full bg-ivory px-3 py-1 text-[0.65rem] tracking-[0.14em] text-ink uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-[0.65rem] tracking-[0.14em] text-ink-soft uppercase">Non-veg</p>
                  <div className="mt-1 grid grid-cols-[1fr_auto] items-baseline gap-3">
                    <span className="font-medium text-ink">{dish.name}</span>
                    <span className="text-gold-ink tabular-nums">{formatPrice(dish.price)}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
