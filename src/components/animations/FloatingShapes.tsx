import { motion } from "framer-motion";

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circle 1 */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border border-border/20"
        style={{ top: "10%", right: "5%" }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Circle 2 */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-primary/5"
        style={{ bottom: "20%", left: "10%" }}
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Line 1 */}
      <motion.div
        className="absolute w-px h-48 bg-gradient-to-b from-transparent via-border/40 to-transparent"
        style={{ top: "30%", left: "20%" }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Dot grid */}
      <div className="absolute top-1/4 right-1/4 grid grid-cols-4 gap-4 opacity-20">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full bg-foreground"
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};
