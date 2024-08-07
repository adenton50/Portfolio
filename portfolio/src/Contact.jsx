import Navbar from "./Navbar";

export default function Contact({ setCurrentSection }) {
  return (
    <div>
      <Navbar
        currentSection={"contact"}
        setCurrentSection={setCurrentSection}
      />
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h1 className="text-5xl text-white font-medium mb-2 text-center">
            Contact
          </h1>
          <div className="flex justify-center mb-2">
            <div className="w-64 h-4 bg-orange-600 relative left-24 rounded"></div>
          </div>

          <p className="mb-8 lg:mb-16 font-light  text-gray-200 dark:text-gray-400 sm:text-xl">
            Have question or want to work together? Leave your details below and
            I'll get back to you as soon as possible.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <input
                type="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Name"
                required
              ></input>
            </div>
            <div>
              <input
                type="email"
                id="email"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="flex flex-end">
              {" "}
              <button
                type="submit"
                className="border-b-8 border-orange-500 text-3xl text-white px-4 py-2 tracking-wide focus:bg-orange-500 focus:text-white"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
