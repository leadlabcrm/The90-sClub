import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { WhatsappSubscribe } from "@/components/whatsapp-subscribe";
import { stock } from "@/lib/photos";
import { whatsappHref } from "@/lib/site";

/** 14 Coming soon & updates, on the template's "Stay updated" band. */
export function ComingSoonSection() {
  return (
    <section className="bg-charcoal-2 text-ivory">
      <div className="lux-container grid gap-12 py-16 lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:py-24">
        <div className="lux-photo relative aspect-[4/5] max-w-[220px]">
          <Image src={stock.neerDosa.src} alt={stock.neerDosa.alt} fill sizes="220px" className="object-cover" />
        </div>
        <div>
          <p className="eyebrow text-gold-highlight">Coming soon</p>
          <h2 className="lux-h2 mt-4">
            <em className="text-gold">Mangalorean</em> specials
          </h2>
          <p className="prose-body mt-6 text-ivory/80">
            Coastal plates from Mangalore are joining the Kerala card in the next few months: ghee roasts, neer dosa and
            coconut-forward curries, cooked the way the coast does them.
          </p>
          <a
            href={whatsappHref("Hi The 90s Club, let me know when the Mangalorean specials launch.")}
            target="_blank"
            rel="noopener noreferrer"
            className="lux-link mt-8 text-ivory hover:text-gold-highlight"
          >
            Get notified
            <ArrowRight aria-hidden="true" className="size-4" />
            <span className="sr-only"> (opens WhatsApp in a new tab)</span>
          </a>
        </div>
        <div className="lg:border-l lg:border-ivory/10 lg:pl-14">
          <h2 className="font-heading text-[clamp(1.75rem,1.3rem+1.6vw,2.6rem)] leading-[1.15] font-medium">
            Stay <em className="text-gold">updated</em>
            <br />
            with offers & event nights
          </h2>
          <p className="mt-4 text-sm leading-6 text-ivory/70">
            Weekly deals and new menu alerts, straight to your WhatsApp.
          </p>
          <div className="mt-7">
            <WhatsappSubscribe />
          </div>
          <p className="mt-3 text-xs text-ivory/50">Opens WhatsApp with an opt-in message. Reply STOP any time.</p>
        </div>
      </div>
    </section>
  );
}
