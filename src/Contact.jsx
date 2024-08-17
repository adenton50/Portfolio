import Navbar from "./Navbar";
import { useState } from "react";
import React from "react";

export default function Contact({ setCurrentSection }) {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "04ea8494-68bf-45ce-a2ee-756ab8bc6335");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
      <Navbar
        currentSection={"contact"}
        setCurrentSection={setCurrentSection}
      />
      <section>
        <div className="px-4 mx-auto max-w-screen-md mt-8 mb-24">
          <h1 className="text-5xl text-white font-medium mb-2 text-center">
            Contact
          </h1>
          <div className="flex justify-center mb-2">
            <div className="w-32 md:w-64 h-4 bg-orange-600 relative left-24 rounded"></div>
          </div>

          <p className="mb-8 lg:mb-16 font-light  text-gray-200 sm:text-xl mt-24">
            Have question or want to work together? Leave your details below and
            I'll get back to you as soon as possible.
          </p>
          <form className="space-y-8" onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Name"
                required
              ></input>
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <textarea
                name="message"
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
          <span className="text-white">{result}</span>
        </div>
      </section>
    </div>
  );
}
