import React from "react";

const MeetOurTeam = () => {
  return (
    <>
      <div className="text-center mt-20 mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-tertiary archivo-black-regular leading-tight">
          Meet Our Team
        </h1>
      </div>
      <div
        className="w-[1065px] h-[910px] bg-no-repeat bg-auto bg-center relative flex items-center justify-center mx-auto mb-16"
        style={{ backgroundImage: "url('/Assets/ourteam.png')" }}
      ></div>
    </>
  );
};

export default MeetOurTeam;