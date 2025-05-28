import React from "react";

function ServicesNav({ handlePrev, handleNext, isPrevDisabled, isNextDisabled }) {
  return (
    <div className="flex lg:flex-col gap-4 mt-8 lg:mt-0 lg:ml-8 pt-16">
      <button
        onClick={handlePrev}
        disabled={isPrevDisabled}
        className={`bg-secondary text-tertiary p-3 rounded-full shadow-lg ${
          isPrevDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-[#d1741f] transition duration-300"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        disabled={isNextDisabled}
        className={`bg-secondary text-tertiary p-3 rounded-full shadow-lg ${
          isNextDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-[#d1741f] transition duration-300"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default ServicesNav;
