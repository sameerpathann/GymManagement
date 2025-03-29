import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={`w-[100%]  h-[10vh] bg-[#ffffff32] px-16 flex items-center justify-between absolute top-0 z-20 ${
          pathname == "/dashboard"
            ? `bg-[#53525230]`
            : pathname == "/addTrainer"
            ? `br`
            : ``
        }`}
      >
        <div className="w-[30%] flex items-center text-[2.5vw] uppercase font-bold gap-[1.5px] h-[100%]">
          <h1
            className={`${
              pathname == "/About" ||
              pathname == "/dashboard" ||
              pathname == "/Classes" ||
              pathname == "/Contact" ||
              pathname == "/addTrainer"
                ? "text-black"
                : "text-white"
            }`}
          >
            Traning
          </h1>
          <h1 className="text-[#ed563b]">studio</h1>
        </div>
        <div className="w-[40%] h-[100%] flex items-center justify-between">
          <NavLink to={"/"}>
            <h4
              className={`font-semibold uppercase text-[1vw] cursor-pointer  hover:text-[#ed563d] transition-colors duration-[0.1s]  ${
                pathname == `/Signup` ||
                pathname == `/Login` ||
                pathname == `/Schedule`
                  ? `text-[#fff]`
                  : `text-black`
              }`}
            >
              Home
            </h4>
          </NavLink>
          <NavLink to={"/About"}>
            <h4
              className={`font-semibold uppercase text-[1vw] cursor-pointer  hover:text-[#ed563d] transition-colors duration-[0.1s] ${
                pathname == `/Signup` ||
                pathname == "/Login" ||
                pathname == `/Schedule`
                  ? `text-[#fff]`
                  : `text-black`
              }`}
            >
              About
            </h4>
          </NavLink>
          <NavLink to={"/Classes"}>
            <h4
              className={`font-semibold uppercase text-[1vw] cursor-pointer  hover:text-[#ed563d] transition-colors duration-[0.1s] ${
                pathname == `/Signup` ||
                pathname == `/Login` ||
                pathname == `/Schedule`
                  ? `text-[#fff]`
                  : `text-black`
              }`}
            >
              Classes
            </h4>
          </NavLink>
          <NavLink to={"/Schedule"}>
            <h4
              className={`font-semibold uppercase text-[1vw] cursor-pointer  hover:text-[#ed563d] transition-colors duration-[0.1s] ${
                pathname == `/Signup` ||
                pathname == `/Login` ||
                pathname == `/Schedule`
                  ? `text-[#fff]`
                  : `text-black`
              }`}
            >
              Shadules
            </h4>
          </NavLink>
          <NavLink to={"/Contact"}>
            <h4
              className={`font-semibold uppercase text-[1vw] cursor-pointer  hover:text-[#ed563d] transition-colors duration-[0.1s] ${
                pathname == `/Signup` ||
                pathname == "/Login" ||
                pathname == `/Schedule`
                  ? `text-[#fff]`
                  : `text-black`
              }`}
            >
              Contact
            </h4>
          </NavLink>
          {JSON.parse(localStorage.getItem("isLogin")) ? (
            <NavLink to={"/dashboard"}>
              <h4
                className={`font-semibold uppercase text-[1vw] cursor-pointer  hover:text-[#ed563d] transition-colors duration-[0.1s] ${
                  pathname == `/Signup` ||
                  pathname == "/Login" ||
                  pathname == `/Schedule`
                    ? `text-[#fff]`
                    : `text-black`
                }`}
              >
                DashBoard
              </h4>
            </NavLink>
          ) : (
            ""
          )}
        </div>
        <div className="w-[20%] h-[100%] flex items-center justify-evenly">
          {JSON.parse(localStorage.getItem("isLogin")) ? (
            <Link to={"/"}>
              <button
                onClick={() => localStorage.clear()}
                className="border-none outline-none bg-[#ed563b] px-2 py-1 sm:px-4 sm:py-3 text-white
          text-[1vw] font-semibold uppercase rounded-2xl"
              >
                Logout
              </button>
            </Link>
          ) : (
            <div className="w-[100%] h-[100%] flex items-center justify-evenly">
              <Link to={"/Signup"}>
                <button
                  className="border-none outline-none bg-[#ed563b] px-2 py-1 sm:px-4 sm:py-3 text-white
          text-[1vw] font-semibold uppercase rounded-2xl"
                >
                  Sign Up
                </button>
              </Link>
              <Link to={"/Login"}>
                <button
                  className="border-none outline-none bg-[#ed563b] px-2 py-1 sm:px-4 sm:py-3 text-white
          text-[1vw] font-semibold uppercase rounded-2xl"
                >
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
