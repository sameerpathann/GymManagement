import React, { useState } from "react";
import lineimg from "../assets/line-dec.png";
import OurClassstructure from "./OurClassstructure";
import obj from "./Hardcore/TraninerDetails";

const OurClasses = () => {
  const [isClick, setIsClick] = useState(0);
  return (
    <>
      <div className="w-[100%] min-h-[100vh] pt-28 px-20">
        <div className="w-[100%] h-[40%] flex flex-col items-center gap-4">
          <h1 className="text-[1.7vw] uppercase font-bold">
            Our <span className="text-[#ed365d]">Classes</span>
          </h1>
          <img height={"50vw"} width={"50vw"} src={lineimg} alt="" />
          <p className="w-[42%] text-center text-[gray] text-[1.2vw]">
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </p>
        </div>
        <div className="w-[100%] h-[60%] pt-10 flex justify-between">
          <div className="w-[30%] flex flex-col gap-4 h-[100%]">
            <OurClassstructure isClick={isClick} setIsClick={setIsClick} />
            <div className="w-[100%] h-[6vw]">
              <div className="w-[100%] h-[100%] flex items-center justify-center rounded-md gap-5 bg-[#ed563d] cursor-pointer hover:bg-[#e8644d]">
                <h1 className="text-[1.6vw] font-semibold text-white">
                  View All Schedules
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[65%] h-[100%]">
            <div className="w-[100%] h-[50%]">
              <img
                className="object-cover object-bottom rounded-md w-[100%] h-[19vw]"
                src={obj[isClick].img}
                alt=""
              />
            </div>
            <div className="w-[100%] h-[30%] pt-[2vw] pb-[2vw] flex flex-col gap-4">
              <h1 className="text-[1.7vw] font-bold">{obj[isClick].heading}</h1>
              <p className="text-[gray] w-[95%] text-[1.2vw]">
                Phasellus convallis mauris sed elementum vulputate. Donec
                posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit
                erat, sed vehicula ligula. Aliquam ut sem fermentum sem
                tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                imperdiet, molestie nunc ut, accumsan diam.
              </p>
              <button className="uppercase w-[19%] text-[1.2vw] text-white bg-[#ed563d] px-2 py-2 border-none outline-none cursor-pointer hover:bg-[#e8644d]">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClasses;
