import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  /** Small caps label, e.g. "01 — Signature". */
  eyebrow: string;
  title: ReactNode;
  /** Optional supporting paragraph, constrained for readability. */
  lede?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl leading-[1.12] font-light tracking-[-0.01em] text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed text-sand sm:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
