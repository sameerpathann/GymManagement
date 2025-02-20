import React from "react";
import gymVideo from "../assets/gym-video.mp4";
const Video = () => {
  return (
    <>
      <div className="w-[100%] h-[100%] absolute">
        <video
          className="object-cover object-center  h-[100%] sm:w-[100%]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={gymVideo} type="video/mp4" />
          Your Brwoser Does not support the video tag
        </video>
        <div className="w-[100%] h-[25%] sm:h-[50%]  absolute top-48 z-30 flex flex-col items-center justify-evenly">
          <div className="w-[25%] h-[20%] flex items-end justify-center">
            <h1 className="text-[1.5vw] uppercase font-bold text-white">
              Work Harder, Get stronger
            </h1>
          </div>
          <div className="w-[70%] h-[40%] flex items-center justify-center -mt-[2vw]">
            <h1 className="text-[6vw] uppercase font-extrabold text-white">
              Easy with our <span className="text-[#ed563b]">gym</span>
            </h1>
          </div>
          <div className="w-[25%] h-[20%] flex items-center justify-center">
            <button className="w-[15%] h-[15%] bg-[#ed563b] mt-3 uppercase text-white font-semibold absolute z-40 text-[1.2vw] cursor-pointer transition-colors duration-[0.4s] hover:bg-[#e56751]">
              Become a memeber
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
