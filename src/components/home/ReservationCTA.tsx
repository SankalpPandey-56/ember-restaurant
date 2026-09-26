import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ReservationCTA() {
  return (
    <section aria-label="Reserve a table" className="relative overflow-hidden border-t border-line">
      {/* Background photograph, heavily darkened so type carries the section */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery-fire.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <Container className="relative py-28 text-center sm:py-36 lg:py-44">
        <Reveal>
          <p className="eyebrow">Reservations</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.08] font-light tracking-[-0.01em] text-balance sm:text-5xl lg:text-6xl">
            Your table is&nbsp;waiting.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-md text-lg text-cream/75">
            Gather around the fire.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-11">
            <Button href="/contact#reserve">Reserve a Table</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
