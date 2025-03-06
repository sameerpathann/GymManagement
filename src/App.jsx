import React from "react";
import Header from "./Components/Header";
import Video from "./Components/Video";
import Shadow from "./Components/Shadow";
import Scection from "./Components/Scection";
import Banner from "./Components/Banner";
import OurClasses from "./Components/OurClasses";
import Schedule from "./Components/Schedule";
import Trainer from "./Components/Trainer";
import Footer from "./Components/Footer";
const App = () => {
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

export default App;
