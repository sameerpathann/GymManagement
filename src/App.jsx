import React from "react";
import Header from "./Components/Header";
import Video from "./Components/Video";
import Shadow from "./Components/Shadow";
import Scection from "./Components/Scection";
const App = () => {
  return (
    <>
      <div className="w-[100%] h-screen  relative overflow-hidden">
        <Video />
        <Shadow />
        <Header />
      </div>
      <Scection />
    </>
  );
};

export default App;
