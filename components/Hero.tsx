"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const welcomeTextLine1 = "Welcome to Global";
  const welcomeTextLine2 = "Education Institute";

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80")',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground flex flex-col gap-4 items-center whitespace-nowrap"
          initial="hidden"
          animate="visible"
        >
          {/* First Line */}
          <motion.div className="flex gap-[0.2em]">
            {welcomeTextLine1.split("").map((letter, i) => (
              <motion.span
                key={`line1-${i}`}
                variants={letterVariants}
                transition={{
                  duration: 0.5,
                  delay: i * 0.03,
                  ease: [0.33, 1, 0.68, 1]
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Second Line */}
          <motion.div className="flex gap-[0.2em]">
            {welcomeTextLine2.split("").map((letter, i) => (
              <motion.span
                key={`line2-${i}`}
                variants={letterVariants}
                transition={{
                  duration: 0.5,
                  delay: i * 0.03,
                  ease: [0.33, 1, 0.68, 1]
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.h1>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: "easeOut"
            }}
          >
            Expert coaching for IELTS Academic, IELTS Professional, and PTE Academic
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
            ease: "easeOut"
          }}
        >
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary-foreground bg-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            asChild
          >
            <motion.a 
              href="#enquiry"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.a>
          </Button>
        </motion.div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-4 -left-4 w-24 h-24 bg-primary-foreground/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-8 w-32 h-32 bg-primary-foreground/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
