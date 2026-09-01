import HeroSection from "./components/HeroSection";
import Parteners from "./components/Parteners";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Parteners />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
