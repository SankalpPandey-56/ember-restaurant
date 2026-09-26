import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede?: string;
};

/**
 * Compact editorial header for interior pages. Smaller than the home hero —
 * these pages are about content, not spectacle.
 */
export default function PageHero({ eyebrow, title, lede }: PageHeroProps) {
  return (
    <section className="border-b border-line">
      <Container className="pt-36 pb-16 sm:pt-44 sm:pb-20 lg:pt-52 lg:pb-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] font-light tracking-[-0.01em] text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {lede ? (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">{lede}</p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
