"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { EASE_OUT_EXPO } from "@/lib/motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // The navbar sits over the hero on the home page, so it starts transparent
  // and picks up a solid ground once the visitor scrolls.
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line bg-ink/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="EMBER — home"
          onClick={closeMenu}
          className="font-display text-xl font-medium tracking-[0.32em] text-cream transition-colors hover:text-copper sm:text-2xl"
        >
          EMBER
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`link-underline text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                      active ? "text-copper" : "text-cream/80 hover:text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact#reserve"
            className="hidden items-center border border-cream/30 px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:border-copper hover:text-copper md:inline-flex"
          >
            Reserve a Table
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center text-cream transition-colors hover:text-copper md:hidden"
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0.01 }
                : { duration: 0.45, ease: EASE_OUT_EXPO }
            }
            className="overflow-hidden border-t border-line bg-ink md:hidden"
          >
            <nav aria-label="Mobile" className="px-5 pb-10 pt-4 sm:px-8">
              <ul className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.06, duration: 0.4, ease: EASE_OUT_EXPO }}
                    className="border-b border-line/60 last:border-b-0"
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={
                        (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                          ? "page"
                          : undefined
                      }
                      className="flex items-baseline justify-between py-4 font-display text-3xl font-light text-cream transition-colors hover:text-copper"
                    >
                      {link.label}
                      <span className="font-sans text-[0.65rem] tracking-[0.2em] text-sand">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <Link
                href="/contact#reserve"
                onClick={closeMenu}
                className="mt-8 flex items-center justify-center bg-cream px-5 py-4 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-copper"
              >
                Reserve a Table
              </Link>

              <p className="mt-8 text-sm text-sand">
                {site.address.street}, {site.address.region}
                <br />
                <a href={site.phoneHref} className="mt-1 inline-block text-cream/80 hover:text-copper">
                  {site.phone}
                </a>
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
