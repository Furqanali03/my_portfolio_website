import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="bg-[#020617] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      

      {/* Temporary sections */}
     
      <section id="skills" className="min-h-screen bg-[#020617]" />
      <section id="projects" className="min-h-screen bg-[#020617]" />
      <section id="experience" className="min-h-screen bg-[#020617]" />
      <section id="web3" className="min-h-screen bg-[#020617]" />
      <section id="contact" className="min-h-screen bg-[#020617]" />
    </main>
  );
}

export default App;