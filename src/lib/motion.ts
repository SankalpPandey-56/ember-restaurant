import type { Variants } from "framer-motion";

/**
 * A slow, expensive-feeling ease. Used for every reveal on the site so the
 * motion language stays consistent.
 */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** Standard scroll reveal: slight rise + fade. Understated on purpose. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT_EXPO, delay },
  }),
};

/** Stagger container for lists of small items (menu rows, testimonials). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};
