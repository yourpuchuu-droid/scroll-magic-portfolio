import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    title: "Forma Studio",
    category: "Brand & Experience Landing Page",
    image: project1,
  },
  {
    title: "Obscura",
    category: "Brand & Experience Landing Page",
    image: project2,
  },
  {
    title: "Bread Me!",
    category: "Brand & Experience Landing Page",
    image: project3,
  },
  {
    title: "Lumière",
    category: "Premium Boutique Landing",
    image: project4,
  },
  {
    title: "Premiere Estate",
    category: "High-End Property Showcase",
    image: project5,
  },
  {
    title: "Essence Gastronomy",
    category: "Brand & Experience Landing Page",
    image: project6,
  },
];

export const Portfolio = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-sm tracking-widest uppercase mb-4"
          >
            Selected Work
          </motion.p>
          
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight"
            >
              Portfolio
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-muted-foreground max-w-xl"
          >
            A curated selection of projects showcasing creative design solutions and innovative digital experiences.
          </motion.p>
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index + 1}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
