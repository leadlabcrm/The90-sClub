import type { Metadata } from "next";

import { AboutEditorial, AboutPolaroids, AboutStatement } from "@/components/about-variants";

export const metadata: Metadata = {
  title: "About section options",
  robots: { index: false, follow: false },
};

const options = [
  { id: "a", label: "Option A — Editorial split", note: "Numbered eyebrow, story, stats row, two-photo collage. Sorrel-style.", Section: AboutEditorial },
  { id: "b", label: "Option B — Statement band", note: "Full-width dark band, large serif statement, three photos, pillars. Sorrel quote band meets the Luxdin values card.", Section: AboutStatement },
  { id: "c", label: "Option C — Retro polaroids", note: "Centred statement, five tilted prints with captions. Bramble-style, leans into the 90s.", Section: AboutPolaroids },
] as const;

export default function AboutPreviewPage() {
  return (
    <div className="bg-ivory">
      <div className="lux-container pt-32 pb-10 lg:pt-40">
        <p className="eyebrow text-gold-ink">Internal preview</p>
        <h1 className="lux-h2 mt-4 text-ink">About section, three layouts</h1>
        <p className="prose-body mt-4 text-ink-soft">Scroll through A, B and C. Each one carries the live copy and photos.</p>
      </div>
      {options.map(({ id, label, note, Section }) => (
        <div key={id} id={id}>
          <div className="border-y border-gold/40 bg-gold/10">
            <div className="lux-container flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
              <p className="font-heading text-2xl text-ink">{label}</p>
              <p className="text-sm text-ink-soft">{note}</p>
            </div>
          </div>
          <Section />
        </div>
      ))}
    </div>
  );
}
