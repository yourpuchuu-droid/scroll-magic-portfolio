import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import { MagneticButton } from "./animations";
export const Hero = () => {
  return <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-24 overflow-hidden">
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl lg:max-w-2xl">
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-6">
              Graphics Designer & Visual Communication Specialist
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1 initial={{
              y: 100
            }} animate={{
              y: 0
            }} transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3
            }} className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium leading-[0.9] tracking-tight">
                <motion.span className="inline-block" whileHover={{
                scale: 1.02,
                x: 10
              }} transition={{
                duration: 0.3
              }}>
                  Deepesh
                </motion.span>
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1 initial={{
              y: 100
            }} animate={{
              y: 0
            }} transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.4
            }} className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium leading-[0.9] tracking-tight text-stroke">
                <motion.span className="inline-block" whileHover={{
                scale: 1.02,
                x: 10
              }} transition={{
                duration: 0.3
              }}>
                  Kumar
                </motion.span>
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1 initial={{
              y: 100
            }} animate={{
              y: 0
            }} transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5
            }} className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-medium leading-[0.9] tracking-tight">
                <motion.span className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text" animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }} transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }} whileHover={{
                scale: 1.02,
                x: 10
              }}>
                  Designer
                </motion.span>
              </motion.h1>
            </div>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.8
          }} className="mt-12 max-w-md text-muted-foreground text-lg leading-relaxed">
              Creating impactful, high-quality visuals for web and print. Specializing in brand identity, social media layouts, motion graphics, and design systems. Based in Jaipur, Rajasthan.
            </motion.p>
          </div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0.6
        }} className="relative flex-shrink-0 order-first lg:order-last mb-8 lg:mb-0">
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <motion.img alt="Deepesh Kumar - Graphic Designer" className="w-full h-full object-cover object-top rounded-full shadow-2xl" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.5
            }} src="/lovable-uploads/7bd7a11b-bb39-4dad-a854-b482b08f7915.png" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1.2
    }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <MagneticButton strength={0.5}>
          <motion.a href="#portfolio" animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </MagneticButton>
      </motion.div>
    </section>;
};