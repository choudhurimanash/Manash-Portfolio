import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function SkillsPage() {
  const techs = [
    {
      id: 1,
      icon: <FaHtml5 style={{fontSize:"3rem", color:"orange", marginLeft:"6px"}}/>,
      title: "HTML",
      exp: "(Intermediate)",
      style: "",
    },
    {
      id: 2,
      icon: <FaCss3Alt style={{fontSize:"3rem", color:"blue", marginLeft:"6px"}}/>,
      title: "CSS",
      exp: "(Intermediate)",
      style: "",
    },
    {
      id: 3,
      icon: <RiJavascriptFill style={{fontSize:"3rem", color:"yellow", marginLeft:"6px"}}/>,
      title: "JavaScript",
      exp: "(Intermediate)",
      style: "",
    },
    {
      id: 4,
      icon: <FaBootstrap style={{fontSize:"3rem", color:"purple", marginLeft:"6px"}}/>,
      title: "Bootstrap",
      exp: "(Intermediate)",
      style: "",
    },
    {
      id: 5,
      icon: <SiTailwindcss style={{fontSize:"3rem", color:"skyblue", marginLeft:"6px"}}/>,
      title: "TailwindCSS",
      exp: "(Intermediate)",
      style: "",
    },
    {
      id: 6,
      icon: <FaReact style={{fontSize:"3rem", color:"skyblue", marginLeft:"6px"}}/>,
      title: "React",
      exp: "(Beginner)",
      style: "",
    },
    {
      id: 7,
      icon: <FaNode style={{fontSize:"3rem", color:"green", marginLeft:"6px"}}/>,
      title: "Node",
      exp: "(Beginner)",
      style: "",
    },
    {
      id: 8,
      icon: <SiMongodb style={{fontSize:"3rem", color:"darkgreen", marginLeft:"6px"}}/>,
      title: "Mongodb",
      exp: "(Beginner)",
      style: "",
    },
    {
      id: 9,
      icon: <SiMysql style={{fontSize:"3rem", color:"#41d61c", marginLeft:"6px"}}/>,
      title: "MySql",
      exp: "(Intermediate)",
      style: "",
    },
    {
      id: 10,
      icon: <TbBrandCpp style={{fontSize:"3rem", color:"#1097d4", marginLeft:"6px"}}/>,
      title: "CPP",
      exp: "(Intermediate)",
      style: "",
    },
    {
      id: 11,
      icon: <FaJava style={{fontSize:"3rem", color:"#1097d4", marginLeft:"6px"}}/>,
      title: "Java",
      exp: "(Beginner)",
      style: "",
    },
    {
      id: 12,
      icon: <FaGitAlt style={{fontSize:"3rem", color:"red", marginLeft:"6px"}}/>,
      title: "Git",
      exp: "(Intermediate)",
      style: "",
    },
    {
      id: 13,
      icon: <FaGithubSquare style={{fontSize:"3rem", color:"black", marginLeft:"6px"}}/>,
      title: "GitHub",
      exp: "(Intermediate)",
      style: "",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b  via-black from-purple-800 to-yellow-800 w-full h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto pb-80 flex flex-col w-full
      h-full text-white"
      >
        <div className="text-center">
          <p className="text-4xl font-bold border-b-4 border-pink-300 p-1 inline">
            Technical Skills
          </p>
          <p className="py-6">These are the technologies i have worked on!</p>
        </div>

        <div className="grid grid-cols-2 w-full sm:grid-cols-3 gap-6 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, icon, title, exp, style }) => (
            <div
              key={id}
              className={` bg-slate-200 hover:scale-105 duration-500 flex flex-row py-1 rounded-lg ${style}`}
            >
              {icon}
              <p className="text-pink-600 font-bold text-lg ml-4 mt-[10px]">{title}</p>
              <p className="mt-[11px] ml-3 text-gray-950">{exp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
