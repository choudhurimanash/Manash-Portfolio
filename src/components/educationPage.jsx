import React from "react";
import { PiStudentDuotone } from "react-icons/pi";

function EducationPage() {

    const educt = [
        {
          id: 1,
          icon: <PiStudentDuotone style={{fontSize:"3rem", color:"orange",  marginLeft:"6px"}}/>,
          quali:"Post Graduate,",
          institue: "Gauhati University (2021-2023),",
          title: "M.Sc Computer Science,",
          exp: "CGPA - 8.6/10",
          style: "",
        },
        {
            id: 2,
            icon: <PiStudentDuotone style={{fontSize:"3rem", color:"purple", marginLeft:"6px"}}/>,
            quali:"Under Graduate,",
            institue: "Pub Kamrup College (2018-2021),",
            title: "B.Sc Computer Science,",
            exp: "CGPA - 8.9/10",
            style: "",
        },
        {
            id: 3,
            icon: <PiStudentDuotone style={{fontSize:"3rem", color:"blue", marginLeft:"6px"}}/>,
            quali:"Class XII,",
            institue: "Sipajhar H.S. & M.P. School (2016-2018),",
            title: "Stream: Science,",
            exp: "Percentage - 62%",
            style: "",
        },
        {
            id: 4,
            icon: <PiStudentDuotone style={{fontSize:"3rem", color:"green", marginLeft:"6px"}}/>,
            quali:"Class X,",
            institue: "Dalongghat Higher Secondary School (2016),",
            exp: "Percentage - 76%",
            style: "",
        },
    ];    


  return (
    <div
      name="education"
      className="w-full h-screen  bg-gradient-to-b via-black  from-pink-800 to-purple-800 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline  border-b-4 border-pink-300 text-white">
            Education
          </p>
        </div>
        <div className="grid  w-full  gap-8 text-center py-8 px-12 sm:px-0">
          {educt.map(({ id, icon, quali, institue, title, exp, style }) => (
            <div
              key={id}
              className={` bg-slate-200 hover:scale-105 duration-500 flex flex-row py-4 rounded-lg ${style}`}
            >
              {icon}
              
              <p className="text-pink-600 font-bold text-lg ml-6 mt-[10px]">{quali}</p>
              <p className="text-purple-600 font-bold text-lg ml-4 mt-[10px] ">{institue}</p>
              <p className="text-green-600 font-bold text-lg ml-4 mt-[10px]">{title}</p>
              <p className="mt-[12px] ml-3 font-bold text-gray-950">{exp}</p>
            </div>
          ))}
         </div> 
        
      </div>
    </div>
  );
}

export default EducationPage;
