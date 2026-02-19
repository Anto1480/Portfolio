import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anonymous",
    quote: "Their online notes are easy to learn and are very cheap and you get many really good bonuses, it's worth it!",
  },
  {
    name: "Rising Academy",
    quote: "I wanted to take a moment to share my thoughts on fymita's online lessons. Their material is incredibly well-organized, and the lessons are easy to follow. The value for the price is amazing—you really get more than you expect in terms of quality and content. I especially appreciate the bonuses that come with their services, making the overall experience feel comprehensive and worth every penny. Highly recommended for anyone looking to enhance their learning!",
  },
  {
    name: "MrVextran",
    quote: "Each lesson I have received from them has taught me a great deal that is now helping me to reach new heights in game development. They are high quality and the content is straightforward to digest. The tutor is amazing too, they are really friendly and they get the lessons across easily. I'd definitely recommend these lessons to any one of my friends or peers! The pricing is really cheap for such a great course and I believe my money has been well-spent. 10/10 for the lessons, the tutor and the pricing!",
  },
  {
    name: "Deity",
    quote: "Their notes really help me understand and break down the concept i would recommend learning from them it's really worth the cost",
  },
  {
    name: "Atatx",
    quote: "The tailoring is nice and it has notes to help if you need a bit more help. The prices are cheap and in some cases, you could get it for free. And it could be at any time at any time zone in any way of communication you want like discord, email etc. You also get gifts so I say it's more worth it than a standard course.",
  },
  {
    name: "Cars",
    quote: "Their prices are extremely worth it with a lot of good bonuses!",
  },
  {
    name: "Anonymous",
    quote: "These guys are actually amazing, pricing is good, and their lessons really stick in your head and help you get on your way with scripting. Recommend them for sure :)",
  },
  {
    name: "Bigraga",
    quote: "They had really good service and was really helpful I would rate this a 10/10",
  },
  {
    name: "Blooz",
    quote: "Fymita offered me great prices for high quality online notes. The pricing, which was about 15 euros, gave me a bunch of bonuses for such a low price. I would recommend Fymita to anyone looking to get into scripting. Thanks for offering such an amazing product",
  },
  {
    name: "Zalan",
    quote: "I was blown away! The quality was awesome and the prices were really cheap!",
  },
  {
    name: "Peyman",
    quote: "Excellent tutoring and very understandable, would recommend",
  },
  {
    name: "GokteKagan",
    quote: "They have very cheap prices you should get lessons from them!",
  },
  {
    name: "Rishi",
    quote: "I recently took scripting lessons with Fymita, and they were amazing! They make learning how to code really easy, even if you're just starting out. Fymita explains everything clearly and helps you understand step by step. One of the best things about them is the price. It's hard to find lessons this good for such an affordable cost. They really care about helping you learn and are always ready to answer questions. If you're looking to learn scripting without spending too much, I highly recommend Fymita!",
  },
  {
    name: "Bedoya",
    quote: "Their Online Notes are Really Good, their prices are cheap and it all goes very well with the price for all the bonuses you have.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What People Say
        </motion.h2>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="p-8 bg-gradient-card shadow-lg border-border/50">
                <Quote className="w-12 h-12 text-primary mb-4 opacity-50" />
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                <p className="text-primary font-semibold text-lg">
                  — {testimonials[currentIndex].name}
                </p>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
