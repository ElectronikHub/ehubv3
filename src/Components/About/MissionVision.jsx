import React from "react";

const MissionVision = () => {
  return (
    <>
      {/* MISSION SECTION */}
      <div className="mt-8 max-w-6xl mx-auto flex flex-wrap justify-center md:flex-nowrap items-center gap-6 px-4">
        {/* Text Box */}
        <div className="bg-primary text-tertiary rounded-xl shadow-xl flex flex-col justify-center w-[95%] sm:w-[90%] md:w-[45%] p-4 sm:p-6 md:p-8 min-h-[260px] md:min-h-[300px]">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-3 sm:mb-4 archivo-black-regular text-center">
            MISSION
          </h3>
          <p className="text-sm sm:text-base md:text-lg montserrat-regular leading-relaxed text-center">
            To empower innovation and excellence by fostering creativity,
            enabling technological growth, and delivering expert solutions for
            individuals and businesses alike.
          </p>
        </div>

        {/* Image Box */}
        <div className="w-[95%] sm:w-[90%] md:w-[45%] mx-auto md:mx-0">
          <img
            src="/Assets/Picture1 new.png"
            alt="Our Mission"
            className="w-full h-auto object-contain rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* VISION SECTION */}
      <div className="mt-16 max-w-6xl mx-auto flex flex-wrap justify-center md:flex-nowrap md:flex-row-reverse items-center gap-6 px-4">
        {/* Text Box */}
        <div className="bg-primary text-tertiary rounded-xl shadow-xl flex flex-col justify-center w-[95%] sm:w-[90%] md:w-[45%] p-4 sm:p-6 md:p-8 min-h-[260px] md:min-h-[300px]">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-3 sm:mb-4 archivo-black-regular text-center">
            VISION
          </h3>
          <p className="text-sm sm:text-base md:text-lg montserrat-regular leading-relaxed text-center">
            To inspire and lead in innovation by connecting creative ideas with
            advanced solutions that drive technological progress and shape the
            future.
          </p>
        </div>

        {/* Image Box */}
        <div className="w-[95%] sm:w-[90%] md:w-[45%] mx-auto md:mx-0">
          <img
            src="/Assets/Picture2 new.png"
            alt="Our Vision"
            className="w-full h-auto object-contain rounded-xl shadow-xl"
          />
        </div>
      </div>
    </>
  );
};

export default MissionVision;
