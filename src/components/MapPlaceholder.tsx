/**
 * Static, decorative map stand-in. A production deployment would swap this for
 * Mapbox or Google Maps — it is intentionally offline-friendly and accessible.
 */
export default function MapPlaceholder({
  className = "",
  label = "Stylised map placeholder showing EMBER's location in Koregaon Park, Pune",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative w-full overflow-hidden border border-line bg-raised ${className}`}
    >
      {/* Faint street grid */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.16]"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="#f2ebdd" strokeWidth="1" fill="none">
          <path d="M0 60 H400 M0 140 H400 M0 220 H400" />
          <path d="M80 0 V300 M180 0 V300 M290 0 V300" />
          <path d="M0 100 L400 190" strokeWidth="1.6" />
        </g>
      </svg>
      {/* The pin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="mx-auto block h-2.5 w-2.5 rounded-full bg-copper shadow-[0_0_0_6px_rgba(201,138,75,0.25)]" />
        <span className="mt-3 block font-display text-sm tracking-[0.28em] text-cream">EMBER</span>
        <span className="mt-1 block text-[0.65rem] tracking-[0.18em] text-sand uppercase">
          Riverside Avenue
        </span>
      </div>
      <span className="absolute right-4 bottom-4 text-[0.6rem] tracking-[0.2em] text-sand/70 uppercase">
        Map — 18.5362° N, 73.8939° E
      </span>
    </div>
  );
}
