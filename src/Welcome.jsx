import DownArrow from "./DownArrow";
import Title from "./Title";

export default function Welcome({ setCurrentSection }) {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-48 md:mt-96">
      <Title />
      <button
        type="button"
        className="flex flex-row items-center gap-2 border-4 border-orange-600 rounded-md px-8 py-4 text-orange-500 text-xl hover:shadow-red-2xl transition-shadow duration-300"
        onClick={() => {
          setCurrentSection("about");
        }}
      >
        View my work
        <DownArrow />
      </button>
    </div>
  );
}