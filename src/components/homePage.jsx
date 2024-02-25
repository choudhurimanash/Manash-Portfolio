import React from "react";
import MyImage from "../assets/myImg.png";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
// import { Link } from "react-scroll";

function HomePage() {
  return (
    <div
      name="home"
      className="w-full h-screen   bg-gradient-to-b via-black  from-purple-800 to-yellow-800 "
    >
      <div
        className="max-w-screen-lg mx-auto  flex flex-col
      justify-center items-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-white text-2xl font-semibold pb-2">Hello!</h3>
          <h2 className=" text-3xl sm:text-7xl font-medium text-white sm:pt-24 md:pt-0">
            <span className="font-light md:text-4xl sm:text-2xl">I'm</span> Manash Choudhuri
          </h2>
          <p className="py-4 max-w-md text-gray-300">
            As an <span className="bg-red-500 text-white p-1 rounded-xl font-medium">M.Sc Computer Science</span> student with a focus on Machine Learning
            and Deep Learning, I am adept in web development and bring a fresh
            perspective to my work. I am excited about sharing my knowledge
            through teaching.
          </p>
          <div>
            <a
              href="/manash_choudhuri_CV.pdf"
              download={true}
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
            bg-gradient-to-r from-pink-500 to-yellow-500 cursor-pointer font-medium hover:scale-100 duration-300"
            >
              Resume
              {/* <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardDoubleArrowRight size={20} className="ml-1" />
              </span> */}
              <span>
                <FaDownload size={16} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src={MyImage}
            alt="my_image"
            className=" md:w-full mx-auto w-1/2 border-white border-t-4 border-r-4 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
