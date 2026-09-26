import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

const stats = [
  { value: "10+", label: "Years of craft" },
  { value: "30+", label: "Seasonal dishes" },
  { value: "1", label: "Open-fire kitchen" },
] as const;

export default function Story() {
  return (
    <section aria-label="Our story" className="border-t border-line bg-raised">
      <Container className="py-24 sm:py-32 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-6 lg:pt-10">
            <Reveal>
              <p className="eyebrow">05 — The Story</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl leading-[1.15] font-light tracking-[-0.01em] sm:text-4xl lg:text-5xl">
                Built around the&nbsp;flame.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-7 max-w-xl space-y-5 text-base leading-[1.85] text-cream/70">
                <p>
                  EMBER began with a simple conviction: that the oldest way of
                  cooking is still the most honest. No gas, no shortcuts — just
                  oak, ember and attention.
                </p>
                <p>
                  A decade on, the kitchen still gathers around a single open
                  hearth. The menu follows the seasons, the room follows the
                  fire, and every service ends the way it began — with the
                  smell of woodsmoke in the air.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <Link
                href="/about"
                className="link-underline mt-9 inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.22em] text-cream uppercase"
              >
                Meet the people
                <span aria-hidden className="text-copper">→</span>
              </Link>
            </Reveal>

            {/* Statistics — quiet, set in display type */}
            <Reveal delay={0.3}>
              <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-line pt-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <dt className="order-2 mt-2 text-[0.7rem] font-medium tracking-[0.18em] text-sand uppercase">
                      {stat.label}
                    </dt>
                    <dd className="order-1 font-display text-4xl font-light text-copper lg:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Image — slightly taller than the copy block, nudged up */}
          <Reveal className="lg:col-span-6" y={40}>
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[560px]">
              <Image
                src="/images/story.jpg"
                alt="The open-fire kitchen at EMBER, coals glowing behind the grill"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
