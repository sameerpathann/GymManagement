import React, { useEffect } from "react";

import Routing from "./Components/Routes/Routing";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const App = () => {
  // localStorage.clear();
  const navigate = useNavigate();
  const login = localStorage.getItem("isLogin") === "true";
  useEffect(() => {
    navigate(login ? "/dashboard" : "/");
  }, [login]);
  return (
    <>
      <Routing />
      <ToastContainer />
    </>
  );
};

export default App;
