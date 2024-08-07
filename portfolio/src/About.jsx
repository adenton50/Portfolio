import "boxicons";
import Navbar from "./Navbar";
import ReactLogo from "./ReactLogo";
import JavaScriptLogo from "./JavaScriptLogo";
import HTMLLogo from "./HTMLLogo";
import CSSLogo from "./CSSLogo";
import TailwindLogo from "./TailwindLogo";
import Bootstrap from "./Bootstrap";
import GitLogo from "./GitLogo";
import UserIcon from "./UserIcon";
export default function About({ currentSection, setCurrentSection }) {
  return (
    <div>
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <div className="flex justify-center items-center flex-col mt-8 px-16 gap-12">
        <div>
          <h1 className="text-5xl text-white font-medium mb-2 text-center">
            About
          </h1>
          <div className="w-64 h-4 bg-orange-600 relative left-24 rounded"></div>
        </div>
        <UserIcon />
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
