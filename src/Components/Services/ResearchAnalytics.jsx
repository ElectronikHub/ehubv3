import React from "react";

function ServiceCard({ service }) {
    return (
        <div id="research-paper-consultation-section" className="w-screen h-screen bg-[#103054] relative text-white font-montserrat">
            {/* Left Side with Image */}
            <div className="absolute top-0 left-0 w-full md:w-[46vw] h-screen bg-[#cccccc] overflow-hidden">
                <img
                    src="/Assets/research.png"
                    alt="research"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text on Right (Blue Background) */}
            <div className="absolute top-[20%] left-[5%] md:left-[50vw] w-[90%] md:w-[45vw] p-8">
                <h2 className="archivo-black-regular text-3xl text-tertiary font-semibold mb-4">
                    Research & Analytics
                </h2>
                <p className="montserrat-regular text-lg leading-relaxed text-tertiary">
                    Elevate your research with our expert consultation and data analytics
                    services. We help you craft strategies, refine methodologies, and
                    analyze data for powerful, accurate insights. Whether qualitative or
                    quantitative, our tailored support ensures impactful academic and
                    professional outcomes.
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;
