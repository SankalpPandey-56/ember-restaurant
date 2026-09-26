import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ContactForm";
import MapPlaceholder from "@/components/MapPlaceholder";
import { site, openingHours } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Reserve a table at EMBER, Koregaon Park, Pune — or write to us. Opening hours, phone, email and directions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come sit by the fire."
        lede="Reservations, private dining, press or a simple question — we read everything and answer within a day."
      />

      <section aria-label="Contact details and form" className="border-b border-line">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Form */}
            <div id="reserve" className="scroll-mt-28 lg:col-span-7">
              <Reveal>
                <p className="eyebrow">Write to us</p>
                <h2 className="mt-4 font-display text-2xl font-light sm:text-3xl">
                  Reserve a table
                </h2>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-sand">
                  Tell us when, and how many. We confirm every booking by email
                  or phone.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="mt-10">
                <ContactForm />
              </Reveal>
            </div>

            {/* Details */}
            <div className="lg:col-span-5">
              <Reveal delay={0.05}>
                <p className="eyebrow">Details</p>
              </Reveal>

              <Reveal delay={0.12} className="mt-8">
                <address className="space-y-4 not-italic">
                  <p className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-cream/80">
                    <MapPin size={16} strokeWidth={1.5} aria-hidden className="mt-1 shrink-0 text-copper" />
                    <span>
                      {site.name} — {site.address.street}
                      <br />
                      {site.address.locality}
                      <br />
                      {site.address.region} {site.address.postalCode}
                    </span>
                  </p>
                  <p className="flex items-center gap-3 text-[0.95rem] text-cream/80">
                    <Phone size={16} strokeWidth={1.5} aria-hidden className="shrink-0 text-copper" />
                    <a href={site.phoneHref} className="transition-colors hover:text-copper">
                      {site.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-3 text-[0.95rem] text-cream/80">
                    <Mail size={16} strokeWidth={1.5} aria-hidden className="shrink-0 text-copper" />
                    <a href={`mailto:${site.email}`} className="transition-colors hover:text-copper">
                      {site.email}
                    </a>
                  </p>
                </address>
              </Reveal>

              <Reveal delay={0.18} className="mt-10">
                <h3 className="eyebrow text-cream/60">Opening hours</h3>
                <dl className="mt-4 divide-y divide-line border-y border-line">
                  {openingHours.map((row) => (
                    <div key={row.days} className="flex items-baseline justify-between gap-4 py-3.5">
                      <dt className="text-[0.8rem] font-medium tracking-[0.14em] text-sand uppercase">
                        {row.days}
                      </dt>
                      <dd className="text-right text-[0.95rem] text-cream/85">{row.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-sand/80">
                  The kitchen closes 45 minutes before the room. Walk-ins are
                  welcome at the bar, always.
                </p>
              </Reveal>

              <Reveal delay={0.24} className="mt-10">
                <MapPlaceholder className="min-h-[240px]" />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
