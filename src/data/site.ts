export const site = {
  name: "EMBER",
  tagline: "Contemporary fire-grilled cuisine",
  description:
    "EMBER is a contemporary restaurant in Pune built around an open-fire kitchen — seasonal ingredients, bold flavours and the quiet theatre of the flame.",
  url: "https://ember-pune.com",
  phone: "+91 98220 44512",
  phoneHref: "tel:+919822044512",
  email: "reservations@ember-pune.com",
  address: {
    street: "42 Riverside Avenue",
    locality: "Koregaon Park",
    region: "Pune, Maharashtra",
    postalCode: "411001",
    country: "IN",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com/ember.pune" },
    { label: "Facebook", href: "https://facebook.com/ember.pune" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const openingHours = [
  { days: "Monday — Thursday", time: "12:00 PM – 11:00 PM" },
  { days: "Friday — Sunday", time: "12:00 PM – 12:00 AM" },
] as const;
