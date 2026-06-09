import { Suspense, lazy, useState } from 'react';
import { AnimatedCursor } from './components/AnimatedCursor';
import { Preloader } from './components/Preloader';
import { ScrollProgress } from './components/ScrollProgress';
import { NavBar } from './components/layout/NavBar';
import { SectionShell } from './components/layout/SectionShell';
import { SiteFooter } from './components/layout/SiteFooter';
import { HeroSection } from './sections/HeroSection';

const AboutSection = lazy(() => import('./sections/AboutSection'));
const SkillsSection = lazy(() => import('./sections/SkillsSection'));
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const BuildSection = lazy(() => import('./sections/BuildSection'));
const ModelPreviewSection = lazy(() => import('./sections/ModelPreviewSection'));
const LearningJourneySection = lazy(() => import('./sections/LearningJourneySection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <ScrollProgress />
      <AnimatedCursor />
      <div className="relative min-h-screen overflow-x-hidden bg-[#03060d] text-slate-100">
        <div className="noise-overlay" />
        <NavBar />
        <HeroSection />

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 sm:px-6 lg:gap-32 lg:px-8">
          <Suspense fallback={null}>
            <SectionShell
              id="about"
              index="01"
              title="A multidisciplinary creator with a product-first mindset."
              description="I combine development, design, branding, 3D creativity, and continuous learning to build digital experiences that feel useful, clear, and memorable."
            >
              <AboutSection />
            </SectionShell>

            <SectionShell
              id="skills"
              index="02"
              title="Skills organized around the way digital products are actually built."
              description="From backend logic and Android apps to brand systems and 3D visuals, each skill supports a broader product experience."
            >
              <SkillsSection />
            </SectionShell>

            <SectionShell
              id="projects"
              index="03"
              title="Featured projects presented as product stories."
              description="Each project highlights the problem space, the technology used, and the value created through design and engineering."
              introClassName="lg:max-w-[24rem]"
              contentClassName="xl:-ml-4"
              className="[&>div]:xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.75fr)]"
            >
              <ProjectsSection />
            </SectionShell>

            <SectionShell
              id="services"
              index="04"
              title="Services for clients, startups, teams, and collaborators."
              description="Focused, practical services that connect code, design, branding, website operations, and creative visualization."
            >
              <ServicesSection />
            </SectionShell>

            <SectionShell
              id="build"
              index="05"
              title="The kinds of digital experiences I build."
              description="A compact view of the outputs I can take from idea to interface, from brand to build, and from prototype to presentation."
            >
              <BuildSection />
            </SectionShell>

            <SectionShell
              id="preview"
              index="06"
              title="3D creativity with a web-native presentation layer."
              description="An interactive Blender model preview powered by Three.js, built to show creative depth without overwhelming the page."
              className="[&>div]:gap-6 [&>div]:lg:grid-cols-1"
              introClassName="max-w-3xl"
            >
              <ModelPreviewSection />
            </SectionShell>

            <SectionShell
              id="journey"
              index="07"
              title="A learning journey built around curiosity and stronger systems."
              description="The portfolio is not only a showcase of finished skills. It is also a signal of where my craft is heading next."
            >
              <LearningJourneySection />
            </SectionShell>

            <SectionShell
              id="contact"
              index="08"
              title="Let's build something useful, polished, and memorable."
              description="Open for freelance projects, collaborations, startup partnerships, and business inquiries."
              introClassName="lg:max-w-[24rem]"
              contentClassName="xl:-ml-6"
              className="[&>div]:xl:grid-cols-[minmax(0,0.76fr)_minmax(0,1.56fr)]"
            >
              <ContactSection />
            </SectionShell>
          </Suspense>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

export default App;
