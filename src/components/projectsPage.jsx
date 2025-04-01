import React from "react";
import currencyConverter from "../assets/currencyConverter.png";
import RockPaperScissors from "../assets/RockPaperScissors.png";
import TicTacToe from "../assets/TicTacToe.png";
import WeatherApp from "../assets/WeatherApp.png";
import ToDoList from "../assets/ToDoList.png";
import portfolio from "../assets/portfolio.png";

function ProjectsPage() {
  const portfolios = [
    {
      id: 1,
      src: currencyConverter,
      code: "https://github.com/choudhurimanash/Currency-Converter",
      demo: "https://choudhurimanash.github.io/Currency-Converter/",
    },
    {
      id: 2,
      src: RockPaperScissors,
      code: "https://github.com/choudhurimanash/RockPaperScissors",
      demo: "https://choudhurimanash.github.io/RockPaperScissors/",
    },
    {
      id: 3,
      src: TicTacToe,
      code: "https://github.com/choudhurimanash/TicTacToe",
      demo: "https://choudhurimanash.github.io/TicTacToe/",
    },
    {
      id: 4,
      src: WeatherApp,
      code: "https://github.com/choudhurimanash/Weather-App",
      demo: "https://choudhurimanash.github.io/Weather-App/",
    },
    {
      id: 5,
      src: ToDoList,
      code: "https://github.com/choudhurimanash/To-Do-List",
      demo: "https://choudhurimanash.github.io/To-Do-List/",
    },
    {
      id: 6,
      src: portfolio,
      code: "https://github.com/choudhurimanash/Manash-Portfolio",
      demo: "https://manash-choudhuri.netlify.app/",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b via-black  from-yellow-800 to-pink-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg py-20 md:py-80 mx-auto flex flex-col justify-center w-ful h-full">
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
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-yellow-300 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center ">
                <button
                  className="w-1/2 px-3 py-1 duration-200 hover:scale-105 m-4  rounded-md
            bg-gradient-to-r from-pink-500 to-purple-500"
                >
                  <a href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button
                  className="w-1/2 px-3 py-1 duration-200 hover:scale-105 m-4  rounded-md
            bg-gradient-to-r from-pink-500 to-purple-500"
                >
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
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
