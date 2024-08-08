import Navbar from "./Navbar";

export default function Contact({ setCurrentSection }) {
  return (
    <div>
      <Navbar
        currentSection={"contact"}
        setCurrentSection={setCurrentSection}
      />
      <section>
        <div className="px-4 mx-auto max-w-screen-md mt-8">
          <h1 className="text-5xl text-white font-medium mb-2 text-center">
            Contact
          </h1>
          <div className="flex justify-center mb-2">
            <div className="w-64 h-4 bg-orange-600 relative left-24 rounded"></div>
          </div>

          <p className="mb-8 lg:mb-16 font-light  text-gray-200 sm:text-xl mt-24">
            Have question or want to work together? Leave your details below and
            I'll get back to you as soon as possible.
          </p>
          <form className="space-y-8">
            <div>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Name"
                required
              ></input>
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="flex">
              {" "}
              <button
                type="submit"
                className="border-b-8 border-orange-600 text-3xl text-white px-4 py-2 tracking-wide ml-auto"
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
