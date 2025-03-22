import React from "react";

const SideBarItems = ({ list, id, isClick }) => {
  return (
    <>
      <div
        className={`w-[100%] ${
          list.id == isClick
            ? `bg-[#3b82f6]`
            : `bg-[#fff] text-black hover:bg-[#d7d6d6] transition-colors duration-[0.2s]`
        } h-[10%] rounded-md flex items-center cursor-pointer ${id}`}
      >
        <div
          className={`w-[20%] h-[100%] flex items-center justify-center px-3 font-[1.5vw] ${
            list.id == isClick ? `text-white` : `text-black`
          } ${id}`}
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
