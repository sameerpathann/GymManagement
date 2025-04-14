import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    if (userDetails.name.length > 0) {
      const storedUser = JSON.parse(localStorage.getItem("User"));
      if (!storedUser) {
        setError("Please Signup First");
        return;
      }

      const { name, password } = storedUser;

      if (userDetails.name === name && userDetails.password === password) {
        toast.success("✅Login Successful!", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          transition: Flip,
        });

        setUserDetails({ name: "", password: "" });
        localStorage.setItem("isLogin", JSON.stringify(true));
        setTimeout(() => {
          Navigate("/dashboard");
        }, 1000);
      } else {
        setError("Invalid Credentials");
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
        className="w-full max-w-md bg-black/50 p-6 sm:p-8 rounded-lg shadow-xl flex flex-col gap-6"
      >
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
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-3/4 sm:w-1/2 py-2 bg-[#ed563d] text-white text-sm sm:text-base font-semibold rounded hover:bg-[#ed6d57] transition-colors"
          >
            Submit
          </button>
        </div>
        <Link to={"/Signup"}>
          <p className="text-white text-center text-sm sm:text-base font-medium">
            Don’t have an account?
          </p>
        </Link>
        {error && (
          <p className="text-center text-red-500 text-sm sm:text-base font-semibold">
            {error}
          </p>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
