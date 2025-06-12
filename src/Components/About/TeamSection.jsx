import React from "react";

const team = [
  { name: "Donne Joshua E. Arcilla", position: "CEO", desc: "Ehub Engineering Team Department" },
  { name: "Prince Ralph Emanuel T. Ramirez", position: "COO|CFO", desc: "Ehub Engineering Team Department" },
  // { name: "Emily Rodriguez", position: "COO", desc: "Operations and execution expert." },

];

function TeamSection() {
  return (
    <section className="bg-gray-50 py-16 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full uppercase">
        {team.map((member) => (
          <div key={member.name} className="bg-white rounded-lg p-6 shadow text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center text-3xl text-gray-400">
              <span>👤</span>
            </div>
            <h4 className="font-bold">{member.name}</h4>
            <p className="text-sm text-gray-500">{member.position}</p>
            <p className="text-gray-600 mt-2">{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
