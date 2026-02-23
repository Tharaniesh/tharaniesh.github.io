import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useTypingText } from '../hooks/useTypingText';

const ThreeBackground = lazy(() => import('../three/ThreeBackground').then((module) => ({ default: module.ThreeBackground })));

export function HeroSection() {
  const typed = useTypingText('Designing Systems. Decoding Player Behavior.', 42, 650);

  return (
    <header id="home" className="relative isolate min-h-screen overflow-hidden">
      <Suspense fallback={null}><ThreeBackground /></Suspense>
      <div className="absolute inset-0 bg-cyber-grid bg-[size:48px_48px] opacity-[0.14]" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-start justify-center gap-8 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="rounded-full border border-cyber-neon/35 bg-cyber-panel/40 px-4 py-2 text-xs tracking-[0.24em] text-cyber-neon shadow-card backdrop-blur-xl"
        >
          GAME DESIGN x DATA SYSTEMS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
        >
          Tharaniesh J
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="min-h-8 text-base text-cyber-text/90 sm:text-xl"
        >
          {typed}
          <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-cyber-neon align-middle" aria-hidden="true" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group rounded-xl border border-cyber-neon/50 bg-cyber-panel/60 px-6 py-3 text-sm font-medium tracking-wide text-cyber-neon shadow-card backdrop-blur-xl transition hover:shadow-neon"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-cyber-violet/60 bg-cyber-violet/10 px-6 py-3 text-sm font-medium tracking-wide text-cyber-text transition hover:bg-cyber-violet/20"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </header>
  );
}

