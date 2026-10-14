"use client";

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

  const label = "block text-[0.7rem] tracking-[0.18em] text-ink-soft uppercase";

  return (
    <form onSubmit={submit} className="lux-card bg-white px-7 py-9 sm:px-10 sm:py-11">
      <p className="eyebrow text-gold-ink">Plan your party</p>
      <h3 className="lux-h3 mt-3 text-ink">Tell us your plan, we confirm on WhatsApp</h3>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label>
          <span className={label}>Full name</span>
          <input className="lux-input mt-2" name="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <span className={label}>Phone / WhatsApp</span>
          <input className="lux-input mt-2" name="phone" type="tel" autoComplete="tel" required value={contact} onChange={(e) => setContact(e.target.value)} />
        </label>
        <label>
          <span className={label}>Date</span>
          <input className="lux-input mt-2" name="date" type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          <span className={label}>No. of guests</span>
          <input className="lux-input mt-2" name="guests" type="number" min={1} max={80} inputMode="numeric" required value={guests} onChange={(e) => setGuests(e.target.value)} />
        </label>
        <label className="sm:col-span-2">
          <span className={label}>Occasion</span>
          <select className="lux-input mt-2" name="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value as (typeof occasions)[number])}>
            {occasions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button type="submit" className="pill pill-gold mt-8 w-full">
        Send enquiry
      </button>
      <p className="mt-5 text-center text-sm text-ink-soft">
        or call{" "}
        <a href={phone.href} className="text-ink underline decoration-gold underline-offset-4 hover:text-gold-ink tabular-nums">
          {phone.display}
        </a>
      </p>
    </form>
  );
}
