import React, { useEffect, useState } from "react";
import Routing from "./Components/Routes/Routing";
import { Flip, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import totalitems from "./Components/Hardcore/Dashboardoverview";
import trainersData from "./Components/Hardcore/TrainersData";
import users from "./Components/Hardcore/UserData";
import membershipDetails from "./Components/Hardcore/MembershipData";
const App = () => {
  // localStorage.clear("");
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
  const [userData, setUserData] = useState(users);
  const [newUser, setNewUser] = useState({
    id: Math.floor(Math.random() * 1000),
    name: "",
    email: "",
    membershipType: "",
    workoutPlan: "",
    trainer: "",
    status: "Active",
  });
  const [membershipData, setMembershipData] = useState(membershipDetails);
  const [newMembership, setNewMembership] = useState({
    id: Math.floor(Math.random() * 1000),
    name: "",
    price: "",
    duration: "",
    benefits: "",
  });
  const userObj = JSON.parse(localStorage.getItem("User")) || {};
  const name = userObj?.name || "";
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
    if (login) {
      const lastpath = localStorage.getItem("lastPath") || "/dashboard";
      navigate(login ? `${lastpath}` : "/");
    }
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
  const handelUserDelete = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setUserData((prev) => ({
        ...prev,
        Data: prev.Data.filter((user) => user.id !== id),
      }));
    }
  };
  const handelAddUser = (e) => {
    e.preventDefault();
    const isExistingUser = userData.Data.some((user) => user.id === newUser.id);
    if (isExistingUser) {
      const updatedUser = userData.Data.map((user) =>
        user.id == newUser.id ? newUser : user
      );
      setUserData({ ...userData, Data: updatedUser });
      toast.success("User Edited Successfully!", { transition: Flip });
      navigate("/dashboard");
    } else {
      if (
        newUser.name.trim() !== "" &&
        newUser.email.trim() !== "" &&
        newUser.membershipType.trim() !== "" &&
        newUser.workoutPlan.trim() !== "" &&
        newUser.trainer.trim() !== ""
      ) {
        setUserData((prev) => {
          return { ...prev, Data: [...prev.Data, newUser] };
        });
        toast.success("User Added Successfully!", { transition: Flip });
        navigate("/dashboard");
      } else {
        toast.error("Please Fill All Detials!", { transition: Flip });
      }
    }
  };
  const handelmemberShipDelete = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setMembershipData((prev) => {
        return {
          ...prev,
          Data: prev.Data.filter((membership) => membership.id !== id),
        };
      });
    }
  };
  const handelAddMembership = (e) => {
    e.preventDefault();
    const isExistingmemberShip = membershipData.Data?.some(
      (membership) => membership.id === newMembership.id
    );
    if (isExistingmemberShip) {
      const updatedmembership = membershipData.Data?.map((membership) =>
        membership.id == newMembership.id
          ? {
              ...newMembership,
              benefits: Array.isArray(newMembership.benefits)
                ? newMembership.benefits
                : newMembership.benefits
                    .split(/[\s,]+/)
                    .map((item) => item.trim())
                    .filter(Boolean),
            }
          : membership
      );
      setMembershipData((prev) => ({ ...prev, Data: updatedmembership }));
      toast.success("User Edited Successfully!", { transition: Flip });
      navigate("/dashboard");
    } else {
      const benefitsArray = newMembership?.benefits
        .split(/[\s,]+/)
        .map((item) => item.trim())
        .filter(Boolean);
      const updatedMembership = {
        ...newMembership,
        benefits: benefitsArray,
      };
      setMembershipData((prev) => ({
        ...prev,
        Data: newMembership,
      }));
      if (
        newMembership.name.trim() !== "" &&
        newMembership.price.trim() !== "" &&
        newMembership.duration.trim() !== "" &&
        newMembership.benefits.trim() !== ""
      ) {
        const updatedMembership = {
          ...newMembership,
          benefits: benefitsArray,
        };

        setMembershipData((prev) => ({
          ...prev,
          Data: [...prev.Data, updatedMembership],
        }));

        toast.success("Membership added Successfully!", { transition: Flip });

        setNewMembership({
          id: Math.floor(Math.random() * 1000),
          name: "",
          price: "",
          duration: "",
          benefits: "",
        });

        navigate("/dashboard");
      } else {
        toast.error("Please Fill All Detials!", { transition: Flip });
      }
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
        userData={userData}
        handelUserDelete={handelUserDelete}
        newUser={newUser}
        setNewUser={setNewUser}
        handelAddUser={handelAddUser}
        membershipData={membershipData}
        setMembershipData={setMembershipData}
        handelmemberShipDelete={handelmemberShipDelete}
        newMembership={newMembership}
        setNewMembership={setNewMembership}
        handelAddMembership={handelAddMembership}
      />
      <ToastContainer />
    </>
  );
};

export default App;
