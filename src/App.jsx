import React from "react";
import Header from "./Components/Header";
import Video from "./Components/Video";
import Shadow from "./Components/Shadow";
const App = () => {
  return (
    <>
      <div className="w-[100%] h-screen  relative overflow-hidden">
        <Video />
        <Shadow />
        <Header />
      </div>
      {/* <div className="h-[100vh]  bg-red-400"></div> */}
    </>
  );
};

export default App;
