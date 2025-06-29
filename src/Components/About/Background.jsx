import React from "react";

const Background = () => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center -z-10"
      style={{
        backgroundImage: "url('/Assets/bgforourteam.png')",
      }}
    ></div>
  );
};

export default Background;