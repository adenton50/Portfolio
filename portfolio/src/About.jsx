import "boxicons";
import Navbar from "./Navbar";
import ReactLogo from "./ReactLogo";
import JavaScriptLogo from "./JavaScriptLogo";
import HTMLLogo from "./HTMLLogo";
import CSSLogo from "./CSSLogo";
import TailwindLogo from "./TailwindLogo";
import Bootstrap from "./Bootstrap";
import GitLogo from "./GitLogo";
export default function About({ currentSection }) {
  return (
    <div>
      <Navbar currentSection={currentSection} />
      <div className="flex justify-center items-center flex-col mt-8 px-16 gap-12">
        <div>
          <h1 className="text-5xl text-white font-medium mb-2 text-center">
            About
          </h1>
          <div className="w-64 h-4 bg-orange-600 relative left-24 rounded"></div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-48 text-orange-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <div className="w-1/2">
          <p className="text-white text-lg">
            As an aspiring front-end web developer, I am passionate about
            creating intuitive and visually appealing user interfaces that
            enhance user experiences. With a strong foundation in HTML, CSS, and
            JavaScript, I thrive on turning design concepts into responsive,
            functional web applications. I am continually exploring new
            technologies and frameworks to stay on the cutting edge of web
            development. My keen eye for detail, coupled with a commitment to
            writing clean and efficient code, drives me to build solutions that
            are both user-friendly and performant. I am excited to contribute my
            skills and creativity to innovative projects and collaborate with a
            team that shares my enthusiasm for building impactful digital
            experiences. My skills include:
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 p-4 w-1/2 mx-auto mt-8">
        <HTMLLogo />
        <CSSLogo />
        <JavaScriptLogo />
        <ReactLogo />
        <TailwindLogo />
        <Bootstrap />
        <GitLogo />
      </div>
    </div>
  );
}
