import Navbar from "./Navbar";

export default function Projects({ setCurrentSection }) {
  return (
    <div>
      <Navbar
        currentSection={"projects"}
        setCurrentSection={setCurrentSection}
      />
    </div>
  );
}
