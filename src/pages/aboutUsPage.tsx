import Experience from "../components/aboutUs.tsx/experience";
import { Hero } from "../components/aboutUs.tsx/hero";
import { Values } from "../components/aboutUs.tsx/values";
import { Visit } from "../components/aboutUs.tsx/visit";
import { Navbar } from "../layout/navbar";
import Footer from "../layout/footer";

const About = () => {
  return (
    <main className="bg-[#151419]">
      <Navbar />
      <Hero />
      <Experience />
      <Values />
      <Visit />
      <Footer />
    </main>
  );
};

export default About;
