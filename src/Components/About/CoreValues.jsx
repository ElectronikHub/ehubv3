import React from "react";

const values = [
  { title: "Integrity", desc: "We act with honesty and transparency." },
  { title: "Innovation", desc: "We embrace creativity and new ideas." },
  { title: "Collaboration", desc: "We work together to achieve more." },
  { title: "Excellence", desc: "We strive for the highest standards." },
  {
    title: "Accountability",
    desc: "We take responsibility for our actions.",
  },
  {
    title: "Customer Focus",
    desc: "We put our clients at the center of everything.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-24 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-tertiary archivo-black-regular leading-tight mb-16 text-center">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {values.map((value) => (
          <div
            key={value.title}
            className="bg-primary/80 backdrop-blur-sm text-tertiary rounded-lg p-6 shadow-lg text-center transition-transform hover:scale-105"
          >
            <h4 className="text-xl font-bold text-secondary mb-2 archivo-black-regular">
              {value.title}
            </h4>
            <p className="text-tertiary montserrat-regular">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;