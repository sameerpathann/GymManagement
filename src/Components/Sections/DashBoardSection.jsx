import React, { useState } from "react";
import TrainerCard from "../TrainerCard";

const DashBoardSection = ({ trainerDetails, handelTrainerDelete }) => {
  return (
    <>
      <div className="w-full min-h-screen columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-5">
        {trainerDetails.trainers.map((trainer) => (
          <div style={{ breakInside: "avoid" }} key={trainer.id}>
            <TrainerCard
              obj={{ ...trainer }}
              total={10}
              handelTrainerDelete={handelTrainerDelete}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DashBoardSection;
