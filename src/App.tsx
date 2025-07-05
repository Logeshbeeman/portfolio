import React, { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import SplashCursor from './components/SplashCursor';
import Crosshair from './components/Crosshair'; // Capitalized filename
import './App.css';

function App() {
  const containerRef = useRef<HTMLDivElement>(null); // ✅ Properly typed

  return (
    <div className="App">
      {/* Crosshair needs to be over the container */}
      <div ref={containerRef}>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

      {/* Optional cursor */}
      {/* <SplashCursor /> */}

      <Crosshair containerRef={containerRef} color="#fff" />
    </div>
  );
}

export default App;
 