import React from "react";

const MissionVision = () => {
  return (
    <>
      <div className="mt-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="bg-primary text-tertiary p-8 rounded-lg shadow-xl md:w-[45%] flex flex-col justify-center min-h-[300px]">
          <h3 className="text-4xl font-extrabold text-secondary mb-4 archivo-black-regular text-center">
            MISSION
          </h3>
          <p className="text-lg montserrat-regular leading-relaxed text-center">
            To empower innovation and excellence by fostering creativity, enabling technological growth, and delivering expert solutions for individuals and businesses alike.
          </p>
        </div>
        <div
          className="mx-auto md:mx-0 mt-9 -translate-x-12"
          style={{ width: "490px", height: "262px" }}
        >
          <img
            src="./Assets/Picture1 new.png"
            alt="Our Mission"
            className="w-full h-auto object-contain rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="mt-20 max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8 px-4">
        <div className="bg-primary text-tertiary p-8 rounded-lg shadow-xl md:w-[45%] flex flex-col justify-center min-h-[300px]">
          <h3 className="text-4xl font-extrabold text-secondary mb-4 archivo-black-regular text-center">
            VISION
          </h3>
          <p className="text-lg montserrat-regular leading-relaxed text-center">
            To inspire and lead in innovation by connecting creative ideas
              with advanced solutions that drive technological progress and
              shape the future.
          </p>
        </div>
        <div
          className="mx-auto md:mx-0 mt-9 translate-x-12"
          style={{ width: "490px", height: "262px" }}
        >
          <img
            src="./Assets/Picture2 new.png"
            alt="Our Vision"
            className="w-full h-auto object-contain rounded-lg shadow-xl"
          />
        </div>
      </div>
    </>
  );
};

export default MissionVision;