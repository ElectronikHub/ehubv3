import React from "react";
import ServiceCard from "./ServiceCard";

function ServicesGrid({ visibleServices }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
      {visibleServices.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}

export default ServicesGrid;
