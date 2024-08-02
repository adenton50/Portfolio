import { ReactTyped } from "react-typed";

export default function Title() {
  return (
    <div>
      <h1 className="text-white text-5xl mb-16 text-center font-typewriter">
        <ReactTyped
          strings={[
            "Hello, I'm <span>Adam</span>. I'm an aspiring front end developer.",
          ]}
          typeSpeed={100}
        />
      </h1>
    </div>
  );
}
