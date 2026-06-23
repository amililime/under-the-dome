import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Domes from "@/components/Domes";
import Gallery from "@/components/Gallery";
import Nearby from "@/components/Nearby";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experiences />
        <Domes />
        <Gallery />
        <Nearby />
        <Testimonials />
        <Booking />
        <Location />
      </main>
      <Footer />
    </>
  );
}
