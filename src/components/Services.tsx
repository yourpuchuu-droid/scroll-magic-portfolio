import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Developing creative brand identities with logos, color palettes, and visual systems that communicate your brand's essence effectively.",
  },
  {
    number: "02",
    title: "Print Design",
    description:
      "Creating professional print materials including business cards, flyers, brochures, letterheads, and marketing collateral.",
  },
  {
    number: "03",
    title: "Motion Graphics",
    description:
      "Designing engaging animated content and motion graphics for social media, presentations, and digital platforms.",
  },
  {
    number: "04",
    title: "Social Media",
    description:
      "Crafting eye-catching social media graphics, posts, and campaign visuals optimized for various platforms.",
  },
];

export const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-sm tracking-widest uppercase mb-4"
          >
            What I Do
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight"
            >
              Services
            </motion.h2>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceItem key={service.number} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

const ServiceItem = ({ number, title, description, index }: ServiceItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group border-t border-border/50 py-8 lg:py-12 cursor-pointer"
    >
      <div className="grid grid-cols-12 gap-4 items-start lg:items-center">
        {/* Number */}
        <motion.span
          className="col-span-2 lg:col-span-1 font-mono text-sm text-muted-foreground"
          animate={{ 
            x: isHovered ? 10 : 0,
            scale: isHovered ? 1.2 : 1,
            color: isHovered ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
          }}
          transition={{ duration: 0.3 }}
        >
          {number}
        </motion.span>

        {/* Title */}
        <motion.h3
          className="col-span-10 lg:col-span-4 text-2xl md:text-3xl lg:text-4xl font-display font-medium tracking-tight"
          animate={{ 
            x: isHovered ? 20 : 0,
            letterSpacing: isHovered ? "0.02em" : "0em",
          }}
          transition={{ duration: 0.4 }}
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              animate={{
                y: isHovered ? [0, -3, 0] : 0,
              }}
              transition={{
                duration: 0.3,
                delay: i * 0.02,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="col-span-12 lg:col-span-5 text-muted-foreground mt-4 lg:mt-0 lg:pl-6"
          animate={{ 
            opacity: isHovered ? 1 : 0.7,
            x: isHovered ? 10 : 0,
            filter: isHovered ? "blur(0px)" : "blur(0.5px)",
          }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Arrow */}
        <motion.div
          className="hidden lg:flex col-span-2 justify-end"
          animate={{ 
            x: isHovered ? 10 : 0, 
            opacity: isHovered ? 1 : 0,
            rotate: isHovered ? 45 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="w-6 h-6" />
        </motion.div>
      </div>
      
      {/* Progress line animation */}
      <motion.div
        className="h-px bg-primary mt-8 lg:mt-12 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
};
