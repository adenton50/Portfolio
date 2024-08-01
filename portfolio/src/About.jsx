import "boxicons";
export default function About() {
  return (
    <div>
      <nav className="flex items-center justify-center bg-gray-200 h-16">
        <ul className="flex flex-row justify-evenly w-1/2 font-medium text-lg">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Projects</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
      <div className="flex justify-center items-center flex-col mt-16 px-16 gap-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-48 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <p className="text-white">
          As an aspiring front-end web developer, I am passionate about creating
          intuitive and visually appealing user interfaces that enhance user
          experiences. With a strong foundation in HTML, CSS, and JavaScript, I
          thrive on turning design concepts into responsive, functional web
          applications. I am continually exploring new technologies and
          frameworks to stay on the cutting edge of web development. My keen eye
          for detail, coupled with a commitment to writing clean and efficient
          code, drives me to build solutions that are both user-friendly and
          performant. I am excited to contribute my skills and creativity to
          innovative projects and collaborate with a team that shares my
          enthusiasm for building impactful digital experiences.
        </p>
      </div>
    </div>
  );
}
