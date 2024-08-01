import { ReactTyped } from "react-typed";

export default function Title() {
  const text = "Hello, I'm Adam. I'm an aspiring front end developer.";

  return (
    <div>
      <h1 className="text-white text-4xl mb-16 text-center font-typewriter">
        <ReactTyped
          strings={["Hello, I'm Adam. I'm an aspiring front end developer."]}
          typeSpeed={100}
        />
      </h1>
    </div>
  );
}
