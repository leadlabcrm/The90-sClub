import { formatPrice, menuSections, slugify } from "@/lib/menu";

/** Full food card: category pills jump to each section, every section listed with dotted price leaders. */
export function MenuList() {
  return (
    <section className="bg-ivory pb-20 lg:pb-28">
      <div className="lux-container">
        <nav aria-label="Menu categories" className="flex flex-wrap justify-center gap-2">
          {menuSections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="pill-sm border border-line bg-white text-ink hover:border-ink">
              {s.title}
            </a>
          ))}
        </nav>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8">
          {menuSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-32 rounded-[var(--radius-card)] border border-line bg-white px-6 py-8 sm:px-10 sm:py-10"
            >
              <h2 className="text-center font-heading text-[2rem] leading-tight text-ink">{section.title}</h2>
              <p className="mt-2 text-center text-sm text-ink-soft">{section.intro}</p>
              <ul className="mt-8 grid gap-x-12 gap-y-1 md:grid-cols-2">
                {section.items.map((item) => (
                  <li key={item.name} id={slugify(item.name)} className="scroll-mt-32 py-3">
                    <span className="flex items-baseline gap-2">
                      <span className="font-heading text-[1.2rem] leading-tight text-ink">{item.name}</span>
                      <span className="mb-1 flex-1 border-b border-dotted border-line" aria-hidden="true" />
                      <span className="text-sm text-ink tabular-nums">{formatPrice(item.price)}</span>
                    </span>
                    {item.signature ? (
                      <span className="text-[0.6rem] tracking-[0.18em] text-gold-ink uppercase">Kerala kitchen</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
