import HeroSection from "./components/HeroSection";
import Parteners from "./components/Parteners";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Parteners />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}
