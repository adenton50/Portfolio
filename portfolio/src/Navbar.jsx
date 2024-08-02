export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-center bg-gray-700 h-16">
        <ul className="flex flex-row justify-evenly w-1/2 font-medium text-lg text-white ">
          <a href="#">
            <li className="hover:text-orange-500">Home</li>
          </a>
          <a href="#">
            <li className="hover:text-orange-500">About</li>
          </a>
          <a href="#">
            <li className="hover:text-orange-500">Projects</li>
          </a>
          <a href="#">
            <li className="hover:text-orange-500">Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
