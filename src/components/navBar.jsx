import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "education",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "projects",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-purple-900 px-4 py-3">
      <div>
        <Link
          to="home"
          smooth
          duration={600}
          className="text-5xl font-signature ml-2 cursor-pointer flex flex-row"
        >
          Manash
        </Link>
      </div>
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-2 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center top-0 left-0 w-full absolute h-screen
       bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 capitalize text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={600}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
