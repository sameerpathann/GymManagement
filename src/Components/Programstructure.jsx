import React from "react";
import Dumbelimg from "../assets/features-first-icon.png";

const Programstructure = ({ obj }) => {
  return (
    <div className="w-full max-w-[550px] flex gap-6 items-center p-6 bg-white cardShadow rounded-2xl">
      <div className="min-w-[70px] max-w-[70px] h-[70px] flex items-center justify-center rounded-md bg-[#ed563d]">
        <img
          className="object-contain w-4/5 h-4/5"
          src={Dumbelimg}
          alt="icon"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[1.4rem] font-semibold">{obj.heading}</h1>
        <p className="text-gray-600 text-[1.05rem] leading-snug">
          {obj.description}
        </p>
        <h4 className="uppercase font-semibold text-[1rem] text-[#ed563b] cursor-pointer hover:scale-[1.05] transition-transform duration-200">
          Discover More
        </h4>
      </div>
    </div>
  );
};

export default Programstructure;
