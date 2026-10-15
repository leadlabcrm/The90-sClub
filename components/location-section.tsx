import { Phone } from "lucide-react";

import { IconCircle } from "@/components/icon-circle";
import { MapEmbed } from "@/components/map-embed";
import { PillLink } from "@/components/pill";
import { address, areas, hours, links, metro, phone } from "@/lib/site";

/** 15 Location, hours & areas served. */
export function LocationSection() {
  const rows = [
    {
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
    { title: "Nearest metro", body: `${metro.station}, ${metro.line}` },
    {
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
      title: "Call / WhatsApp",
      body: (
        <a href={phone.href} className="tabular-nums underline decoration-gold underline-offset-4 hover:text-gold-ink">
          {phone.display}
        </a>
      ),
    },
  ] as const;

  return (
    <section id="visit" className="lux-section scroll-mt-24 bg-ivory">
      <div className="lux-container">
        <p className="eyebrow text-gold-ink">11 — Visit Us</p>
        <h2 className="lux-h2 mt-4 text-ink">
          Find The 90s Club in <em>Electronic City</em>
        </h2>
        <p className="mt-3 font-heading text-[1.35rem] text-ink-soft">Millennium Plaza, Hosur Road, Hebbagodi. Open daily noon to midnight.</p>
        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <MapEmbed className="h-80 rounded-[var(--radius-photo)] lg:h-full lg:min-h-[28rem]" />
          <div>
            <dl className="divide-y divide-line">
              {rows.map(({ title, body }) => (
                <div key={title} className="grid gap-1 py-5 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6">
                  <dt className="text-[0.7rem] tracking-[0.18em] text-gold-ink uppercase sm:pt-1">{title}</dt>
                  <dd className="text-[0.95rem] leading-7 text-ink">{body}</dd>
                </div>
              ))}
              <div className="grid gap-1 py-5 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6">
                <dt className="text-[0.7rem] tracking-[0.18em] text-gold-ink uppercase sm:pt-1">Guests from</dt>
                <dd className="text-[0.95rem] leading-7 text-ink">{areas.join(" · ")}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PillLink href={links.directions} tone="gold" external>
                Get directions
              </PillLink>
              <IconCircle href={phone.href} label={`Call ${phone.display}`} Icon={Phone} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
