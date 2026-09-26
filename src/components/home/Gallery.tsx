import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { galleryImages } from "@/data/gallery";

/**
 * A six-image editorial grid. Every image has its own crop and column span so
 * the wall feels composed rather than tiled — large hero cell top-left,
 * narrow slices, one tall anchor.
 */
export default function Gallery() {
  const [interior, chef, fire, grill, dining, wine] = galleryImages;

  return (
    <section aria-label="Gallery" className="border-t border-line">
      <Container className="py-24 sm:py-32 lg:py-40">
        <SectionHeading
          eyebrow="04 — The Room"
          title="Nights at EMBER"
          lede="Low light, live fire and a room that hums."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-20 lg:grid-cols-12 lg:grid-rows-[repeat(10,minmax(0,1fr))] lg:gap-5">
          {/* Large anchor */}
          <Reveal className="col-span-2 lg:col-span-7 lg:row-span-6">
            <Figure image={interior} sizes="(min-width: 1024px) 58vw, 100vw" className="h-full" />
          </Reveal>

          {/* Tall slice */}
          <Reveal delay={0.08} className="col-span-1 lg:col-span-5 lg:row-span-6">
            <Figure image={chef} sizes="(min-width: 1024px) 42vw, 50vw" className="h-full" />
          </Reveal>

          {/* Second row: two wides + one offset */}
          <Reveal delay={0.05} className="col-span-1 lg:col-span-4 lg:row-span-4">
            <Figure image={fire} sizes="(min-width: 1024px) 33vw, 50vw" className="h-full" />
          </Reveal>
          <Reveal delay={0.1} className="col-span-1 lg:col-span-4 lg:row-span-4 lg:mt-10">
            <Figure image={grill} sizes="(min-width: 1024px) 33vw, 50vw" className="h-full" />
          </Reveal>
          <Reveal delay={0.15} className="col-span-2 lg:col-span-4 lg:row-span-4">
            <Figure image={dining} sizes="(min-width: 1024px) 33vw, 100vw" className="h-full" />
          </Reveal>

          {/* Closing wide slice */}
          <Reveal delay={0.08} className="col-span-2 lg:col-span-12 lg:row-span-3">
            <Figure image={wine} sizes="(min-width: 1024px) 100vw, 100vw" className="h-full max-h-72 lg:max-h-96" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Figure({
  image,
  sizes,
  className = "",
}: {
  image: (typeof galleryImages)[number];
  sizes: string;
  className?: string;
}) {
  return (
    <figure className={`group relative h-full w-full overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
      />
      {/* Soft ground so the caption reads on any photo */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {image.caption && (
        <figcaption className="absolute bottom-4 left-5 translate-y-2 text-[0.68rem] font-medium tracking-[0.24em] text-cream uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
