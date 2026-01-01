import { motion, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const formattedIndex = String(index).padStart(3, "0");

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <Link to={href} className="block">
        <div className="grid grid-cols-12 gap-4 items-center py-8 border-t border-border/50">
          {/* Index Number */}
          <motion.span
            className="col-span-2 md:col-span-1 font-mono text-sm text-muted-foreground"
            animate={{ x: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {formattedIndex}
          </motion.span>

          {/* Title */}
          <motion.h3
            className="col-span-10 md:col-span-5 text-2xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight"
            animate={{ x: isHovered ? 20 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h3>

          {/* Category - Hidden on mobile, shown on tablet+ */}
          <motion.span
            className="hidden md:block md:col-span-3 text-sm text-muted-foreground tracking-wide"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {category}
          </motion.span>

          {/* Arrow */}
          <motion.div
            className="hidden md:flex md:col-span-3 justify-end items-center gap-2"
            animate={{ x: isHovered ? 10 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm">Explore</span>
            <ArrowUpRight className="w-4 h-4" />
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
          className="overflow-hidden"
        >
          <div className="relative aspect-video overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: isHovered ? 1 : 1.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="absolute inset-0 bg-foreground/5" />
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
};
