"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before animating in. */
  delay?: number;
  /** Pure vertical distance in px. */
  y?: number;
  className?: string;
  /** Reveal every time on scroll, not just the first entry. */
  once?: boolean;
};

/**
 * Scroll-into-view fade/rise. Renders plain children when the visitor prefers
 * reduced motion, so the page is complete without animation.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}
