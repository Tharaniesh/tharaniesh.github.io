import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type AnimatedCursorState = {
  x: number;
  y: number;
};

export function AnimatedCursor() {
  const [position, setPosition] = useState<AnimatedCursorState>({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{ type: 'spring', stiffness: 460, damping: 28, mass: 0.2 }}
      className="pointer-events-none fixed z-50 hidden h-6 w-6 rounded-full border border-cyber-neon/80 bg-cyber-neon/20 shadow-neon backdrop-blur-sm lg:block"
    />
  );
}
