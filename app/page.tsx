import HeroSection from "./components/HeroSection";
import Parteners from "./components/Parteners";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

import staticData from "@/app/staticData";

const getData = async () => {
  try {
    const response = await fetch(
      "https://portfolio-backend-ftux.onrender.com/landing",
      { cache: "no-store" },
    );

    if (!response.ok) {
      return { data: staticData.data };
    }

    const data = await response.json();

    if (!data?.data) {
      return { data: staticData.data };
    }

    return data;
  } catch (err) {
    return { data: staticData.data };
  }
};

export default async function Home() {
  const data = await getData(); // Always safe now

  return (
    <>
      <Header />
      <HeroSection data={data.data.hero} />
      <Parteners />
      <About data={data.data.about} />
      <Services />
      <Projects data={data.data.projects} />
      <Contact data={data.data.contact} />
      <Footer />
    </>
  );
}
