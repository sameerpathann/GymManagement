import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (userDetails.name.length > 0) {
      if (passwordRegex.test(userDetails.password)) {
        if (userDetails.password === userDetails.confirmPassword) {
          localStorage.setItem("User", JSON.stringify(userDetails));
          toast.success("✅SignUp Successful!", {
            position: "top-right",
            autoClose: 5000,
            theme: "dark",
            transition: Flip,
          });
          setUserDetails({ name: "", password: "", confirmPassword: "" });
          setTimeout(() => {
            Navigate("/Login");
          }, 1000);
        } else {
          setError("Password Not Match");
        }
      } else {
        setError(
          "Password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers, and special characters."
        );
      }
    } else {
      setError("Please Enter Your Name");
    }
  };

  const handelChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center pt-10 img-2 px-4 sm:px-6">
      <form
        onSubmit={handelSubmit}
        className="w-full max-w-3xl bg-transparent flex justify-center"
      >
        <div className="w-full sm:w-[80%] md:w-[60%] flex flex-col gap-6 bg-black/50 p-6 sm:p-8 rounded-lg shadow-xl">
          <input
            onChange={handelChange}
            name="name"
            value={userDetails.name}
            className="px-3 py-2 text-white font-medium text-sm sm:text-base bg-transparent border border-white rounded-lg outline-none placeholder:text-white"
            type="text"
            placeholder="Enter Full Name"
          />
          <input
            onChange={handelChange}
            name="password"
            value={userDetails.password}
            className="px-3 py-2 text-white font-medium text-sm sm:text-base bg-transparent border border-white rounded-lg outline-none placeholder:text-white"
            type="password"
            placeholder="Enter Password"
          />
          <input
            onChange={handelChange}
            name="confirmPassword"
            value={userDetails.confirmPassword}
            className="px-3 py-2 text-white font-medium text-sm sm:text-base bg-transparent border border-white rounded-lg outline-none placeholder:text-white"
            type="password"
            placeholder="Confirm Password"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/4 sm:w-1/2 py-2 bg-[#ed563d] text-white text-sm sm:text-base font-semibold rounded hover:bg-[#ed6d57] transition-colors"
            >
              Submit
            </button>
          </div>
          <Link to={"/Login"}>
            <p className="text-white text-center text-sm sm:text-base font-medium">
              Already have an account?
            </p>
          </Link>
          {error && (
            <p className="text-center text-red-500 text-sm sm:text-base font-semibold">
              {error}
            </p>
          )}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
