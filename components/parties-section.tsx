import { ArrowRight, Briefcase, Cake, Heart, Users } from "lucide-react";
import Link from "next/link";

import { PartyEnquiryForm } from "@/components/party-enquiry-form";

const plans = [
  { icon: Cake, title: "Birthday Parties", copy: "Reserved tables and group menus" },
  { icon: Briefcase, title: "Team Lunches & Corporate", copy: "Set menus for office teams" },
  { icon: Heart, title: "Date Nights", copy: "Rooftop tables for couples" },
  { icon: Users, title: "Student Hangouts", copy: "Budget-friendly group combos" },
] as const;

/** 10 Parties, events & group booking. */
export function PartiesSection() {
  return (
    <section id="parties" className="lux-section scroll-mt-24 bg-cream/40">
      <div className="lux-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
        <div>
          <p className="eyebrow text-gold-ink">Celebrate with us</p>
          <h2 className="lux-h2 mt-3 text-ink">
            Parties & <em>group bookings</em>
          </h2>
          <p className="prose-body mt-5 text-ink-soft">
            About 80 seats, a full AC room, parking at the plaza, and a kitchen that feeds a table of twenty without
            fuss. Birthdays and team lunches are what we do most.
          </p>
          <ul className="mt-8 grid gap-3">
            {plans.map(({ icon: Icon, title, copy }) => (
              <li key={title}>
                <Link
                  href="/occasions"
                  className="group flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-white px-5 py-4 transition-colors hover:border-gold"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold-ink">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-ink">{title}</span>
                    <span className="block text-sm text-ink-soft">{copy}</span>
                  </span>
                  <ArrowRight aria-hidden="true" className="size-4 text-ink transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <PartyEnquiryForm />
      </div>
    </section>
  );
}
