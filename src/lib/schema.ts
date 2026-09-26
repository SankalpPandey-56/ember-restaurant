import { site } from "@/data/site";

/** Restaurant structured data rendered once in the root layout. */
export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  servesCuisine: ["Contemporary", "Fire-grilled", "Seasonal"],
  priceRange: "₹₹₹",
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5362,
    longitude: 73.8939,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "24:00",
    },
  ],
  sameAs: site.socials.map((s) => s.href),
};
