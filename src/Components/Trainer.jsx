import React from "react";
import lineimg from "../assets/line-dec.png";
import TrainerCard from "./TrainerCard";
import TrainerProfile from "./Hardcore/TrainerProfile";
const Trainer = () => {
  return (
    <>
      <div className="w-[100%] h-[180vh] px-20 py-20 flex flex-col justify-between items-center">
        <div className="w-[50%] h-[30%] flex flex-col justify-center items-center gap-4">
          <h1 className="text-[2vw] uppercase font-bold">
            Expert <span className="text-[#ed563d] font-bold">Traniners</span>
          </h1>
          <img className="w-[8%] h-[10%]" src={lineimg} alt="" />
          <p className="text-[1.2vw] text-[gray] w-[95%] text-center">
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
            viverra ipsum dolor, ultricies fermentum massa consequat eu.
          </p>
        </div>
        <div className="w-[100%] h-[58%]  flex justify-between">
          {TrainerProfile.map((obj, i) => {
            return <TrainerCard key={i} obj={obj} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Trainer;
