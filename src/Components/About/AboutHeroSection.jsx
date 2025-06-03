import React from "react";

function AboutHeroSection() {
  return (
    <section className="w-full bg-primary py-16 pt-40 flex flex-col items-center text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Our Story</h1>
      <p className="max-w-2xl mx-auto mb-6">
    We are passionate about delivering innovative business solutions with the latest technology to transform industries and empower people.
      </p>
      <button className="bg-white text-primary font-bold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
        Learn More
      </button>
    </section>
  );
}

export default AboutHeroSection;
