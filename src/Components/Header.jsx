import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="w-[100%]  h-[10vh] bg-[#ffffff32] px-16 flex items-center justify-between absolute top-0 z-20">
        <div className="w-[30%] flex items-center text-[2.5vw] uppercase font-bold gap-[1.5px] h-[100%]">
          <h1 className="text-white">Traning</h1>
          <h1 className="text-[#ed563b]">studio</h1>
        </div>
        <div className="w-[55%] h-[100%] flex items-center justify-evenly">
          <NavLink to={"/"}>
            <h4
              className={`font-semibold uppercase text-[1vw] cursor-pointer  hover:text-[#ed563d] transition-colors duration-[0.1s]  ${
                pathname == `/Signup` ? `text-[#fff]` : `text-black`
              }`}
            >
              Home
            </h4>
          </NavLink>
          <NavLink to={"/About"}>
            <h4
              className={`font-semibold uppercase text-[1vw] cursor-pointer  hover:text-[#ed563d] transition-colors duration-[0.1s] ${
                pathname == `/Signup` ? `text-[#fff]` : `text-black`
              }`}
            >
              About
            </h4>
          </NavLink>
          <NavLink to={"/Classes"}>
            <h4
              className={`font-semibold uppercase text-[1vw] cursor-pointer  hover:text-[#ed563d] transition-colors duration-[0.1s] ${
                pathname == `/Signup` ? `text-[#fff]` : `text-black`
              }`}
            >
              Classes
            </h4>
          </NavLink>
          <NavLink to={"/Schedule"}>
            <h4
              className={`font-semibold uppercase text-[1vw] cursor-pointer  hover:text-[#ed563d] transition-colors duration-[0.1s] ${
                pathname == `/Signup` ? `text-[#fff]` : `text-black`
              }`}
            >
              Shadules
            </h4>
          </NavLink>
          <NavLink to={"/Contact"}>
            <h4
              className={`font-semibold uppercase text-[1vw] cursor-pointer  hover:text-[#ed563d] transition-colors duration-[0.1s] ${
                pathname == `/Signup` ? `text-[#fff]` : `text-black`
              }`}
            >
              Contact
            </h4>
          </NavLink>
          <Link to={"/Signup"}>
            <button
              className="border-none outline-none bg-[#ed563b] px-2 py-1 sm:px-4 sm:py-3 text-white
          text-[1vw] font-semibold uppercase"
            >
              Sign Up
            </button>
          </Link>
          <Link to={"/Login"}>
            <button
              className="border-none outline-none bg-[#ed563b] px-2 py-1 sm:px-4 sm:py-3 text-white
          text-[1vw] font-semibold uppercase"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
