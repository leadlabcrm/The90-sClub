import { phone } from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

/** Visible homepage FAQ. FAQPage JSON-LD must use these strings unchanged. */
export const homeFaqs: FaqItem[] = [
  {
    question: "Is Kerala food served at The 90s Club?",
    answer:
      "Yes. The menu includes Kerala Style Chicken Biryani, Coconut Fish Curry, Naadan Chicken Curry, Prawns Ghee Roast, and Prawns Pepper Fry.",
  },
  {
    question: "Which craft beer is available?",
    answer:
      "The taproom serves Flying Fox craft beer. The current tap list and prices are confirmed directly by the team.",
  },
  {
    question: "Is parking available?",
    answer: "Yes. Parking is available at Millennium Plaza.",
  },
  {
    question: "Can I plan a team lunch or birthday?",
    answer: `Yes. The venue has about 80 seats. Call ${phone.display} with your date, time, and group size.`,
  },
];

export const keralaFaqs: FaqItem[] = [
  {
    question: "Where can I get craft beer and Kerala food near Hebbagodi?",
    answer:
      "At The 90s Club, Millennium Plaza, Hosur Rd: Kerala plates and Flying Fox craft beer under one roof.",
  },
  {
    question: "What Kerala dishes do you serve?",
    answer:
      "Kerala Style Chicken Biryani ₹349, Coconut Fish Curry ₹389, Naadan Chicken Curry ₹349, Chicken Stew ₹349, Prawns Ghee Roast ₹359, Prawns Pepper Fry ₹359.",
  },
  {
    question: "Is there seafood?",
    answer: "Yes: Coconut Fish Curry, Prawns Ghee Roast, Prawns Pepper Fry, Chilli Fish.",
  },
  {
    question: "Do you have veg options?",
    answer:
      "Yes: veg starters including Dragon Paneer and Gobi Manchurian, plus Paneer Butter Masala, Dal Tadka, and Kadai Paneer.",
  },
];

export const rooftopFaqs: FaqItem[] = [
  {
    question: "Is The 90s Club open late?",
    answer: "Open daily from 12 pm to 12 am.",
  },
  {
    question: "Is there live music or karaoke?",
    answer:
      "The Google listing includes live music, karaoke, and dancing. Ask the team what is on when you visit.",
  },
  {
    question: "Is there an entry or cover charge?",
    answer: `Ask the team when you call ${phone.display}. This page does not list a cover charge.`,
  },
];

export const beerFaqs: FaqItem[] = [
  {
    question: "Do you brew your own beer?",
    answer: "No. We pour Flying Fox craft beer.",
  },
  {
    question: "What is on tap, and what does it cost?",
    answer: "Ask the team for today’s Flying Fox tap list and prices.",
  },
];

export const occasionsFaqs: FaqItem[] = [
  {
    question: "How many people can you seat?",
    answer: "About 80.",
  },
  {
    question: "Is it close to Infosys / E-City Phase 1?",
    answer:
      "Millennium Plaza is on Hosur Rd, Hebbagodi, about 2 km from the Infosys–Velankani side.",
  },
  {
    question: "Do you take group bookings?",
    answer: `Call ${phone.display} with the date, headcount, and time.`,
  },
];

export const visitFaqs: FaqItem[] = [
  {
    question: "Where exactly is The 90s Club?",
    answer:
      "Millennium Plaza, 396/48 Hosur Rd, Dadi Reddy Layout, Veerasandra, Hebbagodi, Electronic City, Bengaluru 560100.",
  },
  {
    question: "What are the hours?",
    answer: "Open daily from 12 pm to 12 am.",
  },
  {
    question: "Is there parking?",
    answer: "Yes, at the plaza.",
  },
  {
    question: "Who do I call?",
    answer: `${phone.display} for calls and WhatsApp. Akhil takes calls after 12 pm.`,
  },
];
