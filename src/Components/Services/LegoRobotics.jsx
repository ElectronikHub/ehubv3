import React from "react";

function ServiceCard({ service }) {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-primary">
            {/* Left: Image */}
            <div className="md:w-1/2 w-full h-64 md:h-full relative">
                <img
                    src="/Assets/lego.png"
                    alt="Lego"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Right: Text */}
            <div className="flex items-center justify-center md:w-1/2 w-full bg-primary px-6 py-12 md:py-0">
                <div className="block text-white">
                    <h2 className="archivo-black-regular text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
                        LEGO ROBOTICS
                    </h2> <br /><br />
                    <span className="montserrat-regular text-lg md:text-xl text-center max-w-md">
                        Empower learning with our complete LEGO EV3 kits and expert-led training programs.<br /><br />
                        From beginners to advanced users, we provide the tools and skills to master robotics—perfect for students, educators, and hobbyists.
                    </span>
                </div>
            </div>
        </div>

    );
}

export default ServiceCard;
