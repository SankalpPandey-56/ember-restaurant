"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { EASE_OUT_EXPO } from "@/lib/motion";

const ease = EASE_OUT_EXPO;

/** Staggered entrance for the hero content. */
const entrance = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};

const enter = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Gentle parallax: the photograph drifts slower than the page.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      aria-label="Welcome to EMBER"
      className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden"
    >
      {/* Photograph, drifting behind a dark vignette */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: imageY }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/hero.jpg"
          alt="The EMBER dining room at dusk, lit by the glow of the open fire"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink" />
        <div className="absolute inset-0 bg-ink/25" />
      </motion.div>

      <motion.div
        style={prefersReducedMotion ? undefined : { opacity: contentFade }}
        className="mx-auto w-full max-w-7xl px-5 pt-36 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32"
      >
        <motion.div
          variants={prefersReducedMotion ? undefined : entrance}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={enter}
            className="eyebrow flex items-center gap-3"
          >
            <span aria-hidden className="inline-block h-px w-10 bg-copper" />
            Koregaon Park, Pune
          </motion.p>

          <motion.h1
            variants={enter}
            className="mt-6 font-display text-[2.65rem] leading-[1.04] font-light tracking-[-0.015em] text-balance sm:text-6xl lg:text-7xl"
          >
            Fire, flavor, and everything between.
          </motion.h1>

          <motion.p
            variants={enter}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
          >
            Contemporary cuisine shaped by fire, seasonal ingredients, and a
            little obsession.
          </motion.p>

          <motion.div
            variants={enter}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/menu">Explore Menu</Button>
            <Button href="/contact#reserve" variant="outline">
              Reserve a Table
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute right-6 bottom-8 hidden items-center gap-3 text-cream/60 sm:right-10 md:flex lg:right-14"
      >
        <span className="text-[0.65rem] font-medium tracking-[0.3em] uppercase">Scroll</span>
        <motion.span
          animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={15} strokeWidth={1.5} aria-hidden />
        </motion.span>
      </motion.div>
    </section>
  );
}
