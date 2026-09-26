"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { menu, inr } from "@/data/menu";
import { EASE_OUT_EXPO } from "@/lib/motion";

/**
 * Accessible tabs (WAI-ARIA): roving tabindex, arrow-key navigation and a
 * labelled panel. Only the active category is mounted, so panels animate
 * crisply without mounting the whole menu.
 */
export default function MenuPreview() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const prefersReducedMotion = useReducedMotion();
  const panelControls = useAnimationControls();
  const failsafeRef = useRef<number | null>(null);

  const active = menu.find((category) => category.id === activeId) ?? menu[0];

  useEffect(() => {
    return () => {
      if (failsafeRef.current !== null) window.clearTimeout(failsafeRef.current);
    };
  }, []);

  const selectCategory = (id: string) => {
    if (id === activeId) return;
    setActiveId(id);
    if (!prefersReducedMotion) {
      // Re-run the panel entrance imperatively. The start is deferred a tick,
      // and a failsafe guarantees visibility even if the animation never ticks.
      panelControls.set({ opacity: 0, y: 14 });
      requestAnimationFrame(() => {
        panelControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: EASE_OUT_EXPO },
        });
      });
      if (failsafeRef.current !== null) window.clearTimeout(failsafeRef.current);
      failsafeRef.current = window.setTimeout(() => {
        panelControls.set({ opacity: 1, y: 0 });
      }, 700);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const currentIndex = menu.findIndex((c) => c.id === activeId);
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % menu.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + menu.length) % menu.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = menu.length - 1;

    if (nextIndex === null) return;
    event.preventDefault();
    const nextCategory = menu[nextIndex];
    selectCategory(nextCategory.id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section aria-label="Menu preview" className="border-t border-line bg-raised">
      <Container className="py-24 sm:py-32 lg:py-40">
        <SectionHeading
          eyebrow="03 — The Menu"
          title="An evening at EMBER"
          lede="A snapshot of the current menu. It changes with the market — the fire decides."
        />

        {/* Category tabs */}
        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Menu categories"
            onKeyDown={onKeyDown}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-line lg:mt-14"
          >
            {menu.map((category, index) => {
              const selected = category.id === activeId;
              return (
                <button
                  key={category.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  role="tab"
                  id={`${baseId}-tab-${category.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${category.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectCategory(category.id)}
                  className={`relative pb-4 text-[0.72rem] font-medium tracking-[0.22em] uppercase transition-colors duration-300 ${
                    selected ? "text-cream" : "text-sand hover:text-cream"
                  }`}
                >
                  {category.label}
                  {selected && (
                    <motion.span
                      layoutId="menu-preview-active-tab"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { duration: 0.45, ease: EASE_OUT_EXPO }
                      }
                      className="absolute inset-x-0 -bottom-px h-px bg-copper"
                      aria-hidden
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active panel */}
        <div
          role="tabpanel"
          id={`${baseId}-panel-${active.id}`}
          aria-labelledby={`${baseId}-tab-${active.id}`}
          tabIndex={0}
          className="mt-4 focus-visible:outline-0"
        >
          {/* Imperative entrance keeps the swap consistent across engines. */}
          <motion.div
            animate={panelControls}
            initial={false}
            className="grid gap-x-16 md:grid-cols-2"
          >
              <div>
                <p className="mt-8 text-sm leading-relaxed text-sand italic md:mt-10">
                  {active.blurb}
                </p>
                <ul className="mt-6">
                  {active.items.slice(0, 3).map((item) => (
                    <MenuRow key={item.name} item={item} />
                  ))}
                </ul>
              </div>
              <div>
                <ul className="md:mt-18">
                  {active.items.slice(3).map((item) => (
                    <MenuRow key={item.name} item={item} />
                  ))}
                </ul>
                <div className="mt-10 hidden md:block">
                  <Link
                    href="/menu"
                    className="link-underline inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.22em] text-cream uppercase"
                  >
                    Full menu
                    <span aria-hidden className="text-copper">→</span>
                  </Link>
                </div>
              </div>
          </motion.div>
        </div>

        <div className="mt-10 md:hidden">
          <Link
            href="/menu"
            className="link-underline inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.22em] text-cream uppercase"
          >
            Full menu
            <span aria-hidden className="text-copper">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

function MenuRow({
  item,
}: {
  item: (typeof menu)[number]["items"][number];
}) {
  return (
    <li className="group border-b border-line/60 py-5 transition-colors last:border-b-0 hover:border-copper/40">
      <div className="flex items-baseline gap-4">
        <h3 className="font-display text-[1.05rem] leading-snug text-cream transition-colors duration-300 group-hover:text-copper">
          {item.name}
        </h3>
        {/* Dotted leader between name and price, the way menus are printed */}
        <span aria-hidden className="hidden flex-1 translate-y-[-3px] border-b border-dotted border-sand/40 sm:block" />
        <p className="shrink-0 font-display text-[1.05rem] text-copper/90">
          {inr(item.price)}
        </p>
      </div>
      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-sand">
        {item.description}
      </p>
      {item.tags && item.tags.length > 0 && (
        <p className="mt-2 flex gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="border border-line px-1.5 py-0.5 text-[0.6rem] font-medium tracking-[0.14em] text-sand"
            >
              {tag}
            </span>
          ))}
        </p>
      )}
    </li>
  );
}
