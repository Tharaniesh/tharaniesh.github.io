import { Suspense, lazy, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedCursor } from './components/AnimatedCursor';
import { Preloader } from './components/Preloader';
import { ScrollProgress } from './components/ScrollProgress';
import { SectionHeading } from './components/SectionHeading';
import { NavBar } from './components/NavBar';
import { HeroSection } from './sections/HeroSection';

const AboutSection = lazy(() => import('./sections/AboutSection'));
const SkillsSection = lazy(() => import('./sections/SkillsSection'));
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

function App() {
  const [loading, setLoading] = useState(true);
  const sectionFade = useMemo(
    () => ({
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.25 },
      transition: { duration: 0.7, ease: 'easeOut' }
    }),
    []
  );

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <ScrollProgress />
      <AnimatedCursor />
      <div className="relative min-h-screen overflow-x-hidden bg-cyber-bg text-cyber-text">
        <NavBar />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(41,196,255,0.14),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(112,109,255,0.12),transparent_28%)]" />
        <HeroSection />

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-20 sm:px-6 lg:px-8">
          <Suspense fallback={null}>
            <motion.section id="about" {...sectionFade} className="scroll-mt-24">
              <SectionHeading title="About" index="01" />
              <AboutSection />
            </motion.section>

            <motion.section id="skills" {...sectionFade} className="scroll-mt-24">
              <SectionHeading title="Skill Matrix" index="02" />
              <SkillsSection />
            </motion.section>

            <motion.section id="projects" {...sectionFade} className="scroll-mt-24">
              <SectionHeading title="Projects" index="03" />
              <ProjectsSection />
            </motion.section>

            <motion.section id="contact" {...sectionFade} className="scroll-mt-24">
              <SectionHeading title="Contact" index="04" />
              <ContactSection />
            </motion.section>
          </Suspense>
        </main>
      </div>
    </>
  );
}

export default App;
