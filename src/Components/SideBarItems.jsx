import React, { useEffect } from "react";

const SideBarItems = ({ list, id, isClick }) => {
  return (
    <>
      <div
        className={`w-[100%] ${
          list.id == isClick
            ? `bg-[#3b82f6]`
            : `bg-[#fff] text-black translate-x-2 hover:bg-[#d7d6d6] transition-colors duration-[0.2s]`
        } h-[10%] rounded-md flex items-center gap-2 sidebar-items ease-out cursor-pointer ${id}`}
        style={{ animationDelay: `${id * 0.2}s` }}
      >
        <div
          className={`w-fit h-fit flex items-center justify-center font-[1.5vw] pl-2 ${
            list.id == isClick ? `text-white` : `text-black`
          }`}
        >
          {list.icon}
        </div>
        <div className={`${id}`}>
          <h1
            className={`${
              list.id == isClick ? `text-white` : `text-black`
            } font-semibold text-[1.2vw] ${id}`}
          >
            {list.heading}
          </h1>
        </div>
      </div>
    </>
  );
};

export default SideBarItems;
