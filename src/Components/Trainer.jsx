import React from "react";
import lineimg from "../assets/line-dec.png";
import TrainerCard from "./TrainerCard";
import TrainerProfile from "./Hardcore/TrainerProfile";

const Trainer = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-10 lg:px-20 flex flex-col gap-14 items-center">
      <div className="w-full max-w-[900px] flex flex-col items-center gap-4 text-center">
        <h1 className="text-[6vw] sm:text-[2.2vw] uppercase font-bold">
          Expert <span className="text-[#ed563d]">Trainers</span>
        </h1>
        <img className="w-[15%] sm:w-[8%]" src={lineimg} alt="" />
        <p className="text-gray-600 text-[4vw] sm:text-[1.2vw] w-[90%] sm:w-[80%]">
          Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
          viverra ipsum dolor, ultricies fermentum massa consequat eu.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-10">
        {TrainerProfile.map((obj, i) => (
          <div
            key={i}
            className="w-full sm:w-[80%] md:w-[30%] flex justify-center"
          >
            <div className="w-full max-w-[320px]">
              <TrainerCard obj={obj} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainer;
