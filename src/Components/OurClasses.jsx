import React, { useState } from "react";
import lineimg from "../assets/line-dec.png";
import OurClassstructure from "./OurClassstructure";
import obj from "./Hardcore/TraninerDetails";
import { Link } from "react-router-dom";

const OurClasses = () => {
  const [isClick, setIsClick] = useState(0);
  return (
    <div className="w-full min-h-screen pt-20 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="w-full h-40 flex flex-col items-center gap-4 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase font-bold">
          Our <span className="text-[#ed365d]">Classes</span>
        </h1>
        <img
          src={lineimg}
          alt=""
          className="w-[10%] md:w-[5%] lg:w-[5%] mx-auto"
        />
        <p className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] text-gray-500 text-base sm:text-lg md:text-xl">
          Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
          viverra ipsum dolor, ultricies fermentum massa consequat eu.
        </p>
      </div>
      <div className="w-full h-auto flex flex-col sm:flex-row items-center p-7 justify-between mt-12 gap-8">
        <div className="w-full sm:w-[30%] flex flex-col gap-4 ">
          <OurClassstructure isClick={isClick} setIsClick={setIsClick} />
          <div className="w-full">
            <Link to="/Schedule">
              <div className="w-full flex items-center justify-center rounded-md gap-5 bg-[#ed563d] cursor-pointer hover:bg-[#e8644d] py-3">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  View All Schedules
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-[65%] h-full flex flex-col gap-7">
          <div className="w-full h-[50%]">
            <img
              className="object-cover object-bottom rounded-md w-full h-[19vw] sm:h-[18vw] md:h-[10vw] lg:h-[15vw]"
              src={obj[isClick].img}
              alt=""
            />
          </div>
          <div className="w-full h-[30%] pt-4 pb-4 flex flex-col gap-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {obj[isClick].heading}
            </h1>
            <p className="text-gray-500 w-[95%] sm:w-[90%] md:w-[80%] text-base sm:text-sm md:text-sm">
              Phasellus convallis mauris sed elementum vulputate. Donec posuere
              leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed
              vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia
              gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut,
              accumsan diam.
            </p>
            <Link to="/Schedule">
              <button className="uppercase w-[40%] sm:w-[30%] md:w-[25%] text-sm sm:text-lg font-semibold text-white bg-[#ed563d] py-2 px-4 border-none outline-none cursor-pointer hover:bg-[#e8644d] rounded-md">
                View Schedule
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClasses;
