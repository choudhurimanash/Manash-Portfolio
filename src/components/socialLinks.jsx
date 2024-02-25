import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/manash-choudhuri",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/choudhurimanash",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto: manashchoudhuri4@gmail.com",
      style: "rounded-br-md",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: "/manash_choudhuri_CV.pdf",
    //   style: "rounded-br-md",
    //   download: true,
    // },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-gradient-to-r from-pink-500 to-yellow-500 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              // download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
