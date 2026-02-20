import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Education from "./components/Education";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import BandaidGame from "./components/BandaidGame";

export default function Home() {
  return (
    <div className="lg:flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-80">
        <About />
        <Education />
        <Research />
        <Experience />
        <Leadership />
        <Contact />
      </main>
      <BandaidGame />
    </div>
  );
}
