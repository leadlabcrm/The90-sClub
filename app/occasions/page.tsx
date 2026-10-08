import { CtaRow } from "@/components/cta-row";
import { PageHero } from "@/components/page-hero";
import { VenuePhoto } from "@/components/venue-photo";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { phone, whatsappMessages } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Team lunch & birthdays | The 90s Club Electronic City",
  description:
    "Team lunch and birthdays at The 90s Club, Electronic City. About 80 seats, full AC, and parking. Enquire on WhatsApp or by phone.",
  path: "/occasions",
});

const audiences = [
  {
    title: "Corporate teams",
    copy: "A lunch table after work in Electronic City, with the kitchen and the rooftop in the same building.",
  },
  {
    title: "Students",
    copy: "Hebbagodi and the Electronic City catchment. Thursday to Saturday are the busy nights.",
  },
  {
    title: "Couples",
    copy: "A Kerala plate and a rooftop table. Call ahead if you want a specific time.",
  },
];

export default function OccasionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Groups"
        title="Team lunch & birthdays in Electronic City"
        lede="Corporate teams, students, couples — a rooftop and a Kerala kitchen for groups."
        image={photos.interiorSeating.src}
        alt={photos.interiorSeating.alt}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="lux-container">
          <p className="eyebrow text-gold-ink">Pick your plan</p>
          <h2 className="lux-h2 mt-4 text-ink">Who it is for</h2>
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {audiences.map((item, index) => (
              <li key={item.title} className="border-t border-line pt-6">
                <p className="font-heading text-5xl text-gold-ink">0{index + 1}</p>
                <h3 className="mt-5 font-heading text-3xl leading-none font-medium text-ink">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-ink-soft">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="lux-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-gold-ink">Room for the group</p>
            <h2 className="lux-h2 mt-4 text-ink">Capacity</h2>
            <p className="prose-body mt-5 text-ink-soft">
              About 80 seats, full AC, and parking — a practical size for a team lunch or a birthday table.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <VenuePhoto
              src={photos.interiorSeating.src}
              alt={photos.interiorSeating.alt}
              caption="Lounge seating inside. This is not a booked group."
            />
            <VenuePhoto
              src={photos.interiorScreenStage.src}
              alt={photos.interiorScreenStage.alt}
              caption="Screen and stage area inside the club."
            />
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-cream lg:py-24">
        <div className="lux-container">
          <p className="eyebrow text-gold-highlight">Three details are enough</p>
          <h2 className="lux-h2 mt-4">Enquire</h2>
          <p className="prose-body mt-5 max-w-2xl text-cream/85">
            WhatsApp or call {phone.display}. Tell us the date, the headcount, and the time. Walk-ins are part of how
            the room works; groups should send those three details first.
          </p>
          <CtaRow
            className="mt-8"
            tone="onDark"
            items={["whatsapp", "call", "directions"]}
            whatsappMessage={whatsappMessages.group}
          />
        </div>
      </section>
    </>
  );
}
