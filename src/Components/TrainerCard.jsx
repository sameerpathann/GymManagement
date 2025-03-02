import React, { useState } from "react";
import firstTrainerImg from "../assets/first-trainer.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
const TrainerCard = ({ obj }) => {
  //   const [isHover, setIsHover] = useState(true);
  return (
    <>
      <div className="w-[32%] bg-[#ffff] box-shadow h-[100%] rounded flex flex-col items-center justify-between px-10 py-10">
        <div className="w-[100%] h-[45%] rounded overflow-hidden">
          <img
            className="w-[100%] h-[100%] object-cover object-center"
            src={obj.img}
            alt=""
          />
        </div>
        <div className="h-[55%] mt-4 w-[100%] flex flex-col gap-5">
          <div className="w-[100%] h-[23%] flex flex-col justify-between">
            <h4 className="text-[1.1vw] font-semibold text-[#ed563d]">
              {obj.title}
            </h4>
            <h1 className="text-[1.5vw] font-semibold">{obj.name}</h1>
          </div>
          <div className="w-[100%] h-[42%] flex">
            <p className="text-[1.2vw] w-[99%] text-[gray]">
              {obj.description}
            </p>
          </div>
          <div className="w-[100%] h-[15%] flex items-center gap-3">
            <FaFacebookF
              className="cursor-pointer hover:text-[#ed563d] transition-colors duration-[0.3s]"
              size={"1.2vw"}
            />
            <FaTwitter
              className="cursor-pointer hover:text-[#ed563d] transition-colors duration-[0.3s]"
              size={"1.2vw"}
            />
            <FaLinkedinIn
              className="cursor-pointer hover:text-[#ed563d] transition-colors duration-[0.3s]"
              size={"1.2vw"}
            />
            <FaBehance
              className="cursor-pointer hover:text-[#ed563d] transition-colors duration-[0.3s]"
              size={"1.2vw"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerCard;
