import React, { useState } from "react";
import SideBarItems from "./SideBarItems";
import sideBarList from "./Hardcore/Dashboardsidebar";
import DashboardCard from "./DashboardCard";
import DashboardMain from "./DashboardMain";
import DashBoardButton from "./DashBoardButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; // ❌ Close Icon

const Dashboard = ({
  dashBoardCardDetails,
  setDashboardCardDetails,
  trainerDetails,
  name,
  isClick,
  setIsClick,
  handelClick,
  handelAddtrainer,
  handelTrainerDelete,
  userData,
  handelUserDelete,
  membershipData,
  setMembershipData,
  handelmemberShipDelete,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="w-full min-h-screen flex flex-col md:flex-row">
        <div className="w-full flex items-center justify-between md:hidden px-4 py-3 bg-gray-100 shadow">
          <h1 className="text-[5vw] font-semibold capitalize">
            {`Hello ${name ? `Mr. ${name}` : `Admin`}`}
          </h1>
          <button className="text-2xl" onClick={() => setShowSidebar(true)}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div
          className={`${
            showSidebar ? "block" : "hidden"
          } md:flex w-full md:w-[20%] br flex-col bg-white z-50 md:z-auto fixed md:relative top-0 left-0 h-full md:h-auto transition-all duration-300 shadow-lg overflow-y-auto`}
        >
          <div className="md:hidden w-full flex justify-end px-4 py-3">
            <button className="text-3xl" onClick={() => setShowSidebar(false)}>
              <IoClose />
            </button>
          </div>
          <div className="w-full h-[10vh] flex items-center justify-center">
            <h1 className="text-[6vw] sm:text-[4vw] md:text-[2vw] lg:text-[1.5vw] font-semibold capitalize text-center">
              {`Hello ${name ? `Mr. ${name}` : `Admin`}`}
            </h1>
          </div>
          <div
            onClick={(e) => handelClick(e)}
            className="w-full h-auto md:h-[60vh] px-3 sm:px-4 md:px-5 py-2 flex flex-col gap-2 parent overflow-y-auto"
          >
            {sideBarList.map((list) => (
              <SideBarItems
                id={list.id}
                key={list.id}
                list={list}
                isClick={isClick}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-[80%]">
          <div className="w-full h-[10vh] flex items-center gap-4 px-4 sm:px-6 md:px-10 justify-center flex-wrap">
            <DashBoardButton
              color={"rgb(75,75,75)"}
              text={"Add Trainer"}
              path="/addTrainer"
            />
            <DashBoardButton
              color={"rgb(59,130,246)"}
              text={"Add User"}
              path={"/addUser"}
            />
            <DashBoardButton
              color={"rgb(249, 115, 22)"}
              text={"Add Membership"}
              path={"/addMembership"}
            />
            <DashBoardButton
              color={"rgb(34, 197, 94)"}
              text={"Add Payment"}
              path={"/addPayment"}
            />
          </div>

          <div className="w-full h-auto md:h-[30vh] px-3 py-6 flex items-center justify-center gap-4 flex-wrap">
            {dashBoardCardDetails?.map((details, i) => (
              <DashboardCard
                key={i}
                data={{ ...details }}
                id={i}
                userData={userData}
              />
            ))}
          </div>
          <div className="w-full min-h-screen gap-4 px-3 sm:px-5">
            <DashboardMain
              isClick={isClick}
              trainerDetails={trainerDetails}
              handelTrainerDelete={handelTrainerDelete}
              userData={userData}
              handelUserDelete={handelUserDelete}
              membershipData={membershipData}
              setMembershipData={setMembershipData}
              handelmemberShipDelete={handelmemberShipDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
