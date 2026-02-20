import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import MedMatch from "./components/MedMatch";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Experience />
        <Leadership />
        <MedMatch />
        <Contact />
      </main>
    </>
  );
}
