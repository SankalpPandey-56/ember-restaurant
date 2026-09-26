import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <Container className="py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-[1.1] font-light text-balance sm:text-5xl lg:text-6xl">
          This page has burned&nbsp;out.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-cream/70">
          The ember you are looking for is no longer here. The fire, however,
          is very much still going.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-cream px-7 py-3.5 text-[0.8rem] font-medium tracking-[0.18em] text-ink uppercase transition-colors duration-300 hover:bg-copper"
          >
            Back home
          </Link>
          <Link
            href="/menu"
            className="link-underline text-[0.75rem] font-medium tracking-[0.22em] text-cream uppercase"
          >
            See the menu
          </Link>
        </div>
      </Container>
    </section>
  );
}
