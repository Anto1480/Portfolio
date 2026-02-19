import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const contactInfo = {
  discord: "abc.dab",
  email: "fymitagroup@gmail.com",
};

const copyToClipboard = (text: string, type: string) => {
  navigator.clipboard.writeText(text).then(() => {
    toast({
      title: "Copied to clipboard!",
      description: `${type} has been copied to your clipboard.`,
    });
  });
};

const Contact = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have a question or want to work together? Feel free to reach out through any of these channels.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.div
            onClick={() => copyToClipboard(contactInfo.discord, "Discord")}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="p-8 bg-gradient-card shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 group cursor-pointer">
              <MessageSquare className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Discord</h3>
              <p className="text-muted-foreground">{contactInfo.discord}</p>
            </Card>
          </motion.div>

          <motion.div
            onClick={() => copyToClipboard(contactInfo.email, "Email")}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="p-8 bg-gradient-card shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 group cursor-pointer">
              <Mail className="w-12 h-12 text-secondary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
              <p className="text-muted-foreground">{contactInfo.email}</p>
            </Card>
          </motion.div>
        </div>

        <motion.p
          className="mt-12 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          © Tony. All Rights Reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
