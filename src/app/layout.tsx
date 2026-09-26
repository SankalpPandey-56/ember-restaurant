import type { Metadata, Viewport } from "next";
import { Fraunces, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { restaurantJsonLd } from "@/lib/schema";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ember-pune.com"),
  title: {
    default: "EMBER — Contemporary Fire-Grilled Restaurant in Pune",
    template: "%s — EMBER",
  },
  description:
    "EMBER is a contemporary restaurant in Pune built around an open-fire kitchen — seasonal ingredients, bold flavours and the quiet theatre of the flame.",
  keywords: [
    "fire-grilled restaurant Pune",
    "contemporary restaurant Pune",
    "open-fire kitchen",
    "Koregaon Park restaurant",
    "fine dining Pune",
  ],
  openGraph: {
    type: "website",
    siteName: "EMBER",
    title: "EMBER — Contemporary Fire-Grilled Restaurant in Pune",
    description:
      "Open-fire cooking, seasonal ingredients, contemporary technique. Koregaon Park, Pune.",
    locale: "en_IN",
    images: [{ url: "/images/hero.jpg", width: 2400, height: 1600, alt: "The EMBER dining room glowing at dusk" }],
    // /opengraph-image (file convention) adds a generated branded card per route.
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#131009",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jost.variable}`}>
      <body className="flex min-h-screen flex-col bg-ink text-cream">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </body>
    </html>
  );
}
