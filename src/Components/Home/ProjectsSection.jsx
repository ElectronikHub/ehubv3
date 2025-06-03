import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../Partials/Button2";
import ProjectCard from "../Partials/ProjectCard";

// Sample images (replace with your actual paths)
const proj1 = "/assets/logo.png";
const proj2 = "/assets/logo.png";
const proj3 = "/assets/logo.png";

const projects = [
  {
    image: proj1,
    badges: ["Web Design", "React", "UI/UX"],
    title: "Modern Dashboard Interface",
    description: "A comprehensive analytics dashboard with real-time data visualization and intuitive user controls.",
    completed: "June 2023",
    completion: 100,
    likes: 42,
    link: "#",
  },
  {
    image: proj2,
    badges: ["Mobile App", "Flutter", "iOS/Android"],
    title: "Health & Fitness Tracker",
    description: "A cross-platform mobile application for tracking fitness goals, nutrition, and daily wellness activities.",
    completed: "August 2023",
    completion: 100,
    likes: 38,
    link: "#",
  },
  {
    image: proj3,
    badges: ["E-commerce", "Shopify", "Custom Theme"],
    title: "Artisan Marketplace Platform",
    description: "A custom e-commerce solution connecting artisans with customers, featuring secure payments and order tracking.",
    completed: "October 2023",
    completion: 100,
    likes: 27,
    link: "#",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function ProjectsSection() {
  return (
    <div className="w-full flex flex-col items-center gap-20 px-4 py-24 bg-primary bg-no-repeat bg-cover">
      <motion.section
        className="flex justify-evenly w-full container mx-auto gap-8 flex-wrap"
        style={{
          backgroundImage: "url('/img/Product_Service background.jpeg')",
          backgroundBlendMode: 'overlay',
          backgroundPosition: 'center',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} variants={fadeInUp} />
        ))}
      </motion.section>
      <Link to="#">
        <Button>
          Check Out More Projects
        </Button>
      </Link>
    </div>
  );
}

export default ProjectsSection;
