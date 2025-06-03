import React from "react";

const values = [
  { title: "Integrity", desc: "We act with honesty and transparency." },
  { title: "Innovation", desc: "We embrace creativity and new ideas." },
  { title: "Collaboration", desc: "We work together to achieve more." },
  { title: "Excellence", desc: "We strive for the highest standards." },
  { title: "Accountability", desc: "We take responsibility for our actions." },
  { title: "Customer Focus", desc: "We put our clients at the center of everything." },
];

function CoreValuesSection() {
  return (
    <section className="bg-white py-16 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {values.map((value) => (
          <div key={value.title} className="bg-gray-100 rounded-lg p-6 shadow text-center">
            <h4 className="font-bold mb-2">{value.title}</h4>
            <p className="text-gray-600">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreValuesSection;
