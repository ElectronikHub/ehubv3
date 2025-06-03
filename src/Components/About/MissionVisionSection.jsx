import React from "react";

// Replace with your actual image paths
const MISSION_IMAGE = "/assets/pic1.png";
const VISION_IMAGE = "/assets/pic2.png";

function MissionVisionSection() {
  return (
    <section className="py-16 bg-white flex flex-col gap-12 items-center">
      {/* Mission Card */}
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full rounded-xl shadow-lg overflow-hidden">
        <div className="flex-1 p-8 flex flex-col justify-center bg-primary">
          <h2 className="text-3xl font-bold text-secondary mb-4 tracking-wider">MISSION</h2>
          <p className="text-white text-lg max-w-96">
            To empower innovation and excellence by fostering creativity, enabling technological growth, and delivering expert solutions for individuals and organizations alike.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center -translate-x-10 border-black border">
              <img
          src={MISSION_IMAGE}
          alt="Mission"
          className="w-full h-auto object-cover"
        />
        </div>

      </div>
      {/* Vision Card */}
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full rounded-xl shadow-lg overflow-hidden">
                <div className="flex-1 flex items-center justify-center translate-x-10 border-black border">
              <img
          src={VISION_IMAGE}
          alt="Mission"
          className="w-full h-auto object-cover"
        />
        </div>
        <div className="flex-1 p-8 flex flex-col justify-center bg-primary">
          <div className="ml-10">
            <h2 className="text-3xl font-bold text-secondary mb-4 tracking-wider">VISION</h2>
            <p className="text-white text-lg max-w-96 ">
              To inspire and lead in technological advancements, bridging creative ideas with cutting-edge solutions to shape a progressive future.

            </p>
          </div>
        </div>


      </div>
    </section>
  );
}

export default MissionVisionSection;
