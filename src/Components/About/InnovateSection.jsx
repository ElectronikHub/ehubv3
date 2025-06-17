import React from "react";
import ReactPlayer from "react-player";

const InnovateSection = () => {
  return (
    <div className="text-center mt-10 mb-10 pb-6">
      <h2 className="text-3xl md:text-4xl text-secondary font-bold montserrat2-regular">
        Innovate, Connect, & Inspire
      </h2>
      <div className="flex justify-center mt-12 mb-20">
        <div className="w-full max-w-[650px] h-[350px] rounded-md shadow-md overflow-hidden">
          <ReactPlayer
            url="https://www.facebook.com/watch/?v=593308119946909"
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>
    </div>
  );
};

export default InnovateSection;