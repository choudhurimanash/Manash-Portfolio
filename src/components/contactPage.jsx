import React from "react";

function ContactPage() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b  via-black from-pink-800 to-purple-800  text-white"
    >
      <div className=" flex flex-col justify-center py-80 max-w-screen-lg mx-auto  h-full">
        <div className="pb-8 text-center  ">
          <p className="text-4xl font-bold border-b-4 border-pink-300  inline">
            Contact
          </p>
          <p className="py-4">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/2bee39b5-08c2-46d3-84b2-fa1dc2db179d"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 border-2 rounded-md bg-transparent
                focus:outline-none text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 border-2 rounded-md bg-transparent
                focus:outline-none text-white"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              className="p-2 border-2 rounded-md bg-transparent
                focus:outline-none text-white"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-purple-500 to-pink-500
                px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
