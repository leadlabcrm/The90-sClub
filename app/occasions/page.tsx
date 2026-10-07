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

      <section className="py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl text-teal sm:text-5xl">Who it is for</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {audiences.map((item) => (
              <li key={item.title} className="rounded-2xl border border-border bg-paper p-5">
                <h3 className="text-xl font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sand py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="type-display text-4xl text-teal sm:text-5xl">Capacity</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
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

      <section className="py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="type-display text-4xl text-teal sm:text-5xl">Enquire</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            WhatsApp or call {phone.display}. Tell us the date, the headcount, and the time. Walk-ins are part of how the room works; groups should send those three details first.
          </p>
          <CtaRow
            className="mt-6"
            items={["whatsapp", "call", "directions"]}
            whatsappMessage={whatsappMessages.group}
          />
        </div>
      </section>
    </>
  );
}
