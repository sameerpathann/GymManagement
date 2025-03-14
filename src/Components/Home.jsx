import React from "react";
import Video from "./Video";
import Shadow from "./Shadow";
import Header from "./Header";
import Scection from "./Scection";
import Banner from "./Banner";
import OurClasses from "./OurClasses";
import Schedule from "./Schedule";
import Trainer from "./Trainer";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="w-[100%] h-screen  relative overflow-hidden">
        <Video />
        <Shadow />
        <Header />
      </div>
      <Scection />
      <Banner />
      <OurClasses />
      <Schedule />
      <Trainer />
      <Footer />
    </>
  );
};

export default Home;
