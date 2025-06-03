import React from "react";

const testimonials = [
  {
    name: "Robert Thompson",
    feedback: "Amazing team! Their solutions transformed our business.",
  },
  {
    name: "Lisa Wong",
    feedback: "Professional, innovative, and reliable. Highly recommended.",
  },
  {
    name: "James Lee",
    feedback: "A pleasure to work with. Delivered beyond expectations.",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-white py-16 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-gray-100 rounded-lg p-6 shadow text-center">
            <p className="italic mb-4">"{t.feedback}"</p>
            <h4 className="font-bold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
