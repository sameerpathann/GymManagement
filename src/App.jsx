import React, { useEffect, useState } from "react";
import Routing from "./Components/Routes/Routing";
import { Flip, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import totalitems from "./Components/Hardcore/Dashboardoverview";
import trainersData from "./Components/Hardcore/TrainersData";
const App = () => {
  const [dashBoardCardDetails, setDashboardCardDetails] = useState(totalitems);
  const [trainerDetails, setTrainersDetails] = useState(trainersData);
  const [newTrainer, setNewTrainer] = useState({
    id: Math.floor(Math.random() * 1000),
    img: "",
    title: "",
    name: "",
    description: "",
    contact: "",
  });

  const { name } = JSON.parse(localStorage.getItem("User"));
  const [isClick, setIsClick] = useState(1);
  const handelClick = (e) => {
    if (!e.target.classList.contains("parent")) {
      const id = [...e.target.classList].slice(-1)[0];
      if (id) {
        setIsClick(id);
      } else {
        setIsClick(1);
      }
    }
  };

  const navigate = useNavigate();
  const login = localStorage.getItem("isLogin") === "true";

  useEffect(() => {
    const lastpath = localStorage.getItem("lastPath") || "/dashboard";

    navigate(login ? `${lastpath}` : "/");
  }, [login]);
  const handelAddtrainer = (e) => {
    e.preventDefault();
    const isExistingTrainer = trainerDetails.trainers.some(
      (trainer) => trainer.id === newTrainer.id
    );
    if (isExistingTrainer) {
      //Edit Mode
      setTrainersDetails((prev) => {
        const updatedTrainer = prev.trainers.map((trainer) =>
          trainer.id === newTrainer.id ? newTrainer : trainer
        );

        return { ...prev, trainers: updatedTrainer };
      });
      toast.success("Trainer Added Successfully!", { transition: Flip });
    } else {
      //Add More Trainer
      if (
        newTrainer.name.trim() === "" ||
        newTrainer.title.trim() == "" ||
        newTrainer.img.trim() == "" ||
        newTrainer.description.trim() == "" ||
        newTrainer.contact.trim() == ""
      ) {
        toast.error("Please Fill All Detials!", { transition: Flip });
      } else {
        setTrainersDetails((prev) => ({
          ...prev,
          trainers: [...prev.trainers, newTrainer],
        }));

        toast.success("Trainer Added Successfully!", { transition: Flip });
      }
    }
    setNewTrainer({
      id: Math.floor(Math.random() * 1000),
      img: "",
      title: "",
      name: "",
      description: "",
      contact: "",
    });
    navigate("/dashboard");
  };
  const handelTrainerDelete = (id) => {
    if (window.confirm("Are you sure you want to delete!")) {
      setTrainersDetails((prev) => ({
        ...prev,
        trainers: prev.trainers.filter((trainer) => trainer.id !== id),
      }));
    }
  };

  return (
    <>
      <Routing
        dashBoardCardDetails={dashBoardCardDetails}
        setDashboardCardDetails={setDashboardCardDetails}
        trainerDetails={trainerDetails}
        name={name}
        isClick={isClick}
        setIsClick={setIsClick}
        handelClick={handelClick}
        handelAddtrainer={handelAddtrainer}
        newTrainer={newTrainer}
        setNewTrainer={setNewTrainer}
        handelTrainerDelete={handelTrainerDelete}
      />
      <ToastContainer />
    </>
  );
};

export default App;
