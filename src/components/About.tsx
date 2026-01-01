import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import { AnimatedCounter } from "./animations";

export const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  // Mouse parallax for stats
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springConfig = { damping: 50, stiffness: 100 };
  const statX = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), springConfig);
  const statY = useSpring(useTransform(mouseY, [0, 1], [-10, 10]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const words = "I'm a Visual Communication-driven graphics designer focused on clean, communicative visuals for web and print. Passionate about motion graphics, social layouts, and design systems. Based in Jaipur, Rajasthan.".split(" ");

  const stats = [
    { number: 4, suffix: "+", label: "Years Experience" },
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 4, suffix: "", label: "Core Tools" },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 lg:py-48 px-6 lg:px-12 bg-secondary overflow-hidden"
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
            <motion.span 
              className="text-muted-foreground text-sm tracking-widest uppercase inline-block"
              whileHover={{ x: 10, letterSpacing: "0.2em" }}
              transition={{ duration: 0.3 }}
            >
              About
            </motion.span>
          </motion.div>

          {/* Main Text */}
          <div ref={textRef} className="lg:col-span-9">
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-medium leading-[1.2] tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.2, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: i * 0.03,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block mr-[0.25em]"
                  whileHover={{ 
                    scale: 1.05, 
                    color: "hsl(var(--primary))",
                    transition: { duration: 0.2 }
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </p>

            <motion.div
              style={{ y }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="border-t border-border pt-6 group"
                  style={{ x: statX, y: statY }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-display font-medium"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatedCounter 
                      value={stat.number} 
                      suffix={stat.suffix}
                      className="inline-block"
                    />
                  </motion.div>
                  <motion.p 
                    className="mt-2 text-muted-foreground text-sm tracking-wide"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
