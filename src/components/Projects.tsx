import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const robloxProjects = [
  {
    name: "Class Templates",
    description: "A Class-Template plugin for users having trouble understanding and creating classes in Luau.",
    link: "https://create.roblox.com/store/asset/12555182236/Class-Templates",
  },
  {
    name: "FPS Framework Module",
    description: "A Module that allows easy integration and setup of FPS Systems, including easy tweaking and a built-in animation library",
    link: "https://create.roblox.com/store/asset/12577730895/FPS-Framework-Module?keyword=FPS+Framework+Module&pageNumber=1&pagePosition=0"
  },
  {
    name: "Procedural Voxel-Based Terrain Generation",
    description: "A Voxel-Based procedural terrain generation module, allowing for easy tweaks and setup for games with random terrain generation",
    link: "https://create.roblox.com/store/asset/14604478651/Generate-Random-World-Module"
  },
  {
    name: "Main-Menu UI Dynamic Animation",
    description: "Showcase of a dynamic Main-Menu UI Animation System",
    link: "https://www.youtube.com/watch?ab_channel=6y42&v=J3BgCXSpiUA"
  },
  {
    name: "FPS Framework Module Example",
    description: "Showcase of a super simple FPS Setup using the Framework shown above",
    link: "https://www.youtube.com/watch?ab_channel=6y42&v=o_XASlCV-aI"
  },
  {
    name: "OTS System No.1",
    description: "Showcase of a simple OTS system which includes sliding mechanics",
    link: "https://www.youtube.com/watch?ab_channel=6y42&feature=youtu.be&v=PwsfSU8TSMY"
  },
  {
    name: "OTS System No.2",
    description: "Showcase of a more advanced OTS system which includes GTA/Shooter-like mechanics",
    link: "https://www.youtube.com/watch?v=YTg89OD5g6U"
  },
  {
    name: "Food Simulator 2 [SOLD OUT]",
    description: "Game I have assisted at, which gained well over 100K visits",
    link: "https://www.roblox.com/games/6448181994/Food-Simulator-2"
  },
  {
    name: "Infinite Obby",
    description: "One of my first ever games, procedural obby generation",
    link: "https://www.roblox.com/games/13831046497/The-Infinite-Obby"
  }
];

const generalProjects = [
  {
    name: "Interpreted Programming Language PRUX",
    description: "My first ever programming language in python, interpreted.",
    link: "https://github.com/ClearanceObvious/PRUX",
  },
  {
    name: "Interpreter Programming Language EPL",
    description: "This is one more interpreted programming language I've written with more features and more user friendly. Combination of javascript and python",
    link: "https://github.com/ClearanceObvious/EPL",
  },
];

const webProjects = [
  {
    name: "Nomen",
    description: "This is an app that validates startup names and availability across multiple domains and social media apps.",
    link: "https://nomen-tau.vercel.app",
  },
  {
    name: "Trafiy",
    description: "This is an app that holds a brief overview of your finances and reminds you when subscriptions are due.",
    link: "https://trafiy.vercel.app"
  }
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
          Some Featured Projects
        </motion.h2>

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
          className="mb-16"
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

        {/* Roblox Projects */}
        <motion.div
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
      </div>
    </section>
  );
};

export default Projects;
