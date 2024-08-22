import { useEffect, useState } from "react";
import DownArrow from "./DownArrow";
import Title from "./Title";

export default function Welcome({ setCurrentSection }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 8000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-72 md:mt-96 px-3">
      <Title />
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          type="button"
          className="flex flex-row items-center gap-2 border-4 border-orange-600 rounded-md px-4 py-2 md:px-8 md:py-4 text-orange-500 text-xl hover:shadow-red-2xl transition-shadow duration-300"
          onClick={() => {
            setCurrentSection("about");
          }}
        >
          View my work
          <DownArrow />
        </button>
      </div>
    </div>
  );
}
