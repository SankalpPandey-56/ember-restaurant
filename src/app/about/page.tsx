import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ReservationCTA from "@/components/home/ReservationCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of EMBER — a Pune restaurant built around an open-fire kitchen, seasonal ingredients and a decade of craft.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    number: "I",
    title: "Fire first",
    body: "Every dish begins at the hearth. Oak and mango wood give our food a signature you can taste before you can name it.",
  },
  {
    number: "II",
    title: "Season above all",
    body: "The menu is written every few weeks around what the market offers. If it isn't in season, it isn't on the plate.",
  },
  {
    number: "III",
    title: "Waste nothing",
    body: "Bones become jus, trim becomes staff meal, ash becomes the crust on your vegetables. The fire wastes nothing; neither do we.",
  },
] as const;

const timeline = [
  { year: "2015", event: "Ember opens with a twelve-table dining room and a single wood-fired grill." },
  { year: "2017", event: "The open-fire kitchen is built — no gas lines, everything over oak and charcoal." },
  { year: "2020", event: "We start farming with two families outside Pune; the menu follows their seasons." },
  { year: "2023", event: "Ember is named among the city's ten best restaurants for the third year running." },
  { year: "2025", event: "The dining room expands, and the hearth — still just one — remains the centre of the room." },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ember"
        title="A restaurant built around a fire."
        lede="Ten years in, our kitchen still has no gas line. Everything we serve passes through flame, smoke or ember — and we wouldn't have it any other way."
      />

      {/* Story */}
      <section aria-label="Our story" className="border-b border-line">
        <Container className="py-20 sm:py-28 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal className="relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/gallery-chef.jpg"
                    alt="Chef at the pass, plating dishes during evening service"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 flex items-center gap-3 text-[0.68rem] font-medium tracking-[0.24em] text-sand uppercase">
                  <span aria-hidden className="h-px w-8 bg-copper" />
                  Service, 8pm
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal>
                <p className="eyebrow">The beginning</p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-xl font-display text-xl leading-[1.7] font-light text-cream/90 sm:text-2xl">
                  We didn't set out to open a steakhouse, or a grill concept, or
                  anything with a slogan. We set out to cook the way cooks
                  cooked for thousands of years — over wood, with patience.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 max-w-xl space-y-5 leading-[1.85] text-cream/70">
                  <p>
                    The first Ember was twelve tables and a borrowed grill. The
                    room filled anyway. People stayed later than they planned,
                    ordered the same smoked chocolate tart twice, and told their
                    friends — and somewhere in that first winter, the restaurant
                    found its reason to exist.
                  </p>
                  <p>
                    A decade later the room is bigger and the hearth has grown
                    with it, but the idea hasn't moved an inch: honest
                    ingredients, real fire, and service that treats your evening
                    like it matters. Because it does.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy — full-width pull quote on a raised panel */}
      <section aria-label="Philosophy" className="border-b border-line bg-raised">
        <Container className="py-20 sm:py-28 lg:py-32">
          <Reveal>
            <p className="eyebrow text-center">Philosophy</p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mx-auto mt-8 max-w-4xl text-center">
              <p className="font-display text-2xl leading-[1.4] font-light text-balance sm:text-3xl lg:text-[2.4rem] lg:leading-[1.35]">
                &ldquo;Fire is the oldest recipe in the world. Our job is not to
                improve it — it is to pay attention&nbsp;to&nbsp;it.&rdquo;
              </p>
              <footer className="mt-8 text-[0.72rem] font-medium tracking-[0.24em] text-sand uppercase">
                Arjun Mehra, Chef &amp; Founder
              </footer>
            </blockquote>
          </Reveal>

          {/* Principles */}
          <div className="mt-20 grid gap-10 border-t border-line pt-12 md:grid-cols-3 lg:mt-24 lg:gap-14">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 0.1}>
                <p className="font-display text-lg text-copper">{principle.number}</p>
                <h3 className="mt-3 font-display text-xl font-normal text-cream">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.8] text-cream/65">
                  {principle.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Chef */}
      <section aria-label="The chef" className="border-b border-line">
        <Container className="py-20 sm:py-28 lg:py-36">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6 lg:order-2">
              <Reveal className="relative">
                <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/2] lg:aspect-[4/5]">
                  <Image
                    src="/images/intro-chef.jpg"
                    alt="Chef Arjun Mehra finishing a plate at the pass"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:order-1 lg:pr-12">
              <Reveal>
                <p className="eyebrow">The Chef</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 font-display text-3xl leading-[1.15] font-light sm:text-4xl">
                  Arjun Mehra
                </h2>
                <p className="mt-2 text-[0.72rem] font-medium tracking-[0.24em] text-sand uppercase">
                  Chef &amp; Founder
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-7 max-w-xl space-y-5 leading-[1.85] text-cream/70">
                  <p>
                    Arjun trained in Copenhagen and Mumbai before coming home to
                    Pune with a conviction he hasn't shaken since: that heat,
                    smoke and time do more for flavour than any technique
                    invented since.
                  </p>
                  <p>
                    He still works the grill most nights. If a dish isn't good
                    enough for the farmers who grow it, it doesn't leave the
                    kitchen.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section aria-label="History" className="border-b border-line bg-raised">
        <Container className="py-20 sm:py-28 lg:py-36">
          <SectionHeading
            eyebrow="The Years"
            title="A short history of the fire."
          />
          <ol className="mt-14 max-w-3xl lg:mt-20">
            {timeline.map((entry, index) => (
              <Reveal key={entry.year} delay={index * 0.06}>
                <li className="grid grid-cols-[4.5rem_1fr] gap-6 border-t border-line py-7 sm:grid-cols-[7rem_1fr] sm:gap-10">
                  <p className="pt-0.5 font-display text-xl text-copper sm:text-2xl">
                    {entry.year}
                  </p>
                  <p className="leading-[1.8] text-cream/75">{entry.event}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Craft strip — two images, offset */}
      <section aria-label="In the kitchen" className="border-b border-line">
        <Container className="py-20 sm:py-28 lg:py-36">
          <div className="grid gap-6 sm:grid-cols-12 sm:gap-8">
            <Reveal className="sm:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/gallery-grill.jpg"
                  alt="Beef searing over open flame on the grill"
                  fill
                  sizes="(min-width: 640px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.12} className="sm:col-span-5 sm:mt-16">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/4.6]">
                <Image
                  src="/images/gallery-fire.jpg"
                  alt="Embers glowing in the open-fire kitchen"
                  fill
                  sizes="(min-width: 640px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm leading-[1.8] text-cream/60">
                The hearth is lit at 9 a.m. and dies down long after midnight.
                Everything in between passes through it.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <ReservationCTA />
    </>
  );
}
