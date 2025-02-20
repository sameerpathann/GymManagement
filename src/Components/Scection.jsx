import React from "react";
import lineimg from "../assets/line-dec.png";
import Programstructure from "./Programstructure";
import { classDetails } from "./Hardcore/Traning";
const Scection = () => {
  return (
    <div className="min-h-screen w-[100%] pt-28 pb-28 px-20">
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
      <div className="w-[100%] h-[70%]  flex flex-wrap justify-between items-center mt-14">
        {classDetails.map((obj, i) => {
          return <Programstructure obj={obj} />;
        })}
      </div>
    </div>
  );
};

export default Scection;
