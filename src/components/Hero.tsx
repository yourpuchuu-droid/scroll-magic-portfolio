import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-24"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-6"
          >
            Creative Designer & Developer
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium leading-[0.9] tracking-tight"
            >
              Crafting
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium leading-[0.9] tracking-tight text-stroke"
            >
              Digital
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium leading-[0.9] tracking-tight"
            >
              Experiences
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 max-w-md text-muted-foreground text-lg leading-relaxed"
          >
            Transforming ideas into immersive digital experiences through thoughtful design and innovative development.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#portfolio"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};
