import React from "react";

function WhoWeAreSection() {
  return (
    <section className="bg-white py-16 flex flex-col items-center px-20">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="w-auto h-auto bg-gray-200 flex items-center justify-center rounded-xl mb-6 md:mb-0">
          <img src="/Assets/about-ehuboffice.png" alt="" className="w-full"/>
        </div>
        <div className="px-5">&nbsp;</div>
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
          <p className="text-gray-600 mb-4">
           Engineering Education Program (SWEEP). To address the scarcity and high cost of electronics components in the Philippines, they established a one-stop shop, initially operating from a small apartment and offering thesis fabrication services. In 2022, they moved to their own property, becoming a premier destination for DIY electronics in Nueva Ecija. Catering to hobbyists, students, and professionals, Electronik Hub provides high-quality, affordable products, fostering innovation and excellence.
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <span className="bg-gray-100 px-4 py-1 rounded-full text-sm">Innovate</span>
            <span className="bg-gray-100 px-4 py-1 rounded-full text-sm">Connect</span>
            <span className="bg-gray-100 px-4 py-1 rounded-full text-sm">Inspire</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAreSection;
