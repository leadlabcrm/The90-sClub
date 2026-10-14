"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { phone, whatsappHref } from "@/lib/site";

const occasions = ["Birthday", "Team lunch", "Date night", "Student hangout", "Other"] as const;

/** Composes a WhatsApp message to the venue. No server, no stored data. */
export function PartyEnquiryForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState<(typeof occasions)[number]>("Birthday");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hi The 90s Club, I would like to plan a visit.",
      `Name: ${name.trim()}`,
      `Phone / WhatsApp: ${contact.trim()}`,
      `Date: ${date}`,
      `Guests: ${guests}`,
      `Occasion: ${occasion}`,
    ].join("\n");
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-1.5 w-full rounded-[0.6rem] border border-line bg-ivory px-3.5 py-2.5 text-[0.95rem] text-ink outline-none placeholder:text-ink-soft/70 focus:border-gold-ink";

  return (
    <form onSubmit={submit} className="lux-card bg-white p-6 sm:p-8">
      <h3 className="font-heading text-[1.75rem] leading-tight font-medium text-ink">Plan your party</h3>
      <p className="mt-1.5 text-sm text-ink-soft">Tell us your plan and we will confirm on WhatsApp.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Full name
          <input className={field} name="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="text-sm font-medium text-ink">
          Phone / WhatsApp
          <input className={field} name="phone" type="tel" autoComplete="tel" required value={contact} onChange={(e) => setContact(e.target.value)} />
        </label>
        <label className="text-sm font-medium text-ink">
          Date
          <input className={field} name="date" type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label className="text-sm font-medium text-ink">
          No. of guests
          <input className={field} name="guests" type="number" min={1} max={80} inputMode="numeric" required value={guests} onChange={(e) => setGuests(e.target.value)} />
        </label>
        <label className="text-sm font-medium text-ink sm:col-span-2">
          Occasion
          <select className={field} name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value as (typeof occasions)[number])}>
            {occasions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button type="submit" className="pill pill-gold mt-6 w-full">
        <Send aria-hidden="true" className="size-4" />
        Send enquiry on WhatsApp
      </button>
      <p className="mt-4 text-center text-sm text-ink-soft">
        or call{" "}
        <a href={phone.href} className="text-ink underline decoration-line underline-offset-4 hover:text-gold-ink tabular-nums">
          {phone.display}
        </a>
      </p>
    </form>
  );
}
