import React from "react";
import SideBarItems from "./SideBarItems";
import sideBarList from "./Hardcore/Dashboardsidebar";
import DashboardCard from "./DashboardCard";
import DashboardMain from "./DashboardMain";

import DashBoardButton from "./DashBoardButton";

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
}) => {
  return (
    <>
      <div className="w-full min-h-screen flex">
        <div className="w-[20%] br">
          <div className="w-[100%] h-[10vh] flex items-center justify-center">
            <h1 className="text-[1.5vw] font-semibold capitalize">
              Hello Mr. {name}
            </h1>
          </div>
          <div
            onClick={(e) => handelClick(e)}
            className="w-[100%] h-[60vh] px-5 py-2 flex flex-col gap-2 parent"
          >
            {sideBarList.map((list) => {
              return (
                <SideBarItems
                  id={list.id}
                  key={list.id}
                  list={list}
                  isClick={isClick}
                />
              );
            })}
          </div>
        </div>
        <div className="w-[80%]">
          <div className="w-[100%] h-[10vh] flex items-center gap-4 px-10 justify-center">
            <DashBoardButton color={"rgb(75,75,75)"} text={"Add Trainer"} />
            <DashBoardButton color={"rgb(59,130,246)"} text={"Add User"} />
            <DashBoardButton color={"rgb(34, 197, 94)"} text={"Add Payment"} />
            <DashBoardButton
              color={"rgb(249, 115, 22)"}
              text={"Add Membership"}
            />
          </div>
          <div className="w-[100%] h-[30vh] px-3 py-6  flex items-center justify-center gap-4">
            {dashBoardCardDetails?.map((details, i) => {
              return <DashboardCard key={i} data={{ ...details }} id={i} />;
            })}
          </div>
          <div className="w-full min-h-screen  columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4 auto-rows-auto">
            <DashboardMain
              isClick={isClick}
              trainerDetails={trainerDetails}
              handelTrainerDelete={handelTrainerDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
