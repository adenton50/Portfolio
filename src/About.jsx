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
      <div className="flex justify-center items-center flex-col mt-8 px-4 md:px-16 gap-12">
        <div>
          <h1 className="text-5xl text-white font-medium mb-2 text-center">
            About
          </h1>
          <div className="w-32 md:w-64 h-4 bg-orange-600 relative left-24 rounded"></div>
        </div>
        <UserIcon />
        <div className="md:w-1/2">
          <p className="text-white md:text-lg font-light">
            Transitioning from a manufacturing background to pursuing a career
            as a front-end developer has been a transformative journey for me.
            My experience in manufacturing taught me the value of precision,
            problem-solving, and efficiency—skills that have seamlessly
            translated into coding. Driven by a fascination with technology and
            a desire to create visually compelling and user-friendly web
            experiences, I embarked on a self-taught coding journey. Through
            dedicated study and hands-on projects, I’ve gained proficiency in
            HTML, CSS, JavaScript, React, Tailwind, Bootstrap and Git. Learning
            to craft responsive and dynamic web interfaces. This shift from a
            hands-on, mechanical environment to the abstract and creative realm
            of coding has not only expanded my skill set but also ignited a
            passion for designing intuitive digital experiences. As an aspiring
            front-end developer, I am excited to leverage my background in
            manufacturing to bring a unique perspective and strong
            problem-solving skills to the tech industry.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-4 md:w-1/2 mx-auto mt-8 mb-8">
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
