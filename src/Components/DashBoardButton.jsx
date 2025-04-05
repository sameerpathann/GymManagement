import React from "react";
import { Link } from "react-router-dom";

const DashBoardButton = ({ color, text, path }) => {
  return (
    <>
      <Link className="w-[15%] h-[100%]" to={path}>
        {" "}
        <div className="w-[100%] h-[100%] flex items-center justify-center">
          <button
            style={{ backgroundColor: color }}
            className={`min-w-[80%] px-2 py-2 h-[70%] cursor-pointer text-white rounded-md font-semibold text-[1.2vw]`}
          >
            {text}
          </button>
        </div>
      </Link>
    </>
  );
};

export default DashBoardButton;
