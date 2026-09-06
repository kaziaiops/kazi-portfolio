import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FilmstripGallery from "@/components/FilmstripGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FilmstripGallery />
        <About />
        <Contact />
      </main>
    </>
  );
}
