import React from "react";

import Routing from "./Components/Routes/Routing";
import { ToastContainer } from "react-toastify";
const App = () => {
  // localStorage.clear();
  return (
    <>
      <Routing />
      <ToastContainer />
    </>
  );
};

export default App;
