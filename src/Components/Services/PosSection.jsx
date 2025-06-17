import React from "react";

function ServiceCard({ service }) {
    return (
        <div
            id="point-of-sale-section"
            className="w-full h-screen bg-cover bg-center relative"
            style={{ backgroundImage: "url('/Assets/pos.png')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60" />

            {/* Text Content */}
            <div className="relative flex flex-col items-center justify-center h-full px-4">
                <div className="bg-black bg-opacity-40 rounded-xl p-8 max-w-2xl w-full">
                    <h3
                        className="archivo-black-regular text-tertiary text-3xl text-center"
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                    >
                        POINT OF SALE [POS]
                    </h3>
                    <p className="mt-4 text-tertiary text-2xl text-center">
                        Boost your business with our all-in-one POS solutions. Our systems
                        streamline checkout, track inventory, and deliver real-time sales
                        insights—enhancing efficiency and customer experience. Easy to use and
                        fully customizable for retail, hospitality, and more, with secure
                        payment processing to support your growth.
                    </p>
                </div>
            </div>
        </div>

    );
}

export default ServiceCard;
