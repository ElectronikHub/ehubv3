import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({ project, variants }) {
  return (
    <motion.div
      className="relative group rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 bg-white"
      style={{
        minWidth: 280,
        maxWidth: 350,
        height: 370,
        background: `url(${project.image}) center/cover no-repeat`
      }}
      variants={variants}
      whileHover={{ scale: 1.05 }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/40 transition" />
      
      {/* Card Content */}
      <div className="relative z-10 p-6 flex flex-col h-full justify-between">
        {/* Badges */}
        <div className="flex gap-1 mb-4">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="text-xs font-semibold px-2 py-1 rounded bg-white/80 text-blue-900"
            >
              {badge}
            </span>
          ))}
        </div>
        {/* Title */}
        <h3 className="font-bold text-lg text-white drop-shadow mb-2">{project.title}</h3>
        
        {/* Hover Details */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex flex-col justify-center items-center bg-blue-900/80 p-6">
          <p className="text-white text-sm mb-4 text-center">{project.description}</p>
          <div className="flex flex-col gap-1 mb-4 w-full">
            <span className="text-xs text-blue-200">
              <b>Completed:</b> {project.completed}
            </span>
            <span className="text-xs text-blue-200">
              <b>Completion:</b>{" "}
              <span className="inline-block w-24 h-2 rounded bg-blue-100 align-middle">
                <span
                  className="block h-2 rounded bg-blue-400"
                  style={{ width: project.completion + "%" }}
                />
              </span>
            </span>
          </div>
          <Link
            to={project.link}
            className="text-blue-200 font-semibold hover:underline"
          >
            View Details
          </Link>
        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;
