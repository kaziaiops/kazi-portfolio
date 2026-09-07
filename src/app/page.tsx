import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FilmstripGallery from "@/components/FilmstripGallery";
import About from "@/components/About";
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
        <Resume />
        <Contact />
      </main>
    </>
  );
}
