import React from "react";

function ServiceCard({ service }) {
    return (
        <div className="bg-tertiary">
            <div className="w-screen h-8 bg-secondary" />
            <div className="min-h-screen flex items-center justify-center px-6">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-12">
                    <div className="max-w-lg text-center md:text-left">
                        <h1 className="text-4xl font-extrabold text-blue-900 leading-tight drop-shadow-md">
                            ARTIFICIAL<br />INTELLIGENCE
                        </h1>
                        <p className="mt-6 text-gray-700 text-base">
                            Transform your ideas with our cutting-edge AI solutions. We build
                            intelligent systems using machine learning, NLP, and computer
                            vision to automate tasks, deliver insights, and drive innovation.
                            From business intelligence to smart devices, our custom AI
                            services boost efficiency, accuracy, and impact—tailored for your
                            industry.
                        </p>
                    </div>
                    <div>
                        <img
                            src='./Assets/Crypto.png'
                            alt="Artificial Intelligence"
                            className="rounded-2xl shadow-lg w-full max-w-md"
                        />
                    </div>
                </div>
            </div>
        </div>




    );
}

export default ServiceCard;
