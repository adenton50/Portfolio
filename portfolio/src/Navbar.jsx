export default function Navbar({ currentSection }) {
  return (
    <div>
      <nav className="flex items-center justify-center bg-gray-700 h-16">
        <ul className="flex flex-row justify-evenly w-1/2 font-medium text-lg">
          <a href="#">
            <li className="hover:text-orange-500 text-white ">Home</li>
          </a>
          <a href="#">
            <li
              className={`hover:text-orange-500 ${
                currentSection === "about"
                  ? "font-bold text-orange-500"
                  : "text-white"
              }`}
            >
              About
            </li>
          </a>
          <a href="#">
            <li
              className={`hover:text-orange-500 ${
                currentSection === "projects"
                  ? "font-bold text-orange-500"
                  : "text-white"
              }`}
            >
              Projects
            </li>
          </a>
          <a href="#">
            <li
              className={`hover:text-orange-500 ${
                currentSection === "contact"
                  ? "font-bold text-orange-500"
                  : "text-white"
              }`}
            >
              Contact
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
