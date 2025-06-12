import React from "react";

function ServiceCard({ service }) {
    return (
        <div className="relative w-screen h-screen flex overflow-hidden bg-primary">
            {/* Left: Image */}
            <div className="flex-1 h-full">
                <img
                    src="/Assets/solar.png"
                    alt="Solar panel installation"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right: Curved Overlay with Text */}
            <div className="relative flex items-center justify-center w-full max-w-2xl h-full z-10">
                <div className="absolute left-[-10vw] top-0 h-full w-[80vw] bg-primary rounded-l-[40%] shadow-lg hidden md:block"></div>
                <div className="relative px-8 py-12 md:px-16 md:py-0 text-white z-20 w-full">
                    <h1 className="text-3xl md:text-5xl font-bold mb-8">SOLAR PANEL SYSTEM</h1>
                    <p className="text-base md:text-lg leading-relaxed">
                        Power your home or business with our complete solar solutions—from assessment to installation and maintenance. We optimize every system for peak efficiency, cutting energy costs and reducing your carbon footprint.
                    </p>
                </div>
            </div>
        </div>




    );
}

export default ServiceCard;
