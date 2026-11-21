import Navigation from "@/components/Navigation";
import BackgroundEffects from "@/components/BackgroundEffects";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navigation />
      <main id="main-content">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Work />
        <Stack />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}