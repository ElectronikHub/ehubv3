import React from "react";

function ServiceCard({ service }) {
  return (
      <div className="min-h-screen bg-primary relative flex flex-col lg:flex-row items-center">
        {" "}
        {/* Changed lg:flex-row-reverse to lg:flex-row */}
        {/* Text Content - now on the left */}
        <div className="lg:w-1/2 w-full p-8 lg:p-16 text-center lg:text-left flex flex-col justify-center items-center lg:items-start z-10">
          <h2 className="archivo-black-regular text-tertiary text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            LOGIC CONTROLLER
          </h2>
          <p className="montserrat-regular text-tertiary text-base sm:text-lg lg:text-xl max-w-xl">
            We deliver customized PLC solutions to automate and optimize
            industrial processes. Our systems enhance efficiency, reduce manual
            effort, and ensure precise control across industries like
            manufacturing and energy.
          </p>
        </div>
        {/* Image Content - now on the right */}
        <div className="lg:w-1/2 w-full h-64 lg:h-full flex justify-center lg:justify-start items-center overflow-hidden">
          <img
            src="/Assets/Logic Controller.png"
            alt="Programmable Logic Controller (PLC) interface"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
  );
}

export default ServiceCard;
