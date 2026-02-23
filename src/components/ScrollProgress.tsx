import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.2 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyber-neon via-cyber-violet to-cyber-neon shadow-neon"
    />
  );
}
