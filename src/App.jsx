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
      className=" bg-gradient-to-t from-[#e4e4e4f9] to-[#f1f0f0f9] h-screen overflow-y-scroll font-montserrat
    z-0 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#223333]/60"
    >
      {/* header */}
      <Header />
      {/* intro image nav */}
      <section title="introNav" id="introNav">
        <IntroNav />
      </section>
      {/* about */}
      <section title="about" id="about">
        <About />
      </section>
      {/* skills */}
      <section title="skills" id="skills">
        <Skills />{" "}
      </section>
      {/* projects */}
      <section title="projects" id="projects">
        <Projects />
      </section>
      {/* contact */}
      <section title="contact" id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
