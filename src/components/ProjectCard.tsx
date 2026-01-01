import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  index: number;
  title: string;
  category: string;
  image: string;
  href?: string;
}

export const ProjectCard = ({ index, title, category, image, href = "#" }: ProjectCardProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const formattedIndex = String(index).padStart(3, "0");

  // 3D tilt effect
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [0, 1], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-5, 5]), springConfig);

  // Image panning
  const imageX = useSpring(useTransform(x, [0, 1], [10, -10]), springConfig);
  const imageY = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    setIsHovered(false);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="group cursor-pointer perspective-1000"
    >
      <Link to={href} className="block">
        <div className="grid grid-cols-12 gap-4 items-center py-8 border-t border-border/50">
          {/* Index Number */}
          <motion.span
            className="col-span-2 md:col-span-1 font-mono text-sm text-muted-foreground"
            animate={{ 
              x: isHovered ? 10 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {formattedIndex}
          </motion.span>

          {/* Title */}
          <motion.h3
            className="col-span-10 md:col-span-5 text-2xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight"
            animate={{ 
              x: isHovered ? 20 : 0,
              letterSpacing: isHovered ? "0.02em" : "0em",
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                animate={{
                  y: isHovered ? [0, -5, 0] : 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.02,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h3>

          {/* Category - Hidden on mobile, shown on tablet+ */}
          <motion.span
            className="hidden md:block md:col-span-3 text-sm text-muted-foreground tracking-wide"
            animate={{ 
              opacity: isHovered ? 1 : 0.7,
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {category}
          </motion.span>

          {/* Arrow */}
          <motion.div
            className="hidden md:flex md:col-span-3 justify-end items-center gap-2"
            animate={{ 
              x: isHovered ? 10 : 0, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span 
              className="text-sm"
              animate={{ x: isHovered ? [0, 5, 0] : 0 }}
              transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }}
            >
              Explore
            </motion.span>
            <motion.div
              animate={{ 
                rotate: isHovered ? 45 : 0,
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>

        {/* Image Preview */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-lg"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative aspect-video overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              style={{ 
                x: imageX, 
                y: imageY,
                scale: 1.2,
              }}
              initial={{ scale: 1.3 }}
              animate={{ scale: isHovered ? 1.2 : 1.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div 
              className="absolute inset-0 bg-primary/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
};
