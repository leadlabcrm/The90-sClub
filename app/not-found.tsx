import { CtaRow } from "@/components/cta-row";
import { TextLink } from "@/components/text-link";

export default function NotFound() {
  return (
    <div className="section-pad mx-auto w-full max-w-4xl px-5 sm:px-8">
      <div className="club-card p-6 sm:p-10">
      <p className="type-label text-xs text-blue">404</p>
      <h1 className="type-display mt-3 text-5xl text-blue sm:text-6xl">That page is not on the menu</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-charcoal/70">
        The address you tried is not part of this site. The kitchen, the rooftop, and the visit details are still right here.
      </p>
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-base">
        <TextLink href="/">Home</TextLink>
        <TextLink href="/menu">Menu</TextLink>
        <TextLink href="/visit">Visit</TextLink>
      </div>
      <CtaRow className="mt-8" items={["call", "directions", "whatsapp"]} />
      </div>
    </div>
  );
}
