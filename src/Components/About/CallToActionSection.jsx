import React from "react";

function CallToActionSection() {
  return (
    <section className="w-full bg-primary py-12 flex flex-col items-center text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
      <p className="mb-6">Contact us today and let's build something great together.</p>
      <div className="flex gap-4">
        <button className="bg-white text-primary font-bold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
        <button className="bg-white text-primary font-bold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
          See Our Work
        </button>
      </div>
    </section>
  );
}

export default CallToActionSection;
