import { useState } from "react";
import "./App.css";
import Welcome from "./Welcome";
import About from "./About";

function App() {
  const [currentSection, setCurrentSection] = useState("welcome");
  return (
    <div>
      {currentSection === "welcome" && (
        <Welcome setCurrentSection={setCurrentSection} />
      )}
      {currentSection === "about" && <About />}
    </div>
  );
}

export default App;
