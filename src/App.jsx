
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(() => {}, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-20 h-full w-full">
        <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>      
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true, 
            zIndex: -1,
          },
          particles: {
            number: {
              value: 1000, 
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff", 
            },
            shape: {
              type: "circle", 
            },
            opacity: {
              value: 0.8, 
            },
            size: {
              value: { min: 0.0001, max: 0.5 },
            },
            move: {
              enable: true,
              speed: 0.5, 
            },
          },
        }}
      />

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;

