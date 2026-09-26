import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MapPlaceholder from "@/components/MapPlaceholder";
import { site, openingHours } from "@/data/site";

export default function Visit() {
  return (
    <section aria-label="Visit us" className="border-t border-line">
      <Container className="py-24 sm:py-32 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Details */}
          <div>
            <Reveal>
              <p className="eyebrow">07 — Visit</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl leading-[1.15] font-light tracking-[-0.01em] sm:text-4xl lg:text-5xl">
                Find your way to the&nbsp;table.
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 grid gap-10 sm:grid-cols-2">
                {/* Address + contact */}
                <div>
                  <h3 className="eyebrow text-cream/60">Address</h3>
                  <address className="mt-4 text-[0.95rem] leading-relaxed text-cream/80 not-italic">
                    {site.name}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.locality}
                    <br />
                    {site.address.region} {site.address.postalCode}
                  </address>
                  <ul className="mt-6 space-y-3 text-[0.95rem]">
                    <li>
                      <a
                        href={site.phoneHref}
                        className="inline-flex items-center gap-2.5 text-cream/80 transition-colors hover:text-copper"
                      >
                        <Phone size={15} strokeWidth={1.5} aria-hidden className="text-copper" />
                        {site.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${site.email}`}
                        className="inline-flex items-center gap-2.5 text-cream/80 transition-colors hover:text-copper"
                      >
                        <Mail size={15} strokeWidth={1.5} aria-hidden className="text-copper" />
                        {site.email}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="eyebrow text-cream/60">Hours</h3>
                  <dl className="mt-4 space-y-5">
                    {openingHours.map((row) => (
                      <div key={row.days}>
                        <dt className="text-[0.7rem] font-medium tracking-[0.18em] text-sand uppercase">
                          {row.days}
                        </dt>
                        <dd className="mt-1 text-[0.95rem] text-cream/80">{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-12">
                <Button
                  href="https://maps.google.com/?q=Koregaon+Park,+Pune,+Maharashtra"
                  variant="outline"
                >
                  Get Directions
                  <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={0.1} className="lg:pl-6">
            <MapPlaceholder className="h-full min-h-[280px]" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
