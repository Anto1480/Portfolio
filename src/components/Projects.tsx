import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

// Edit projects here - just copy/paste this structure to add more
const robloxProjects = [
  {
    name: "Game Simulator",
    description: "A feature-rich simulator game with custom mechanics and progression systems.",
    link: "https://github.com/tony/game-simulator",
  },
  {
    name: "Admin Dashboard",
    description: "Comprehensive admin tools for game moderation and management.",
    link: "https://github.com/tony/admin-dashboard",
  },
];

const generalProjects = [
  {
    name: "Discord Bot",
    description: "Multi-purpose Discord bot with moderation and utility features.",
    link: "https://github.com/tony/discord-bot",
  },
  {
    name: "API Wrapper",
    description: "Python wrapper for popular API with full documentation.",
    link: "https://github.com/tony/api-wrapper",
  },
];

const webProjects = [
  {
    name: "Portfolio Template",
    description: "Modern, responsive portfolio template built with React and TailwindCSS.",
    link: "https://github.com/tony/portfolio-template",
  },
  {
    name: "Task Manager",
    description: "Clean and intuitive task management application with real-time updates.",
    link: "https://github.com/tony/task-manager",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        {/* Roblox Projects */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary">Roblox Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {robloxProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>

        {/* General Projects */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary">General Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>

        {/* Web Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary">Web Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
