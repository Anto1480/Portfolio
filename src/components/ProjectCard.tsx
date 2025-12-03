import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
}

const ProjectCard = ({ name, description, link }: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div variants={cardVariants} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <Card className="h-full bg-gradient-card shadow-md hover:shadow-xl transition-all duration-300 border-border/50 group">
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {name}
              </CardTitle>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground leading-relaxed">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
