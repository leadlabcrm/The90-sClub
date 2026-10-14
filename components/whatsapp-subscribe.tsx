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
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
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
        className="lux-input min-w-0 flex-1 border-ivory/10 bg-ivory py-4"
      />
      <button type="submit" className="pill bg-gold text-black hover:bg-gold-highlight sm:rounded-none">
        Subscribe
      </button>
    </form>
  );
}
