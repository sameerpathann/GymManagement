import React, { useState } from "react";
import TrainerCard from "../TrainerCard";
const DashBoardSection = ({ trainerDetails, setTrainersDetails }) => {
  return (
    <>
      {trainerDetails?.trainers?.map((trainer) => (
        <TrainerCard key={trainer.id} obj={{ ...trainer }} total={10} />
      ))}
    </>
  );
};

export default DashBoardSection;
