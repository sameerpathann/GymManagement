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
import UserForm from "../UserForm";
import MembershipForm from "../MembershipForm";

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
  handelUserDelete,
  newUser,
  setNewUser,
  handelAddUser,
  membershipData,
  setMembershipData,
  handelmemberShipDelete,
  newMembership,
  setNewMembership,
  handelAddMembership,
}) => {
  const { pathname } = useLocation();

  return (
    <>
      {!pathname.toLowerCase().includes("/dashboard") && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Scection />} />
        <Route path="/classes" element={<OurClasses />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
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
                handelUserDelete={handelUserDelete}
                membershipData={membershipData}
                setMembershipData={setMembershipData}
                handelmemberShipDelete={handelmemberShipDelete}
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
        <Route
          path="/AddUser"
          element={
            <ProtectedRoute>
              <UserForm
                newUser={newUser}
                setNewUser={setNewUser}
                handelAddUser={handelAddUser}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/EditUser/:id"
          element={
            <ProtectedRoute>
              <UserForm
                newUser={newUser}
                setNewUser={setNewUser}
                handelAddUser={handelAddUser}
                userData={userData}
                editMode={true}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addMembership"
          element={
            <ProtectedRoute>
              <MembershipForm
                newMembership={newMembership}
                setNewMembership={setNewMembership}
                handelAddMembership={handelAddMembership}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Routing;
