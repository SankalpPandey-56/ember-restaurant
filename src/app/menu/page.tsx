import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ReservationCTA from "@/components/home/ReservationCTA";
import { menu, inr, type MenuItem } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The EMBER menu — starters, soups & salads, dishes from the fire, mains, sides, desserts and drinks. Seasonal, fire-grilled, contemporary.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title="Cooked over oak, ash and patience."
        lede="Our menu follows the market and the seasons, so expect it to change. Dishes marked with a flame are signatures of the house."
      />

      <section aria-label="Full menu" className="border-b border-line">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Sticky category rail — jumps within the page */}
            <nav aria-label="Menu categories" className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-28">
                <p className="eyebrow">Categories</p>
                <ul className="mt-6 space-y-1 border-l border-line">
                  {menu.map((category, index) => (
                    <li key={category.id}>
                      <a
                        href={`#${category.id}`}
                        className="-ml-px flex items-baseline gap-3 border-l border-transparent py-2 pl-5 text-sm tracking-[0.06em] text-sand transition-colors hover:border-copper hover:text-cream"
                      >
                        <span className="font-display text-xs text-copper/70">
                          0{index + 1}
                        </span>
                        {category.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Menu sections */}
            <div className="mt-4 lg:col-span-9 lg:mt-0">
              {/* Mobile category chips */}
              <nav
                aria-label="Menu categories"
                className="scrollbar-none -mx-5 mb-12 flex gap-6 overflow-x-auto border-b border-line px-5 pb-4 lg:hidden"
              >
                {menu.map((category) => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="shrink-0 text-[0.7rem] font-medium tracking-[0.2em] whitespace-nowrap text-sand uppercase hover:text-cream"
                  >
                    {category.label}
                  </a>
                ))}
              </nav>

              {menu.map((category, index) => (
                <section
                  key={category.id}
                  id={category.id}
                  aria-label={category.label}
                  className="scroll-mt-28 border-t border-line py-12 first:border-t-0 first:pt-0 sm:py-14 lg:scroll-mt-32"
                >
                  <Reveal>
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-sm text-copper/80">
                        0{index + 1}
                      </span>
                      <h2 className="font-display text-2xl font-light tracking-[-0.005em] sm:text-3xl">
                        {category.label}
                      </h2>
                    </div>
                    <p className="mt-2 pl-0 text-sm text-sand italic sm:pl-9">
                      {category.blurb}
                    </p>
                  </Reveal>

                  <ul className="mt-8 grid gap-x-14 gap-y-2 md:grid-cols-2">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <MenuRow item={item} />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              {/* Dietary key */}
              <p className="mt-8 border-t border-line pt-6 text-xs tracking-wide text-sand/80">
                <span className="text-cream/70">V</span> — vegetarian &nbsp;·&nbsp;
                <span className="text-cream/70"> GF</span> — gluten-free &nbsp;·&nbsp;
                Please tell your server about allergies; the fire does not forgive.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ReservationCTA />
    </>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div className="group py-4">
      <div className="flex items-baseline gap-4">
        <h3 className="font-display text-[1.05rem] leading-snug text-cream transition-colors duration-300 group-hover:text-copper">
          {item.name}
          {item.signature && (
            <span aria-label="Signature dish" title="Signature dish" className="ml-2 text-copper">
              ✦
            </span>
          )}
        </h3>
        <span
          aria-hidden
          className="hidden flex-1 translate-y-[-3px] border-b border-dotted border-sand/40 sm:block"
        />
        <p className="shrink-0 font-display text-[1.05rem] text-copper/90">{inr(item.price)}</p>
      </div>
      <p className="mt-1 max-w-md text-sm leading-relaxed text-sand">{item.description}</p>
      {item.tags && item.tags.length > 0 && (
        <p className="mt-1.5 flex gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="border border-line px-1.5 py-0.5 text-[0.6rem] font-medium tracking-[0.14em] text-sand"
            >
              {tag}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
