import React from "react";
import backgroundImg from "../assets/cta-bg.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full h-[60vh] relative">
      <img
        src={backgroundImg}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 gap-4 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-white leading-tight">
          Don't <span className="text-[#ed563d]">Think</span>, Begin{" "}
          <span className="text-[#ed563d]">Today</span>!
        </h1>

        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
          Ut consectetur, metus sit amet aliquet placerat, enim est ultricies
          ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a
          nisi luctus imperdiet.
        </p>

        <Link to="/Signup">
          <button className="mt-3 px-6 py-3 sm:px-8 sm:py-3 bg-[#ed563b] uppercase text-white font-semibold text-sm sm:text-base md:text-lg hover:bg-[#e56751] rounded-md transition-all duration-300">
            Become a member
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
