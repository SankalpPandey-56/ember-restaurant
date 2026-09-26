import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
};

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300";

const variants: Record<Variant, string> = {
  solid:
    "bg-cream text-ink hover:bg-copper hover:text-ink",
  outline:
    "border border-cream/30 text-cream hover:border-copper hover:text-copper",
};

/**
 * Squared-corner button — the brand never uses pills. Renders a next/link for
 * internal hrefs and a plain anchor for external/anchor targets.
 */
export default function Button({
  children,
  href,
  variant = "solid",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isInternal = href.startsWith("/") && !href.startsWith("//");

  if (isInternal) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
