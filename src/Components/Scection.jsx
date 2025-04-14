import React from "react";
import lineimg from "../assets/line-dec.png";
import Programstructure from "./Programstructure";
import { classDetails } from "./Hardcore/Traning";
const Scection = () => {
  return (
    <div className="min-h-screen w-[100%] pt-10 md:pt-28 md:pb-28 md:px-20 flex flex-col md:gap-20 gap-12">
      <div className="w-[100%] h-[30%] flex flex-col items-center gap-4">
        <h1 className="font-bold uppercase text-[2vw]">
          Choose <span className="text-[#ed563b]">Program</span>
        </h1>
        <img width={"50vw"} height={"50vw"} src={lineimg} alt="" />
        <p className="w-[43%] text-center text-[1.2vw] text-[gray]">
          Training Studio is free CSS template for gyms and fitness centers. You
          are allowed to use this layout for your business website.
        </p>
      </div>
      <div className="w-full h-[70%] flex flex-wrap gap-5 sm:flex-row justify-between items-center flex-col">
        {classDetails.map((obj, i) => {
          return <Programstructure key={i} obj={obj} />;
        })}
      </div>
    </div>
  );
};

export default Scection;
