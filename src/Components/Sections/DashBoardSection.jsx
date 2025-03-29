import React, { useState } from "react";
import TrainerCard from "../TrainerCard";
const DashBoardSection = ({ trainerDetails, handelTrainerDelete }) => {
  return (
    <>
      {trainerDetails.trainers.map((trainer) => (
        <TrainerCard
          key={trainer.id}
          obj={{ ...trainer }}
          total={10}
          handelTrainerDelete={handelTrainerDelete}
        />
      ))}
    </>
  );
};

export default DashBoardSection;
