import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const words = "I'm a Visual Communication-driven graphics designer focused on clean, communicative visuals for web and print. Passionate about motion graphics, social layouts, and design systems. Based in Jaipur, Rajasthan.".split(" ");

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 lg:py-48 px-6 lg:px-12 bg-secondary"
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
            <span className="text-muted-foreground text-sm tracking-widest uppercase">
              About
            </span>
          </motion.div>

          {/* Main Text */}
          <div ref={textRef} className="lg:col-span-9">
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-medium leading-[1.2] tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.2 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </p>

            <motion.div
              style={{ y }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { number: "4+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "4", label: "Core Tools" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="border-t border-border pt-6"
                >
                  <span className="text-4xl md:text-5xl font-display font-medium">
                    {stat.number}
                  </span>
                  <p className="mt-2 text-muted-foreground text-sm tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
