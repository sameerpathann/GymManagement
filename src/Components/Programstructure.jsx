import React from "react";
import Dumbelimg from "../assets/features-first-icon.png";
const Programstructure = ({ obj }) => {
  return (
    <>
      <div className="w-[49%] sm:h-[35%] flex gap-8 mt-[4vw]">
        <div className="w-[19%] flex items-center justify-center rounded-md sm:h-[100%] bg-[#ed563d]">
          <img
            className="object-cover object-center"
            width={"100%"}
            height={"100%"}
            src={Dumbelimg}
            alt=""
          />
        </div>
        <div className="w-[70%] h-[100%] flex flex-col sm:gap-1">
          <h1 className="text-[1.5vw] font-semibold">{obj.heading}</h1>
          <p className="text-[1.2vw] text-[gray]">{obj.description}</p>
          <h4 className="uppercase w-fit font-semibold text-[1vw] text-[#ed563b] cursor-pointer hover:scale-[1.03]">
            Discover More
          </h4>
        </div>
      </div>
    </>
  );
};

export default Programstructure;
