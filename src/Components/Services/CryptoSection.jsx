import React from "react";

function ServiceCard({ service }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
            <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-12">

                {/* Text Content */}
                <div className="max-w-lg text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight drop-shadow-md">
                        BLOCKCHAIN/<br />CRYPTOCURRENCY
                    </h1>
                    <p className="mt-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                        Harness blockchain for secure, transparent digital solutions.<br />
                        We build dApps, smart contracts, and custom tokens to power innovation in finance, supply chain, and identity.
                    </p>
                </div>

                {/* Image Content */}
                <div className="w-full max-w-md md:max-w-lg flex justify-center md:justify-end">
                    <img
                        src="./Assets/ccyy.png"
                        alt="Cryptocurrency market chart showing trends and analytics"
                        className="rounded-2xl w-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </section>
        </div>


    );
}

export default ServiceCard;
