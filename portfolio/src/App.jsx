import { useState } from "react";
import "./App.css";
import Welcome from "./Welcome";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [currentSection, setCurrentSection] = useState("welcome");
  return (
    <div>
      {currentSection === "welcome" && (
        <Welcome setCurrentSection={setCurrentSection} />
      )}
      {currentSection === "about" && <About currentSection={currentSection} />}
      {currentSection === "projects" && <Projects />}
      {currentSection === "contact" && <Contact />}
    </div>
  );
}

export default App;
