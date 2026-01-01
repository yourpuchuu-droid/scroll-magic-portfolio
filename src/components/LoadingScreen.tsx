import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Star, Circle, Triangle, Square } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onLoadingComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const symbols = [
    { Icon: Star, delay: 0 },
    { Icon: Circle, delay: 0.1 },
    { Icon: Triangle, delay: 0.2 },
    { Icon: Square, delay: 0.3 },
    { Icon: Sparkles, delay: 0.4 },
  ];

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Hopping Symbols */}
          <div className="flex gap-4 mb-8">
            {symbols.map(({ Icon, delay }, i) => (
              <motion.div
                key={i}
                initial={{ y: 0, opacity: 0 }}
                animate={{ 
                  y: [0, -20, 0],
                  opacity: 1,
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 0.6,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 0.6,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut",
                  },
                  opacity: {
                    duration: 0.3,
                    delay: delay,
                  },
                }}
              >
                <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </motion.div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-48 md:w-64 h-px bg-border/30 overflow-hidden">
            <motion.div
              className="h-full bg-foreground"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          {/* Progress Number */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-sm text-muted-foreground font-mono tracking-widest"
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>

          {/* Exit Animation Overlay */}
          <motion.div
            className="absolute inset-0 bg-background origin-bottom"
            initial={{ scaleY: 0 }}
            animate={isExiting ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
