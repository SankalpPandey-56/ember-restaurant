import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section aria-label="What guests say" className="border-t border-line">
      <Container className="py-24 sm:py-32 lg:py-40">
        <SectionHeading
          eyebrow="06 — Guests"
          title="Word of mouth"
        />

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10 lg:mt-20">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.12}
              // Middle column hangs lower — breaks the grid politely.
              className={index === 1 ? "md:mt-12" : ""}
            >
              <figure>
                <span aria-hidden className="font-display text-5xl leading-none text-copper/50">
                  &ldquo;
                </span>
                <blockquote className="mt-3">
                  <p className="font-display text-lg leading-[1.6] font-light text-cream/90">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="text-sm font-medium tracking-wide text-cream">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-xs tracking-[0.08em] text-sand uppercase">
                    {testimonial.meta}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
