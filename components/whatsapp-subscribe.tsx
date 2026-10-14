"use client";

import { useState, type FormEvent } from "react";

import { whatsappHref, whatsappMessages } from "@/lib/site";

/** Opens WhatsApp with an opt-in message. The venue keeps the list; the site stores nothing. */
export function WhatsappSubscribe() {
  const [number, setNumber] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `${whatsappMessages.subscribe}\nMy WhatsApp: ${number.trim()}`;
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="subscribe-number">
        Your WhatsApp number
      </label>
      <input
        id="subscribe-number"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        placeholder="Your WhatsApp number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="min-w-0 flex-1 rounded-full border border-line bg-ivory px-5 py-3 text-[0.95rem] text-ink outline-none placeholder:text-ink-soft/70 focus:border-gold-ink"
      />
      <button type="submit" className="pill pill-gold">
        Subscribe
      </button>
    </form>
  );
}
