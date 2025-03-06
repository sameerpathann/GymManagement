import React from "react";
import backgroundImg from "../assets/cta-bg.jpg";
const Banner = () => {
  return (
    <>
      <div className="w-[100%] h-[60vh] bg-red-300 relative">
        <img
          src={backgroundImg}
          width={"100%"}
          height={"100%"}
          className="object-cover min-h-full object-center"
          alt=""
        />
        <div className="w-[100%] h-[100%] absolute top-0 flex flex-col gap-4 items-center justify-center">
          <h1 className="text-[2.5vw] font-extrabold uppercase text-white">
            Don't <span className="text-[#ed563d]">Think</span>, Begin{" "}
            <span className="text-[#ed563d]">Today</span>!
          </h1>
          <p className="text-white text-[1.4vw] text-center w-[71%]">
            Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
            ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris
            a nisi luctus imperdiet.
          </p>
          <div>
            <button className="w-[100%] h-[100%] px-[1.8vw] py-[0.7vw] bg-[#ed563b] mt-3 uppercase text-white font-semibold  text-[1.2vw] cursor-pointer transition-colors duration-[0.4s] hover:bg-[#e56751] border-none outline-none">
              Become a memeber
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
