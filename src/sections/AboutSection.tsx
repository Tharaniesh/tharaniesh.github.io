import { Reveal } from '../components/motion/Reveal';

const principles = [
  'I build with both product logic and visual clarity in mind.',
  'I treat design, code, and presentation as connected parts of one experience.',
  'I keep learning across AI, game development, Blender, and software architecture.'
];

function AboutSection() {
  return (
    <div className="grid gap-5">
      <Reveal className="surface-panel rounded-[2rem] p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="space-y-5">
            <p className="text-lg leading-8 text-slate-200 sm:text-xl">
              I am Tharaniesh, a multidisciplinary creator working across software development, Android apps,
              UI/UX, branding, product design, Blender 3D, and emerging technologies.
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-300">
              My work sits between engineering and design. I enjoy turning ideas into digital products, shaping user
              experiences, building interfaces, managing websites, designing brand assets, and exploring 3D visuals.
              The common thread is problem solving: understanding what needs to work, what needs to feel clear, and
              how the final experience can communicate with confidence.
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-300">
              I am also actively growing into AI, game design and development, advanced Blender workflows, and modern
              software architecture. That curiosity keeps the portfolio moving forward instead of feeling fixed in one
              category.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-teal-200/70">Working principles</p>
            <div className="mt-4 space-y-4">
              {principles.map((principle, index) => (
                <div key={principle} className="flex gap-4">
                  <span className="mt-1 text-sm text-teal-200/70">0{index + 1}</span>
                  <p className="text-sm leading-7 text-slate-300">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default AboutSection;
