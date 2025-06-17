import React from "react";

function ServiceCard({ service }) {
  return (
     <div id="web-dev-section" className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl archivo-black-regular text-primary font-bold leading-tight">
            Professional Web Development Service
          </h2>
          <p className="mt-8 text-lg sm:text-xl montserrat-regular max-w-4xl mx-auto">
            We are your trusted partner for smart, scalable, and stunning
            websites. Our digital agency combines strategy, code, and creativity
            to elevate your brand and online experience. Whether you're
            launching or leveling up — we build solutions that work.
          </p>
        </div>

        <div
          id="section-web"
          className="flex flex-wrap justify-center items-stretch gap-8 px-4 sm:px-6 lg:px-8 pt-16 pb-20"
        >
          {/* project 1 */}
          <div className="w-full sm:w-60 h-60 bg-primary text-white rounded-2xl p-6 shadow-2xl flex flex-col justify-center items-center">
            <div className="rounded-full bg-tertiary w-24 h-24 flex justify-center items-center mb-4">
              <img
                src="./Assets/paper.png"
                alt="Paper document icon"
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="archivo-black-regular text-tertiary text-lg">
              BRANDING
            </span>
          </div>

          {/* project 2 */}
          <div className="w-full sm:w-60 h-60 bg-primary text-white rounded-2xl p-6 shadow-2xl flex flex-col justify-center items-center">
            <div className="rounded-full bg-tertiary w-24 h-24 flex justify-center items-center mb-4">
              <img
                src="./Assets/reward.png"
                alt="Reward ribbon icon"
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="archivo-black-regular text-tertiary text-lg">
              QUALITY
            </span>
          </div>

          {/* project 3 */}
          <div className="w-full sm:w-60 h-60 bg-primary text-white rounded-2xl p-6 shadow-2xl flex flex-col justify-center items-center">
            <div className="rounded-full bg-tertiary w-24 h-24 flex justify-center items-center mb-4">
              <img
                src="./Assets/paint.png"
                alt="Paint palette icon"
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="archivo-black-regular text-tertiary text-lg">
              DESIGN
            </span>
          </div>

          {/* project 4 */}
          <div className="w-full sm:w-60 h-60 bg-primary text-white rounded-2xl p-6 shadow-2xl flex flex-col justify-center items-center">
            <div className="rounded-full bg-tertiary w-24 h-24 flex justify-center items-center mb-4">
              <img
                src="./Assets/light.png"
                alt="Lightbulb icon"
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="archivo-black-regular text-tertiary text-lg">
              CREATIVITY
            </span>
          </div>
        </div>
      </div>
  );
}

export default ServiceCard;
