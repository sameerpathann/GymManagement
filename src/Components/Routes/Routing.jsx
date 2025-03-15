import React from "react";
import { Route, Routes } from "react-router-dom";
import Scection from "../Scection";
import Header from "../Header";
import OurClasses from "../OurClasses";
import Schedule from "../Schedule";
import Footer from "../Footer";
import Home from "../Home";
import Form from "../Form";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Scection />} />
        <Route path="/Classes" element={<OurClasses />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Contact" element={<Footer />} />
        <Route path="/Signup" element={<Form />} />
      </Routes>
    </>
  );
};

export default Routing;
