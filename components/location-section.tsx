import { Clock, MapPin, Phone, TrainFront } from "lucide-react";

import { MapEmbed } from "@/components/map-embed";
import { PillLink } from "@/components/pill";
import { address, areas, hours, links, metro, phone } from "@/lib/site";

/** 15 Location, hours & areas served. */
export function LocationSection() {
  const rows = [
    {
      icon: MapPin,
      title: "Address",
      body: (
        <address className="not-italic">
          {address.line1},
          <br />
          {address.line2},
          <br />
          {address.line3}, Bengaluru 560100
        </address>
      ),
    },
    {
      icon: TrainFront,
      title: "Nearest metro",
      body: `${metro.station}, ${metro.line}`,
    },
    {
      icon: Clock,
      title: "Opening hours",
      body: (
        <>
          Mon – Sun: {hours.short}
          <br />
          {hours.eventNights}
        </>
      ),
    },
    {
      icon: Phone,
      title: "Call / WhatsApp",
      body: (
        <a href={phone.href} className="tabular-nums hover:text-gold-ink">
          {phone.display}
        </a>
      ),
    },
  ] as const;

  return (
    <section id="visit" className="lux-section scroll-mt-24 border-t border-line bg-ivory">
      <div className="lux-container">
        <p className="eyebrow text-gold-ink">Visit us</p>
        <h2 className="lux-h2 mt-3 text-ink">
          Find The 90s Club in <em>Electronic City</em>
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <MapEmbed className="h-80 rounded-[var(--radius-photo)] lg:h-full lg:min-h-[26rem]" />
          <div>
            <ul className="grid gap-5">
              {rows.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold-ink">
                    <Icon aria-hidden="true" className="size-4" strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{title}</p>
                    <div className="mt-1 text-sm leading-6 text-ink-soft">{body}</div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm font-semibold text-ink">Popular with guests from</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {areas.map((area) => (
                <li key={area} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-xs text-ink">
                  <MapPin aria-hidden="true" className="size-3 text-gold-ink" />
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <PillLink href={links.directions} tone="gold" external>
                Get directions
              </PillLink>
              <PillLink href={phone.href} tone="outline">
                Call now
              </PillLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
