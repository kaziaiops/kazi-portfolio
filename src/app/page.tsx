import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FilmstripGallery from "@/components/FilmstripGallery";
import About from "@/components/About";
import Pipeline from "@/components/Pipeline";
import MotionLoader from "@/components/motion/MotionLoader";
import Faq from "@/components/Faq";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FilmstripGallery />
        <About />
        <Pipeline />
        <Faq />
        <Resume />
        <Contact />
      </main>
      <MotionLoader />
    </>
  );
}
