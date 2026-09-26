import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import SignatureDishes from "@/components/home/SignatureDishes";
import MenuPreview from "@/components/home/MenuPreview";
import Gallery from "@/components/home/Gallery";
import Story from "@/components/home/Story";
import Testimonials from "@/components/home/Testimonials";
import Visit from "@/components/home/Visit";
import ReservationCTA from "@/components/home/ReservationCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <SignatureDishes />
      <MenuPreview />
      <Gallery />
      <Story />
      <Testimonials />
      <Visit />
      <ReservationCTA />
    </>
  );
}
