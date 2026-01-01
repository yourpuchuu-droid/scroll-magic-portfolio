import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-16 sm:py-24 lg:py-48 px-4 sm:px-6 lg:px-12 bg-foreground text-background"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-6">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-background/60 text-xs sm:text-sm tracking-widest uppercase">
              Get in Touch
            </span>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-9">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium tracking-tight leading-[1.1]"
              >
                Let's create
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium tracking-tight leading-[1.1]"
              >
                something
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium tracking-tight leading-[1.1] italic"
              >
                extraordinary.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 sm:mt-16"
              data-cursor="email"
            >
              <a
                href="mailto:Deepeshdesignss@gmail.com"
                className="group inline-flex items-center gap-2 sm:gap-4 text-base sm:text-xl md:text-2xl lg:text-3xl border-b border-background/30 pb-2 hover:border-background transition-colors duration-300 break-all sm:break-normal"
              >
                <motion.span
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  Deepeshdesignss@gmail.com
                </motion.span>
                <motion.div
                  whileHover={{ x: 5, y: -5, rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-6 h-6" />
                </motion.div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 sm:mt-8"
            >
              <a
                href="tel:+916350396806"
                className="group inline-flex items-center gap-2 sm:gap-4 text-base sm:text-lg md:text-xl border-b border-background/30 pb-2 hover:border-background transition-colors duration-300"
              >
                +91 6350396806
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 sm:mt-16 flex flex-wrap gap-4 sm:gap-6"
            >
              <a
                href="https://www.linkedin.com/in/deepesh-kumar-999263261/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background text-sm tracking-wide transition-colors duration-300 py-1"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
