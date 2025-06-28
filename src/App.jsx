import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Sajan Vaidhyanathan</div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        &copy; {new Date().getFullYear()} Sajan Vaidhyanathan. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
