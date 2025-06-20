import React from "react";

const IntroSection = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-tertiary archivo-black-regular leading-tight">
        TRANSFORMING IDEAS INTO <br /> REALITY WITH CUTTING EDGE <br />
        TECHNOLOGY
      </h1>
      <div className="mt-10 max-w-2xl mx-auto text-center">
        <p className="text-lg md:text-sm montserrat-regular text-tertiary leading-relaxed">
          <span className="font-bold text-tertiary uppercase">
            Electronik <span className="text-tertiary">Hub</span>
          </span>{" "}
          was founded in 2016 by a team of innovators who won the 11th Smart Wireless Engineering Education Program (SWEEP). To address the scarcity and high cost of electronics components in the Philippines, they established a one-stop shop, initially operating from a small apartment and offering thesis fabrication services. In 2022, they moved to their own property, becoming a premier destination for DIY electronics in Nueva Ecija. Catering to hobbyists, students, and professionals, Electronik Hub provides high-quality, affordable products, fostering innovation and excellence.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;