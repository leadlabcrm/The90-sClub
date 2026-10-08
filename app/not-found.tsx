import { CtaRow } from "@/components/cta-row";
import { TextLink } from "@/components/text-link";

export default function NotFound() {
  return (
    <div className="bg-ivory">
      <div className="lux-container py-32 lg:py-40">
        <p className="eyebrow text-gold-ink">404</p>
        <h1 className="lux-h2 mt-4 max-w-3xl text-ink">That page is not on the menu</h1>
        <p className="prose-body mt-5 max-w-xl text-ink-soft">
          The address you tried is not part of this site. The kitchen, the taproom, and the visit details are still
          right here.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base">
          <TextLink href="/">Home</TextLink>
          <TextLink href="/menu">Menu</TextLink>
          <TextLink href="/visit">Visit</TextLink>
        </div>
        <CtaRow className="mt-8" tone="onLight" items={["call", "directions", "whatsapp"]} />
      </div>
    </div>
  );
}
