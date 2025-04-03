import React, { useState } from "react";
import TrainerCard from "../TrainerCard";
const DashBoardSection = ({ trainerDetails, handelTrainerDelete }) => {
  return (
    <>
      <div className="w-full min-h-screen columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4 auto-rows-auto">
        {trainerDetails.trainers.map((trainer) => (
          <TrainerCard
            key={trainer.id}
            obj={{ ...trainer }}
            total={10}
            handelTrainerDelete={handelTrainerDelete}
          />
        ))}
      </div>
    </>
  );
};

export default DashBoardSection;
