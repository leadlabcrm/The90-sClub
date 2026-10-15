import type { Metadata } from "next";

import { MenuBoard, MenuCard, MenuOval } from "@/components/menu-variants";

export const metadata: Metadata = { title: "Menu section options", robots: { index: false, follow: false } };

const options = [
  { id: "a", label: "Option A — Menu card", note: "Centred heading, pill tabs, bordered card with dotted leaders and dish thumbnails.", Section: MenuCard },
  { id: "b", label: "Option B — Luxdin categories", note: "Serif category list on the left, oval photo and the lead dishes with prices on the right.", Section: MenuOval },
  { id: "c", label: "Option C — Menu board", note: "Black band set like a printed menu: three serif columns with gold leaders, photo and drinks note on the side.", Section: MenuBoard },
] as const;

export default function MenuPreviewPage() {
  return (
    <div className="bg-ivory">
      <div className="lux-container pt-32 pb-10 lg:pt-40">
        <p className="eyebrow text-gold-ink">Internal preview</p>
        <h1 className="lux-h2 mt-4 text-ink">Menu section, three layouts</h1>
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
