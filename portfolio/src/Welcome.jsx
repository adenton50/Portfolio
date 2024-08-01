import Title from "./Title";

export default function Welcome({ setCurrentSection }) {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-96">
      <Title />
      <button
        type="button"
        className="border-4 border-red-600 rounded-md px-8 py-4 text-red-600 text-xl hover:shadow-red-2xl transition-shadow duration-300"
        onClick={() => {
          setCurrentSection("about");
        }}
      >
        View my work
      </button>
    </div>
  );
}
