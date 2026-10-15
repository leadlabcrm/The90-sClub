
import { PartyEnquiryForm } from "@/components/party-enquiry-form";

const plans = [
  { title: "Birthday Parties", copy: "Reserved tables and group menus" },
  { title: "Team Lunches & Corporate", copy: "Set menus for office teams" },
  { title: "Date Nights", copy: "Rooftop tables for couples" },
  { title: "Student Hangouts", copy: "Budget-friendly group combos" },
] as const;

/** 10 Parties, events & group booking. */
export function PartiesSection() {
  return (
    <section id="parties" className="lux-section scroll-mt-24 border-t border-line bg-ivory">
      <div className="lux-container grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p className="eyebrow text-gold-ink">06 — Parties & Events</p>
          <h2 className="lux-h2 mt-4 text-ink">
            Parties & <em>group bookings</em>
          </h2>
          <p className="mt-3 font-heading text-[1.35rem] text-ink-soft">Birthdays, team lunches, date nights and student hangouts.</p>
          <p className="prose-body mt-6 text-ink-soft">
            About 80 seats, a full AC room, parking at the plaza, and a kitchen that feeds a table of twenty without
            fuss. Birthdays and team lunches are what we do most.
          </p>
          <ul className="mt-10">
            {plans.map(({ title, copy }) => (
              <li key={title}>
                <div className="flex items-center gap-6 border-b border-line py-5">
                  <span className="min-w-0 flex-1">
                    <span className="block font-heading text-[1.5rem] leading-tight text-ink">{title}</span>
                    <span className="mt-1 block text-sm text-ink-soft">{copy}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <PartyEnquiryForm />
      </div>
    </section>
  );
}
