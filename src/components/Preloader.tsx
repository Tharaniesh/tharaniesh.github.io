import { motion } from 'framer-motion';
import { useEffect } from 'react';

type PreloaderProps = {
  onDone: () => void;
};

export function Preloader({ onDone }: PreloaderProps) {
  useEffect(() => {
    const timeout = window.setTimeout(onDone, 1400);
    return () => window.clearTimeout(timeout);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-cyber-bg"
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-cyber-neon/40" />
        <motion.div
          className="h-10 w-10 rounded-full bg-cyber-neon/70"
          animate={{ scale: [0.7, 1.1, 0.7], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
