import "./App.css";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import IntroNav from "./sections/IntroNav";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div
      className="bg-[#efededf9]  h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden font-montserrat
    z-0 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#223333]/60"
    >
      {/* header */}
      <Header />
      {/* intro image nav */}
      <section title="introNav" id="introNav" className="snap-center">
        <IntroNav />
      </section>
      {/* about */}
      <section title="about" id="about" className="snap-center">
        <About />
      </section>
      {/* skills */}
      <section title="skills" id="skills" className="snap-center">
        <Skills />{" "}
      </section>
      {/* projects */}
      <section title="projects" id="projects" className="snap-start">
        <Projects />
      </section>
      {/* contact */}
      <section title="contact" id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}

export default App;
