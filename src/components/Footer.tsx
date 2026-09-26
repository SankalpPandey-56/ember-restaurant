import Link from "next/link";
import Container from "@/components/ui/Container";
import { navLinks, openingHours, site } from "@/data/site";

/* Lucide dropped brand icons, so the two social marks live here as inline SVGs. */
function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.2" x2="17.21" y1="6.8" y2="6.8" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Wordmark + blurb */}
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-medium tracking-[0.32em] text-cream">
              EMBER
            </p>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-sand">
              {site.description}
            </p>
            <div className="mt-7 flex items-center gap-3">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${social.label}`}
                  className="inline-flex h-10 w-10 items-center justify-center border border-line text-sand transition-colors duration-300 hover:border-copper hover:text-copper"
                >
                  {social.label === "Instagram" ? (
                    <InstagramIcon />
                  ) : (
                    <FacebookIcon />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="md:col-span-2">
            <p className="eyebrow">Explore</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] text-cream/80 transition-colors hover:text-copper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="eyebrow">Contact</p>
            <address className="mt-5 space-y-3 text-[0.95rem] not-italic text-cream/80">
              <p>
                {site.address.street}
                <br />
                {site.address.region}
              </p>
              <p>
                <a href={site.phoneHref} className="transition-colors hover:text-copper">
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-copper"
                >
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div className="md:col-span-3">
            <p className="eyebrow">Hours</p>
            <dl className="mt-5 space-y-4">
              {openingHours.map((row) => (
                <div key={row.days}>
                  <dt className="text-[0.95rem] text-cream/80">{row.days}</dt>
                  <dd className="mt-0.5 text-sm text-sand">{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-xs tracking-wide text-sand/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Koregaon Park, Pune — Open all week for lunch &amp; dinner</p>
        </div>
      </Container>
    </footer>
  );
}
