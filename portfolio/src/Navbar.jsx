export default function Navbar({ currentSection, setCurrentSection }) {
  return (
    <div>
      <nav className="flex items-center justify-center bg-gray-700 h-16">
        <ul className="flex flex-row justify-evenly w-1/2 font-medium text-lg">
          <li
            onClick={() => {
              setCurrentSection("welcome");
            }}
            className="hover:text-orange-500 text-white cursor-pointer "
          >
            Home
          </li>

          <li
            onClick={() => {
              setCurrentSection("about");
            }}
            className={`hover:text-orange-500 cursor-pointer ${
              currentSection === "about"
                ? "font-bold text-orange-500"
                : "text-white"
            }`}
          >
            About
          </li>

          <li
            onClick={() => {
              setCurrentSection("projects");
            }}
            className={`hover:text-orange-500 cursor-pointer ${
              currentSection === "projects"
                ? "font-bold text-orange-500"
                : "text-white"
            }`}
          >
            Projects
          </li>

          <li
            onClick={() => {
              setCurrentSection("contact");
            }}
            className={`hover:text-orange-500 cursor-pointer ${
              currentSection === "contact"
                ? "font-bold text-orange-500"
                : "text-white"
            }`}
          >
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}
