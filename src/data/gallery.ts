export type GalleryImage = {
  src: string;
  alt: string;
  /** Editorial captions, used sparingly in the grid. */
  caption?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery-interior.jpg",
    alt: "Warmly lit dining room with banquettes and low pendant lighting",
    caption: "The dining room",
  },
  {
    src: "/images/gallery-chef.jpg",
    alt: "Chef plating a dish at the pass during evening service",
    caption: "Service, 8pm",
  },
  {
    src: "/images/gallery-fire.jpg",
    alt: "Open-fire kitchen glowing with embers behind the line",
    caption: "The hearth",
  },
  {
    src: "/images/gallery-grill.jpg",
    alt: "Cut of beef searing over open flame on the grill",
  },
  {
    src: "/images/gallery-dining.jpg",
    alt: "Table set for dinner with wine glasses and candlelight",
  },
  {
    src: "/images/gallery-wine.jpg",
    alt: "Pouring a glass of low-intervention red wine",
    caption: "Cellar picks",
  },
];
