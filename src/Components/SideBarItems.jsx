import React, { useEffect } from "react";

const SideBarItems = ({ list, id, isClick }) => {
  return (
    <>
      <div
        className={`w-[100%] ${
          list.id == isClick
            ? `bg-[#3b82f6]`
            : `bg-[#fff] text-black translate-x-2 hover:bg-[#d7d6d6] transition-colors duration-[0.2s]`
        } h-[15%] rounded-md flex items-center gap-2 pl-2 relative sidebar-items ease-out cursor-pointer ${id}`}
        style={{ animationDelay: `${id * 0.2}s` }}
      >
        <div
          className={`md:w-[10%]  w-[5%] h-[100%]  flex items-center justify-center ${
            list.id == isClick ? `text-white` : `text-black ${id}`
          }`}
        >
          {list.icon(id)}
        </div>
        <div className={`w-[90%] h-[100%] flex items-center ${id}`}>
          <h1
            className={`${
              list.id == isClick ? `text-white` : `text-black`
            } font-semibold text-[3.5vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] ${id}`}
          >
            {list.heading}
          </h1>
        </div>
      </div>
    </>
  );
};

export default SideBarItems;
