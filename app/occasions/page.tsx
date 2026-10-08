import { CtaRow } from "@/components/cta-row";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { occasionsFaqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { reviews } from "@/lib/reviews";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { phone, whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata(seo.occasions);

const audiences = [
  {
    title: "Corporate teams",
    copy: "Team lunch near Infosys / E-City Phase 1, plus Phase 2, Bommasandra and Ananth Nagar. The kitchen and the rooftop pub are in the same building.",
  },
  {
    title: "Students",
    copy: "Hebbagodi and the Electronic City catchment. Thursday to Saturday are the busy nights.",
  },
  {
    title: "Couples",
    copy: "A Kerala plate in the rooftop pub. Call ahead if you want a specific time.",
  },
];

export default function OccasionsPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(occasionsFaqs)} />
      <PageHero
        eyebrow="Groups"
        title="Team lunch & birthdays in Electronic City"
        lede="Team lunch near Infosys / E-City Phase 1: about 80 seats, AC, parking, Kerala plates and Flying Fox craft beer."
        photo={photos.booth}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <p className="eyebrow text-gold-ink">Pick your plan</p>
          <h2 className="lux-h2 mt-3 text-ink">Who it is for</h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {audiences.map((item, index) => (
              <li key={item.title} className="border-t border-line pt-5">
                <p className="font-heading text-4xl text-gold-ink tabular-nums">0{index + 1}</p>
                <h3 className="lux-h3 mt-4 text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory pb-16 lg:pb-24">
        <div className="lux-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-gold-ink">Room for the group</p>
            <h2 className="lux-h2 mt-3 text-ink">Capacity</h2>
            <p className="prose-body mt-4 text-ink-soft">
              About 80 seats, full AC, and parking — a practical size for a team lunch, an office get-together, or a
              birthday table. See the{" "}
              <TextLink href="/menu">menu</TextLink> and{" "}
              <TextLink href="/kerala-food">Kerala food</TextLink>, then use{" "}
              <TextLink href="/visit">directions from E-City Phase 1</TextLink>.
            </p>
            <blockquote className="mt-8 max-w-[62ch] border-l border-gold pl-4">
              <p className="text-sm leading-6 text-ink">“{reviews.deepak.text}”</p>
              <footer className="mt-2 text-xs tracking-wide text-ink-soft">
                {reviews.deepak.name} · Google review · {reviews.deepak.date}
              </footer>
            </blockquote>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <VenuePhoto photo={photos.booth} caption="Booth seating inside The 90s Club." />
            <VenuePhoto photo={photos.boombox} aspect="tall" caption="The music corner inside the club." />
          </div>
        </div>
      </section>

      <section className="lux-section bg-ivory">
        <div className="lux-container">
          <FaqList items={occasionsFaqs} />
        </div>
      </section>

      <section className="lux-section bg-black text-cream">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">Three details are enough</p>
          <h2 className="lux-h2 mt-3">Enquire</h2>
          <p className="prose-body mt-4 text-cream/85">
            WhatsApp or call {phone.display}. Tell us the date, the headcount, and the time. Walk-ins are part of how
            the room works; groups should send those three details first.
          </p>
          <CtaRow
            className="mt-7"
            tone="onDark"
            items={["whatsapp", "call", "directions"]}
            whatsappMessage={whatsappMessages.group}
          />
        </div>
      </section>
    </>
  );
}
