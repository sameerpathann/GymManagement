import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const navLinks = (
    <>
      <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
        <h4 className="hover:text-[#ed563d] transition-colors">Home</h4>
      </NavLink>
      <NavLink to="/About" onClick={() => setIsMenuOpen(false)}>
        <h4 className="hover:text-[#ed563d] transition-colors">About</h4>
      </NavLink>
      <NavLink to="/Classes" onClick={() => setIsMenuOpen(false)}>
        <h4 className="hover:text-[#ed563d] transition-colors">Classes</h4>
      </NavLink>
      <NavLink to="/Schedule" onClick={() => setIsMenuOpen(false)}>
        <h4 className="hover:text-[#ed563d] transition-colors">Schedules</h4>
      </NavLink>
      <NavLink to="/Contact" onClick={() => setIsMenuOpen(false)}>
        <h4 className="hover:text-[#ed563d] transition-colors">Contact</h4>
      </NavLink>
      {isLogin && (
        <NavLink to="/dashboard" onClick={() => setIsMenuOpen(false)}>
          <h4 className="hover:text-[#ed563d] transition-colors">Dashboard</h4>
        </NavLink>
      )}
    </>
  );

  return (
    <div
      className={`w-full h-[10vh] px-6 sm:px-10 lg:px-16 flex items-center justify-between absolute top-0 z-20 bg-[#ffffff32] ${
        pathname === "/dashboard" ? `bg-[#53525230]` : ""
      }`}
    >
      <div className="text-[6vw] sm:text-[3vw] lg:text-[2.5vw] uppercase font-bold flex gap-1 items-center">
        <h1
          className={`${
            [
              "/About",
              "/dashboard",
              "/Classes",
              "/Contact",
              "/addTrainer",
              "/addUser",
            ].includes(pathname) ||
            pathname.startsWith("/EditTrainer") ||
            pathname.startsWith("/EditUser") ||
            pathname === "/addMembership"
              ? "text-black"
              : "text-white"
          }`}
        >
          Traning
        </h1>
        <h1 className="text-[#ed563b]">studio</h1>
      </div>
      <div className="hidden md:flex gap-6 text-[1vw] font-semibold uppercase items-center text-black">
        {navLinks}
      </div>
      <div className="hidden md:flex items-center gap-4">
        {isLogin ? (
          <button
            onClick={handleLogout}
            className="bg-[#ed563b] px-4 py-2 text-white text-[1vw] font-semibold uppercase rounded-2xl"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/Signup">
              <button className="bg-[#ed563b] px-4 py-2 text-white text-[1vw] font-semibold uppercase rounded-2xl">
                Sign Up
              </button>
            </Link>
            <Link to="/Login">
              <button className="bg-[#ed563b] px-4 py-2 text-white text-[1vw] font-semibold uppercase rounded-2xl">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
      <div className="md:hidden z-50">
        {isMenuOpen ? (
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 text-white z-50"
          >
            <RxCross2 size={30} />
          </button>
        ) : (
          <button onClick={() => setIsMenuOpen(true)} className="z-50">
            <HiOutlineMenuAlt3
              size={30}
              className={`transition-colors duration-200 ${
                pathname === "/About" ||
                pathname === "/dashboard" ||
                pathname === "/Classes" ||
                pathname === "/Contact" ||
                pathname === "/addTrainer" ||
                pathname === "/addUser" ||
                pathname.startsWith("/EditTrainer") ||
                pathname.startsWith("/EditUser")
                  ? "text-black"
                  : "text-white"
              }`}
            />
          </button>
        )}
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[70%] bg-[#0f0f0f] bg-opacity-95 backdrop-blur-sm 
  text-white flex flex-col items-start pt-20 px-8 gap-6 text-lg font-semibold overflow-y-auto
  z-50 shadow-lg transform ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white z-[100]"
        >
          <RxCross2 size={30} />
        </button>

        {navLinks}
        <div className="mt-4 flex flex-col gap-3 w-full">
          {isLogin ? (
            <button
              onClick={handleLogout}
              className="bg-[#ed563b] px-4 py-2 text-white font-semibold uppercase rounded-2xl"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/Signup" onClick={() => setIsMenuOpen(false)}>
                <button className="bg-[#ed563b] px-4 py-2 text-white font-semibold uppercase rounded-2xl w-full">
                  Sign Up
                </button>
              </Link>
              <Link to="/Login" onClick={() => setIsMenuOpen(false)}>
                <button className="bg-[#ed563b] px-4 py-2 text-white font-semibold uppercase rounded-2xl w-full">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
