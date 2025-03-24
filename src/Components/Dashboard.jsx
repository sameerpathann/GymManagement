import React, { useState } from "react";
import SideBarItems from "./SideBarItems";
import sideBarList from "./Hardcore/Dashboardsidebar";
import totalitems from "./Hardcore/Dashboardoverview";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  const [dashBoardCardDetails, setDashboardCardDetails] = useState(totalitems);
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

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className="w-[20%] h-[100%] br">
        <div className="w-[100%] h-[10%] flex items-center justify-center">
          <h1 className="text-[1.5vw] font-semibold">Hello Mr. {name}</h1>
        </div>
        <div
          onClick={(e) => handelClick(e)}
          className="w-[100%] h-[70%]  px-5 py-2 flex flex-col gap-2 parent"
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
      <div className="w-[80%] h-[100%] ">
        <div className="w-[100%] h-[10%] flex items-center  px-10">
          <h1 className="text-[1.7vw] font-semibold">Admin Dashboard</h1>
        </div>
        <div className="w-[100%] h-[30%] px-3 py-6  flex items-center justify-center gap-4">
          {dashBoardCardDetails?.map((details, i) => {
            return (
              <DashboardCard
                key={i}
                title={details.heading}
                value={details.value}
                icon={details.icon}
                id={i}
                route={details.route}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
