import React, { useEffect, useState } from "react";
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
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (userDetails.name.length > 0) {
      if (passwordRegex.test(userDetails.password)) {
        setError("");
        localStorage.setItem("Name", userDetails.name);
        toast.success("✅ Login Successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          newestOnTop: false,
          closeOnClick: false,
          rtl: false,
          pauseOnFocusLoss: true,
          draggable: true,
          pauseOnHover: true,
          theme: "dark",
          transition: Flip,
        });

        setUserDetails({ name: "", password: "", confirmPassword: "" });
        Navigate("/Dashboard");
      } else {
        setError(
          "Password must contain at least 8 characters, including uppercase letters, lowercase letters, numbers, and special characters."
        );
      }
    } else {
      setError("Plase Enter Your Name");
    }
  };
  const handelChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="w-[100%] h-[100vh] flex items-center justify-center pt-10 img-2">
        <form
          onSubmit={(e) => handelSubmit(e)}
          className="w-[60%] h-[80%] flex items-center justify-center"
        >
          <div className="w-[50%] min-h-[90%] flex flex-col gap-8 justify-center ify- box-shadow-2 px-5 py-5">
            <input
              onChange={(e) => handelChange(e)}
              name="name"
              className="px-2 cursor-pointer py-2 text-[#fff] font-semibold text-[1.2vw] placeholder:text-[#fff] bg-transparent placeholder border-none padding outline-none ring-1 ring-[#fff] rounded-lg w-[100%]"
              type="text"
              placeholder="Enter fullName"
              value={userDetails.name}
            />
            <input
              onChange={(e) => handelChange(e)}
              value={userDetails.password}
              name="password"
              className="px-2 cursor-pointer py-2 text-[#fff] font-semibold text-[1.2vw] placeholder:text-[#fff] bg-transparent placeholder border-none padding outline-none ring-1 ring-[#fff] rounded-lg w-[100%]"
              type="text"
              placeholder="Enter Password"
            />

            <div className="w-[100%] h-[16%] flex items-center justify-center">
              <button className="w-[70%] text-[1.5vw] px-2 py-2 rounded bg-[#ed563d] text-white font-semibold mt-5 ">
                Submit
              </button>
            </div>
            <Link to={"/Login"}>
              <h4 className="text-white text-center text-[1.3vw] font-semibold]">
                Already Have an Account ?
              </h4>
            </Link>
            <h4 className="text-[1.3vw] font-semibold text-red-600 text-center">
              {error}
            </h4>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
