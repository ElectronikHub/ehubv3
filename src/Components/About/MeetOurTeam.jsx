// src/components/MeetOurTeam.jsx

import React from "react";

const MeetOurTeam = () => {
  return (
    <>
      <div className="text-center mt-20 mb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-tertiary archivo-black-regular leading-tight">
          Meet Our Team
        </h1>
      </div>

      <div className="mx-auto mb-16 px-4">
        <img
          src="/Assets/ourteam.png"
          alt="Our Team"
          className="
            w-[90%]
            sm:w-[400px]
            md:w-[500px]
            lg:w-[600px]
            xl:w-[700px]
            2xl:w-[800px]
            h-auto
            mx-auto
            rounded-xl
            shadow-md
            object-cover
          "
        />
      </div>
    </>
  );
};

export default MeetOurTeam;
