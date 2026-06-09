import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { MetricCard } from '../components/ui/MetricCard';
import { ButtonLink } from '../components/ui/ButtonLink';
import { heroMetrics, socialLinks } from '../data/site';
import { useTypingText } from '../hooks/useTypingText';

const HeroExperience = lazy(() =>
  import('../components/three/HeroExperience').then((module) => ({ default: module.HeroExperience }))
);

export function HeroSection() {
  const typed = useTypingText(
    'Full Stack Developer | Android App Developer | UI/UX Designer | Blender 3D Artist | AI Enthusiast',
    24,
    420
  );

  return (
    <header id="home" className="relative isolate overflow-hidden pt-24">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_8%,rgba(45,212,191,0.18),transparent_28%),radial-gradient(circle_at_86%_16%,rgba(244,114,182,0.12),transparent_24%),linear-gradient(135deg,#03060d_0%,#07111f_48%,#03060d_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />

      <div className="mx-auto grid min-h-screen w-full max-w-6xl gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] lg:items-center lg:px-8">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-teal-100/80 backdrop-blur-xl"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.85)]" />
            Available for digital product work
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.75, ease: 'easeOut' }}
              className="text-sm uppercase tracking-[0.28em] text-slate-400"
            >
              Tharaniesh
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Building software, designing experiences, and creating digital products.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.8, ease: 'easeOut' }}
              className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Developer. Designer. Creator. I combine full stack development, Android apps, UI/UX, branding,
              Blender 3D, and emerging AI curiosity to build experiences that are useful, elegant, and technically
              grounded.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.8 }}
              className="min-h-7 text-sm uppercase tracking-[0.18em] text-teal-100/75 sm:text-base"
            >
              {typed}
              <span className="ml-2 inline-block h-5 w-px animate-pulse bg-teal-300/80 align-middle" aria-hidden="true" />
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-wrap gap-3"
          >
            <ButtonLink href="#projects" variant="primary">
              View Projects
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Start a Project
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.75, ease: 'easeOut' }}
            className="flex flex-wrap gap-2"
            aria-label="Social links"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 transition hover:border-teal-200/30 hover:bg-teal-300/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {heroMetrics.map((metric) => (
              <MetricCard key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[500px] sm:h-[600px]"
        >
          <div className="absolute left-4 top-4 z-10 hidden rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur-xl sm:block">
            Code + Design + 3D
          </div>
          <Suspense fallback={<div className="h-full w-full rounded-[2rem] border border-white/10 bg-slate-950/60" />}>
            <HeroExperience />
          </Suspense>
          <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/10 bg-slate-950/55 px-5 py-4 backdrop-blur-xl sm:inset-x-6 sm:bottom-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Brand statement</p>
            <p className="mt-2 text-sm leading-7 text-slate-200">
              A multidisciplinary creator building impactful digital experiences through engineering, visual design,
              and curiosity.
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
