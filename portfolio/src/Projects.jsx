import Navbar from "./Navbar";

export default function Projects({ setCurrentSection }) {
  return (
    <div>
      <Navbar
        currentSection={"projects"}
        setCurrentSection={setCurrentSection}
      />
      <div>
        <div className="flex justify-center items-center flex-col mt-8 px-16">
          <h1 className="text-5xl text-white font-medium mb-2 text-center">
            Projects
          </h1>
          <div className="w-64 h-4 bg-orange-600 relative left-24 rounded"></div>
        </div>
      </div>
    </div>
  );
}
