import Navbar from "./Navbar";

export default function Projects({ setCurrentSection }) {
  return (
    <div className="text-white">
      <Navbar
        currentSection={"projects"}
        setCurrentSection={setCurrentSection}
      />
      <div>
        <div className="flex justify-center items-center flex-col mt-8 px-16">
          <h1 className="text-5xl font-medium mb-2 text-center">Projects</h1>
          <div className="w-32 md:w-64 h-4 bg-orange-600 relative left-24 rounded"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-32 md:w-3/5 mx-auto mt-16 mb-8 px-4">
        <div className="flex gap-4 flex-col">
          <img src="images/foodapp.PNG"></img>
          <h2 className="text-2xl underline">Adam's Recipe App</h2>
          <p>
            The Adam's Recipe App is designed to help users discover, save, and
            organize their favorite recipes. Built with React, this app features
            a dynamic and interactive interface for browsing and managing
            recipes.
          </p>
          <button
            type="button"
            className="border-4 border-orange-600 rounded-md px-4 py-2 md:px-8 md:py-4 text-orange-500 text-md md:text-xl hover:shadow-red-2xl transition-shadow duration-300 w-2/5 md:w-1/6"
          >
            View App
          </button>
        </div>
        <div className="flex gap-4 flex-col">
          <img src="images/movieapp.png"></img>
          <h2 className="text-2xl underline">AdaMDb App</h2>
          <p>
            As a passionate movie enthusiast, I developed the AdaMDb Movie App
            to help you explore and evaluate films before watching them. This
            app allows you to search for movies and gain insights into their
            quality, helping you make informed decisions about what to watch
            next.
          </p>
          <button
            type="button"
            className="border-4 border-orange-600 rounded-md px-4 py-2 md:px-8 md:py-4 text-orange-500 text-md md:text-xl hover:shadow-red-2xl transition-shadow duration-300 w-2/5 md:w-1/6"
          >
            View App
          </button>
        </div>
        <div className="flex gap-4 flex-col">
          <img src="images/newsapp.png"></img>
          <h2 className="text-2xl underline">Adam's News Letter</h2>
          <p>
            I created the Adam's News Letter App to keep you updated with the
            latest headlines and top stories. Whether you're interested in the
            most current news in the US or want to search for specific topics,
            this app provides real-time access to a wide range of news articles.
          </p>
          <button
            type="button"
            className="border-4 border-orange-600 rounded-md px-4 py-2 md:px-8 md:py-4 text-orange-500 text-md md:text-xl hover:shadow-red-2xl transition-shadow duration-300 w-2/5 md:w-1/6"
          >
            View App
          </button>
        </div>
        <div className="flex gap-4 flex-col">
          <img src="images/weatherapp.png"></img>
          <h2 className="text-2xl underline">Adam's Weather Forecast</h2>
          <p>
            I designed the Adam's Weather Forecast to give you accurate and
            timely weather information. Whether you want to check the current
            conditions, forecast for the week, or search for weather updates in
            specific locations, this app delivers real-time data and detailed
            forecasts.
          </p>
          <button
            type="button"
            className="border-4 border-orange-600 rounded-md px-4 py-2 md:px-8 md:py-4 text-orange-500 text-md md:text-xl hover:shadow-red-2xl transition-shadow duration-300 w-2/5 md:w-1/6"
          >
            View App
          </button>
        </div>
      </div>
    </div>
  );
}
