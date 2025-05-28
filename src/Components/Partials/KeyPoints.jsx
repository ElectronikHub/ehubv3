import React from "react";

const keyPoints = [
  {
    title: "Rush",
    subtitle: "Arduino Project",
  },
  {
    title: "Free",
    subtitle: "Thesis Consultation",
  },
  {
    title: "100%",
    subtitle: "Quality Guaranteed",
  },
];

const KeyPoints = () => (
  <div className="w-full flex justify-center items-center bg-white py-8">
    <div className="flex flex-col md:flex-row items-center justify-center max-w-3xl h-64 w-full">
      {keyPoints.map((point, idx) => (
        <React.Fragment key={point.title}>
          {/* Circle */}
          <div className="flex flex-col items-center justify-center bg-[#17375E] text-white rounded-full w-52 h-60 md:w-48 md:h-48 mx-0 md:mx-4 shadow-lg hover:w-52 hover:h-52 transition-all duration-300">
            <span className="font-bold text-2xl md:text-3xl mb-2">{point.title}</span>
            <span className="text-base md:text-lg text-center">{point.subtitle}</span>
          </div>
          {/* Line (except after last circle) */}
          {idx < keyPoints.length - 1 && (
            <div className="hidden md:block h-1 w-16 bg-[#17375E]" />
          )}
          {/* For mobile, vertical line */}
          {idx < keyPoints.length - 1 && (
            <div className="block md:hidden w-1 h-10 bg-[#17375E]" />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default KeyPoints;
