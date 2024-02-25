import React from "react";
import {FaEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const FooterPage = () => {
  return (
    <div>
      <footer className="bg-purple-800 text-white p-4 text-center">
       <p className="text-center text-red-100 font-medium md:mx-60 sm:mx-auto">Thank you for taking the time to learn more about me and my skills. If you would like to get in touch, please do not hesitate to contact me via the details mention below. Thank you...</p>
        <div className="flex flex-row justify-center mt-2">
          <IoCall className="text-2xl mx-1" />{" "}
          <p>8638968145</p>
        </div>
        <div className="flex flex-row justify-center mt-2">
          <FaWhatsapp className="text-2xl mx-1" />{" "}
          <p>7638818124</p>
        </div>
        <div className="flex flex-row justify-center mt-2">
          <FaEnvelope className="text-2xl mx-1" />{" "}
          <p>manashchoudhuri4@gmail.com</p>
        </div>
        <p className="mt-4 text-yellow-400">Designed & Developed by Manash Choudhuri | &copy;2023</p>
        
        <div className="mt-4 flex justify-center space-x-4">
          {/* <a
            href="https://github.com/choudhurimanash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/manash-choudhuri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl" />
          </a> */}
          {/* <a
          href="mailto: manashchoudhuri4@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="text-2xl" />
        </a> */}
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;
