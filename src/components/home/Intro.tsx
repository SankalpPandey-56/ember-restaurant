import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

export default function Intro() {
  return (
    <section aria-label="Introduction" className="border-t border-line">
      <Container className="py-24 sm:py-32 lg:py-40">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Image column — pushed down for asymmetry, bleeds right on desktop */}
          <Reveal className="lg:col-span-5 lg:order-2">
            <div className="relative lg:-mr-12 xl:-mr-24">
              <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
                <Image
                  src="/images/intro-chef.jpg"
                  alt="A chef finishing a dish at the pass during evening service"
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 flex items-center gap-3 text-[0.68rem] font-medium tracking-[0.24em] text-sand uppercase">
                <span aria-hidden className="h-px w-8 bg-copper" />
                The pass, evening service
              </p>
            </div>
          </Reveal>

          {/* Copy column */}
          <div className="lg:col-span-7 lg:order-1 lg:pr-16">
            <Reveal>
              <p className="eyebrow">01 — The Idea</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl leading-[1.15] font-light tracking-[-0.01em] sm:text-4xl lg:text-[2.9rem]">
                Where fire becomes&nbsp;
                <em className="not-italic text-copper">flavor</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-base leading-[1.85] text-cream/70 sm:text-lg sm:leading-[1.85]">
                EMBER brings together open-fire cooking, seasonal ingredients,
                and contemporary technique. Every plate is designed around
                honest ingredients, bold flavors, and the quiet theatre of
                the flame.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <Link
                href="/about"
                className="link-underline mt-9 inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.22em] text-cream uppercase"
              >
                Our story
                <span aria-hidden className="text-copper">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
