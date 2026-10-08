import { CtaRow } from "@/components/cta-row";
import { PageHero } from "@/components/page-hero";
import { VenuePhoto } from "@/components/venue-photo";
import { photos } from "@/lib/photos";
import { pageMetadata } from "@/lib/metadata";
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
      />

      <section className="section-pad bg-black">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <p className="type-label text-xs text-gold-highlight">Pick your plan</p>
          <h2 className="type-display mt-3 text-4xl text-ivory sm:text-5xl lg:text-6xl">Who it is for</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {audiences.map((item, index) => (
              <li key={item.title} className="club-card-dark p-6">
                <p className="type-display text-5xl text-gold-highlight">0{index + 1}</p>
                <h3 className="type-display mt-6 text-2xl text-cream">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-cream/75">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y-2 border-charcoal bg-gold py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1220px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div className="club-card bg-paper p-6 sm:p-8">
            <p className="type-label text-xs text-blue">Room for the group</p>
            <h2 className="type-display mt-3 text-4xl text-blue sm:text-5xl">Capacity</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
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

      <section className="ink-grid section-pad bg-blue text-cream">
        <div className="mx-auto w-full max-w-[1220px] px-5 sm:px-8">
          <p className="type-label text-xs text-ivory">Three details are enough</p>
          <h2 className="type-display mt-3 text-4xl text-cream sm:text-5xl lg:text-6xl">Enquire</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">
            WhatsApp or call {phone.display}. Tell us the date, the headcount, and the time. Walk-ins are part of how the room works; groups should send those three details first.
          </p>
          <CtaRow
            className="mt-6"
            tone="onDark"
            items={["whatsapp", "call", "directions"]}
            whatsappMessage={whatsappMessages.group}
          />
        </div>
      </section>
    </>
  );
}
