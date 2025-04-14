import React from "react";
import gymVideo from "../assets/gym-video.mp4";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="w-full h-full absolute">
      <video
        className="w-full h-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={gymVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full flex flex-col items-center gap-4 px-4 sm:px-8 text-center">
        <h1 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-bold uppercase">
          Work Harder, Get Stronger
        </h1>

        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">
          Easy with our <span className="text-[#ed563b]">gym</span>
        </h1>

        <Link to="/Signup" className="mt-4">
          <button className="bg-[#ed563b] hover:bg-[#e56751] text-white uppercase font-semibold px-6 py-3 sm:px-8 sm:py-3 text-xs sm:text-sm md:text-base rounded-md transition duration-300">
            Become a member
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Video;
