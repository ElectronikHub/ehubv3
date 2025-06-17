import React from "react";

function ServiceCard({ service }) {
  return (
    <div className="bg-[#0B2E51] text-white rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md">
      <div className="flex gap-2 mb-4 h-10 justify-center">
        {service.icons && service.icons.length > 0 ? (
          service.icons.map((iconSrc, index) => (
            <img
              key={index}
              src={iconSrc}
              alt={`${service.title} icon ${index + 1}`}
              className="w-14 h-10 object-contain"
              loading="lazy"
            />
          ))
        ) : (
          <div className="w-14 h-10 flex items-center justify-center text-gray-500 text-xs"></div>
        )}
      </div>
      <h3 className="archivo-black-regular text-lg md:text-xl font-bold text-secondary mb-3">
        {service.title}
      </h3>
      <p className="text-xs md:text-sm montserrat-regular text-tertiary flex-grow">
        {service.description}
      </p>
      <a href="#a">
        <button
          className="archivo-black-regular mt-6 bg-secondary text-tertiary text-xs md:text-sm px-4 py-2 rounded-full hover:bg-[#d1741f] transition duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          tabIndex={0}
        >
          Learn More
        </button>
      </a>
    </div>
  );
}

export default ServiceCard;
