import { CtaRow } from "@/components/cta-row";
import { TextLink } from "@/components/text-link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">404</p>
      <h1 className="type-display mt-3 text-5xl text-teal sm:text-6xl">That page is not on the menu</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
        The address you tried is not part of this site. The kitchen, the rooftop, and the visit details are still right here.
      </p>
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-base">
        <TextLink href="/">Home</TextLink>
        <TextLink href="/menu">Menu</TextLink>
        <TextLink href="/visit">Visit</TextLink>
      </div>
      <CtaRow className="mt-8" items={["call", "directions", "whatsapp"]} />
    </div>
  );
}
