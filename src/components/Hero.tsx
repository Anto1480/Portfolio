import { motion } from "framer-motion";
import { Github, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";


const socialLinks = {
  github: "https://github.com/Anto1480",
  discord: "https://discord.com/users/435794398685691913",
  email: "fymitagroup@gmail.com",
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Hi, I'm <span className="text-primary">Tony</span>
          </h1>
          
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Developer, Tutor, and Creator
          </motion.p>
          
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A passionate developer with 6 years of experience in Lua and Python, 
            dedicated to teaching and creating innovative solutions. With 2-3 years 
            of tutoring experience and several successful and creative projects, I help others 
            learn while building amazing things.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center items-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              variant="default"
              size="lg"
              className="gap-2"
              asChild
            >
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              asChild
            >
              <a href={socialLinks.discord} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5" />
                Discord
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              asChild
            >
              <a href={`mailto:${socialLinks.email}`}>
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
