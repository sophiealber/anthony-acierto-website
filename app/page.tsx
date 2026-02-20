import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import BandaidGame from "./components/BandaidGame";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Research />
        <Leadership />
        <Contact />
      </main>
      <BandaidGame />
    </>
  );
}
