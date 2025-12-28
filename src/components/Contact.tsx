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
      className="py-32 lg:py-48 px-6 lg:px-12 bg-foreground text-background"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-background/60 text-sm tracking-widest uppercase">
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
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium tracking-tight leading-[1.1]"
              >
                Let's create
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium tracking-tight leading-[1.1]"
              >
                something
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium tracking-tight leading-[1.1] italic"
              >
                extraordinary.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16"
            >
              <a
                href="mailto:hello@portfolio.design"
                className="group inline-flex items-center gap-4 text-xl md:text-2xl lg:text-3xl border-b border-background/30 pb-2 hover:border-background transition-colors duration-300"
              >
                hello@portfolio.design
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16 flex flex-wrap gap-6"
            >
              {["Twitter", "LinkedIn", "Dribbble", "Behance"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-background/60 hover:text-background text-sm tracking-wide transition-colors duration-300 line-reveal py-1"
                  style={{
                    backgroundImage: "linear-gradient(to right, currentColor, currentColor)",
                  }}
                >
                  {social}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
