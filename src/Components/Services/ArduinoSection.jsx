import React from "react";

function ArduinoSection() {
  return (
    <div id="arduino-section" className="py-20 bg-primary text-center">
      <h2 className="archivo-black-regular text-3xl sm:text-4xl lg:text-5xl text-tertiary mb-12">
        ARDUINO/RASPBERRY PI <br /> PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="relative w-full h-64 sm:h-80 md:h-96 group shadow-2xl rounded-2xl overflow-hidden">
          <img
            src="/Assets/arduino.new.png"
            alt="Electronic prototype circuit board"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
          />
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-2xl opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible p-4">
            <p className="text-lg text-center text-tertiary">
              Arduino is a powerful tool for developing applications that require direct interaction with sensors and actuators. It is ideal for simple to moderately complex projects that benefit from real-time processing and straightforward hardware control. Its simplicity makes it a popular choice for tasks such as reading sensor data, controlling LEDs or motors, and creating basic automation systems.
            </p>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-80 md:h-96 group shadow-2xl rounded-2xl overflow-hidden">
          <img
            src="/Assets/rasp.png"
            alt="Arduino board with components"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
          />
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-2xl opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible p-4">
            <p className="text-lg text-center text-tertiary">
              Raspberry Pi, on the other hand, functions as a full-fledged mini-computer capable of handling more complex computations. It is well-suited for applications that require multitasking, graphical user interfaces, or internet connectivity. Raspberry Pi is commonly used in projects involving media centers, web servers, or data processing that goes beyond the capabilities of microcontrollers like Arduino.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <a
          href="#contact-section"
          className="archivo-black-regular bg-secondary text-tertiary text-sm px-6 py-3 rounded-full hover:bg-[#d1741f] transition duration-300 inline-block"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default ArduinoSection;
