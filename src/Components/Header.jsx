import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-[100%] h-[10vh] bg-[#ffffff32] px-16 flex items-center justify-between absolute top-0 z-20">
        <div className="w-[30%] flex items-center text-[2.5vw] uppercase font-bold gap-[1.5px] h-[100%]">
          <h1 className="text-white">Traning</h1>
          <h1 className="text-[#ed563b]">studio</h1>
        </div>
        <div className="w-[55%] h-[100%] flex items-center justify-evenly">
          <h4 className="text-[#ed563b] font-semibold uppercase text-[1vw] cursor-pointer">
            Home
          </h4>
          <h4 className="hover:text-[#ed563b] duration-[0.1s] transition-colors ease-in font-semibold uppercase text-[1vw] cursor-pointer">
            About
          </h4>
          <h4 className="hover:text-[#ed563b] duration-[0.1s] transition-colors ease-in font-semibold uppercase text-[1vw] cursor-pointer">
            Classes
          </h4>
          <h4 className="hover:text-[#ed563b] duration-[0.1s] transition-colors ease-in font-semibold uppercase text-[1vw] cursor-pointer">
            Shadules
          </h4>
          <h4 className="hover:text-[#ed563b] duration-[0.1s] transition-colors ease-in font-semibold uppercase text-[1vw] cursor-pointer">
            Contact
          </h4>
          <button
            className="border-none outline-none bg-[#ed563b] px-2 py-1 sm:px-4 sm:py-3 text-white
          text-[1vw] font-semibold uppercase"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
