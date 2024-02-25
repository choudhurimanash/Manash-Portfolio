import React from "react";
import aa from "../assets/aa.jpg";

function ProjectsPage() {
  const portfolios = [
    {
      id: 1,
      src: aa,
    },
    {
      id: 2,
      src: aa,
    },
    {
      id: 3,
      src: aa,
    },
    {
      id: 4,
      src: aa,
    },
    {
      id: 5,
      src: aa,
    },
    {
      id: 6,
      src: aa,
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b via-black  from-yellow-800 to-pink-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg py-80 mx-auto flex flex-col justify-center w-ful h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-300">
            Projects
          </p>
          <p className="py-4">Check out some of my work right here!</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4
          px-6 sm:px-0"
        >
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-yellow-300 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center ">
                <button className="w-1/2 px-3 py-1 duration-200 hover:scale-105 m-4  rounded-md
            bg-gradient-to-r from-pink-500 to-purple-500">
                  Demo
                </button>
                <button className="w-1/2 px-3 py-1 duration-200 hover:scale-105 m-4  rounded-md
            bg-gradient-to-r from-pink-500 to-purple-500">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
