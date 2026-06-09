import { motion } from 'framer-motion';
import { useEffect } from 'react';

type PreloaderProps = {
  onDone: () => void;
};

export function Preloader({ onDone }: PreloaderProps) {
  useEffect(() => {
    const timeout = window.setTimeout(onDone, 1500);
    return () => window.clearTimeout(timeout);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#03060d]"
    >
      <div className="relative flex h-28 w-28 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <motion.div
          className="absolute h-24 w-24 rounded-full border border-teal-300/20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        />
        <motion.div
          className="h-12 w-12 rounded-full bg-[radial-gradient(circle,rgba(153,246,228,0.95),rgba(45,212,191,0.42)_42%,rgba(8,47,73,0)_74%)]"
          animate={{ scale: [0.82, 1.1, 0.82], opacity: [0.65, 1, 0.65] }}
          transition={{ repeat: Infinity, duration: 1.35, ease: 'easeInOut' }}
        />
        <p className="absolute -bottom-10 text-[11px] uppercase tracking-[0.34em] text-slate-400">Loading Tharaniesh</p>
      </div>
    </motion.div>
  );
}
