import React, { useState } from "react";
import SideBarItems from "./SideBarItems";
import sideBarList from "./Hardcore/Dashboardsidebar";

const Dashboard = () => {
  const { name } = JSON.parse(localStorage.getItem("User"));
  const [isClick, setIsClick] = useState(1);
  const handelClick = (e) => {
    if (!e.target.classList.contains("parent")) {
      console.log(e.target.classList);
      const id = [...e.target.classList].slice(-1)[0];
      if (id) {
        setIsClick(id);
      } else {
        setIsClick(1);
      }
    }
  };
  console.log(isClick);
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
      <div className="w-[80%]  h-[100%]"></div>
    </div>
  );
};

export default Dashboard;
