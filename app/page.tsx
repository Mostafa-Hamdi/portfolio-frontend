import HeroSection from "./components/HeroSection";
import Parteners from "./components/Parteners";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
const getData = async () => {
  try {
    const response = await fetch(
      "https://portfolio-backend-ftux.onrender.com/landing",
    );
    const data = await response.json();
    return data;
  } catch (Err) {
    console.log(Err);
  }
};
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <Header />
      <HeroSection data={data?.data?.hero} />
      <Parteners />
      <About data={data?.data?.about} />
      <Services />
      <Projects data={data?.data?.projects} />
      <Contact data={data?.data?.contact} />
      <Footer />
    </>
  );
}
