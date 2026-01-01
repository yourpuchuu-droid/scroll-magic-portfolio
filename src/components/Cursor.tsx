import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for links and buttons
      const link = target.closest("a");
      const button = target.closest("button");
      const projectCard = target.closest("[data-cursor='view']");
      const contactLink = target.closest("[data-cursor='email']");
      
      if (projectCard) {
        setIsHovering(true);
        setCursorLabel("View");
      } else if (contactLink) {
        setIsHovering(true);
        setCursorLabel("Email");
      } else if (link || button || target.tagName === "A" || target.tagName === "BUTTON") {
        setIsHovering(true);
        setCursorLabel("");
      } else {
        setIsHovering(false);
        setCursorLabel("");
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
      setCursorLabel("");
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [cursorX, cursorY]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-background flex items-center justify-center"
          animate={{
            width: cursorLabel ? 80 : isHovering ? 60 : 12,
            height: cursorLabel ? 80 : isHovering ? 60 : 12,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          {cursorLabel && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-foreground text-xs font-medium tracking-wide mix-blend-difference"
            >
              {cursorLabel}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
      
      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block"
        style={{
          x: useSpring(cursorX, { damping: 50, stiffness: 200 }),
          y: useSpring(cursorY, { damping: 50, stiffness: 200 }),
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/20"
          animate={{
            width: isHovering ? 80 : 40,
            height: isHovering ? 80 : 40,
            opacity: isVisible ? 0.5 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  );
};
