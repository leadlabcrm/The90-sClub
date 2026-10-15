import { ClosingBand } from "@/components/closing-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PartyEnquiryForm } from "@/components/party-enquiry-form";
import { TextLink } from "@/components/text-link";
import { VenuePhoto } from "@/components/venue-photo";
import { occasionsFaqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/metadata";
import { photos, stock } from "@/lib/photos";
import { reviews } from "@/lib/reviews";
import { faqPageJsonLd } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { phone, whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata(seo.occasions);

const occasions = [
  {
    title: "Birthday parties",
    copy: "Reserved tables, a group menu from the Kerala card, beer buckets for the table and the 90s playlist turned up. Event nights run till 1 AM.",
  },
  {
    title: "Team lunches & corporate",
    copy: "Ten minutes from E-City Phase 1 and Phase 2. Set plates for office teams, a fully AC room, parking at the plaza and a quiet Monday to Wednesday.",
  },
  {
    title: "Date nights",
    copy: "A rooftop table, a Kerala plate for two and a cocktail from the bar. Thursday to Saturday are the lively nights.",
  },
  {
    title: "Student hangouts",
    copy: "Budget-friendly group combos, BOGO on selected drinks and the ₹999 Bucket Beer Combo with two starters.",
  },
] as const;

export default function OccasionsPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(occasionsFaqs)} />
      <PageHero
        eyebrow="Parties & events"
        title="Birthdays, team lunches and group tables"
        lede="About 80 seats, full AC, rooftop tables and parking at Millennium Plaza. Tell us your plan and we confirm on WhatsApp."
        photo={photos.booth}
      />

      <section className="lux-section bg-ivory">
        <div className="lux-container grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-gold-ink">Celebrate with us</p>
            <h2 className="lux-h2 mt-4 text-ink">
              Parties & <em>group bookings</em>
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <VenuePhoto photo={stock.birthdaySparkler} aspect="photo" sizes="(min-width: 1024px) 320px, 50vw" />
              <VenuePhoto photo={stock.teamLunch} aspect="photo" sizes="(min-width: 1024px) 320px, 50vw" />
            </div>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {occasions.map((item) => (
                <li key={item.title} className="py-6">
                  <h3 className="font-heading text-[1.6rem] leading-tight text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{item.copy}</p>
                </li>
              ))}
            </ul>
          </div>
          <PartyEnquiryForm />
        </div>
      </section>

      <section className="bg-ivory pb-[var(--section-y)]">
        <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow text-gold-ink">Room for the group</p>
            <h2 className="lux-h2 mt-4 text-ink">
              Eighty seats, <em>one roof</em>
            </h2>
            <p className="prose-body mt-6 text-ink-soft">
              Booth seating for a team of twelve, high tables by the bar for a smaller crowd, and the rooftop for the
              long evenings. The kitchen handles a group order from the{" "}
              <TextLink href="/menu">full menu</TextLink> or a set of <TextLink href="/kerala-food">Kerala plates</TextLink>
              , and the bar lines up beer buckets for the table.
            </p>
            <blockquote className="mt-8 max-w-[62ch] border-l border-gold pl-4">
              <p className="text-sm leading-6 text-ink">“{reviews.deepak.text}”</p>
              <footer className="mt-2 text-xs tracking-wide text-ink-soft">
                {reviews.deepak.name} · Google review · {reviews.deepak.date}
              </footer>
            </blockquote>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <VenuePhoto photo={photos.booth} caption="Booth seating for groups." />
            <VenuePhoto photo={stock.rooftopCityView} caption="Rooftop tables for the long evenings." />
            <VenuePhoto photo={stock.friendsToast} caption="A toast at the bar." />
            <VenuePhoto photo={photos.boombox} caption="The music corner." />
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-[var(--section-y)]">
        <div className="lux-container">
          <FaqList items={occasionsFaqs} />
        </div>
      </section>

      <ClosingBand
        eyebrow="Three details are enough"
        title={<>Date, headcount, <em>time</em></>}
        items={["whatsapp", "call", "directions"]}
        whatsappMessage={whatsappMessages.group}
        callLabel="Call to book"
      >
        <p>
          Send those three on WhatsApp or call {phone.display} and the team confirms the table. Walk-ins are always
          welcome; groups of eight or more should book ahead on Thursday to Saturday.
        </p>
      </ClosingBand>
    </>
  );
}
