import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Web3 from "./components/Web3";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="bg-[#020617] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Web3 />
      <Contact />
      
    </main>
  );
}

export default App;