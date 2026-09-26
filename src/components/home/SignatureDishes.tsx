import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { inr } from "@/data/menu";

type Dish = {
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
};

const dishes: Dish[] = [
  {
    name: "Ember-Grilled Tenderloin",
    description:
      "300g grass-fed tenderloin, bone-marrow butter, charred shallot, jus gras.",
    price: 1450,
    image: "/images/dish-steak.jpg",
    alt: "Sliced ember-grilled tenderloin with charred edges on a dark plate",
  },
  {
    name: "Charred Citrus Salmon",
    description:
      "Norwegian salmon, burnt orange glaze, fennel pollen, charred lemon.",
    price: 1240,
    image: "/images/dish-salmon.jpg",
    alt: "Salmon fillet with a charred citrus glaze and fresh herbs",
  },
  {
    name: "Fire-Roasted Heirloom Vegetables",
    description:
      "Seasonal vegetables roasted in the coals, romesco, herb oil, ash crumble.",
    price: 760,
    image: "/images/dish-veg.jpg",
    alt: "Colorful heirloom vegetables fire-roasted and dressed with herbs",
  },
  {
    name: "Smoked Chocolate Tart",
    description:
      "Dark chocolate ganache, oak smoke, smoked sea salt, crème fraîche.",
    price: 480,
    image: "/images/dish-tart.jpg",
    alt: "Slice of dark chocolate tart with smoked sea salt",
  },
];

export default function SignatureDishes() {
  return (
    <section aria-label="Signature dishes" className="border-t border-line">
      <Container className="py-24 sm:py-32 lg:py-40">
        <SectionHeading
          eyebrow="02 — Signature"
          title={
            <>
              From the fire<span className="text-copper">.</span>
            </>
          }
          lede="Four plates that define the kitchen — cooked over oak and ash, finished at the pass."
        />

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {dishes.map((dish, index) => (
            <Reveal
              key={dish.name}
              delay={index * 0.1}
              className={index % 2 === 1 ? "lg:mt-14" : ""}
            >
              {/* No border, no shadow — the photograph is the card */}
              <article className="group">
                <Link
                  href="/menu"
                  aria-label={`${dish.name} — see it on the menu`}
                  className="block focus-visible:outline-2"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.alt}
                      fill
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg leading-snug font-normal text-cream transition-colors group-hover:text-copper">
                      {dish.name}
                    </h3>
                    <p className="shrink-0 font-display text-base text-copper">
                      {inr(dish.price)}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-sand">
                    {dish.description}
                  </p>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 lg:mt-20">
          <Link
            href="/menu"
            className="link-underline inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.22em] text-cream uppercase"
          >
            View the full menu
            <span aria-hidden className="text-copper">→</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
