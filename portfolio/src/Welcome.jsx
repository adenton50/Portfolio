import Title from "./Title";

export default function Welcome({ setCurrentSection }) {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-96">
      <Title />
      <button
        type="button"
        className="flex flex-row items-center gap-2 border-4 border-red-600 rounded-md px-8 py-4 text-red-500 text-xl hover:shadow-red-2xl transition-shadow duration-300"
        onClick={() => {
          setCurrentSection("about");
        }}
      >
        View my work
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </button>
    </div>
  );
}
