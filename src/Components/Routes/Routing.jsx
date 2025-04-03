import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Scection from "../Scection";
import Header from "../Header";
import OurClasses from "../OurClasses";
import Schedule from "../Schedule";
import Footer from "../Footer";
import Home from "../Home";
import Form from "../Form";
import Login from "../Login";
import ProtectedRoute from "../Auth/Auth";
import Dashboard from "../Dashboard";
import NewTrrainerForm from "../Sections/NewTrrainerForm";

const Routing = ({
  dashBoardCardDetails,
  setDashboardCardDetails,
  trainerDetails,
  name,
  isClick,
  setIsClick,
  handelClick,
  handelAddtrainer,
  newTrainer,
  setNewTrainer,
  handelTrainerDelete,
  userData,
}) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/dashboard" && pathname !== "/Dashboard" ? <Header /> : ""}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Scection />} />
        <Route path="/Classes" element={<OurClasses />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Contact" element={<Footer />} />
        <Route path="/Signup" element={<Form />} />
        <Route path="/Login" element={<Login />} />

        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <Dashboard
                dashBoardCardDetails={dashBoardCardDetails}
                setDashboardCardDetails={setDashboardCardDetails}
                trainerDetails={trainerDetails}
                name={name}
                isClick={isClick}
                setIsClick={setIsClick}
                handelClick={handelClick}
                handelAddtrainer={handelAddtrainer}
                handelTrainerDelete={handelTrainerDelete}
                userData={userData}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addTrainer"
          element={
            <ProtectedRoute>
              <NewTrrainerForm
                handelAddtrainer={handelAddtrainer}
                newTrainer={newTrainer}
                setNewTrainer={setNewTrainer}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/EditTrainer/:id"
          element={
            <ProtectedRoute>
              <NewTrrainerForm
                handelAddtrainer={handelAddtrainer}
                newTrainer={newTrainer}
                setNewTrainer={setNewTrainer}
                trainerDetails={trainerDetails}
                isEditMode={true}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Routing;
