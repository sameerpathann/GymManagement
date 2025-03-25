import React from "react";

const DashBoardButton = ({ color, text }) => {
  return (
    <>
      <div className="w-[15%] h-[100%] flex items-center justify-center">
        <button
          style={{ backgroundColor: color }}
          className={`min-w-[80%] px-2 py-2 h-[70%] cursor-pointer text-white rounded-md font-semibold text-[1.2vw]`}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default DashBoardButton;
