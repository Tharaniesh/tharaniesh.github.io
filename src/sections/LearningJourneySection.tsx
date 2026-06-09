import { motion } from 'framer-motion';
import { Reveal } from '../components/motion/Reveal';

const learningTracks = [
  {
    title: 'Artificial Intelligence',
    detail: 'Learning how AI can support useful tools, smarter interfaces, and new product workflows.'
  },
  {
    title: 'Game Design & Development',
    detail: 'Studying systems, interaction, player experience, and the craft of building playable ideas.'
  },
  {
    title: 'Advanced Blender Workflows',
    detail: 'Improving modeling, materials, presentation, and product visualization pipelines.'
  },
  {
    title: 'Modern Software Architecture',
    detail: 'Strengthening structure, scalability, maintainability, and professional development practice.'
  }
];

function LearningJourneySection() {
  return (
    <Reveal>
      <div className="surface-panel rounded-[2rem] p-6 sm:p-8">
        <div className="grid gap-5">
          {learningTracks.map((track, index) => (
            <motion.article
              key={track.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
              className="grid gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[3rem_minmax(0,1fr)]"
            >
              <span className="text-sm text-teal-100/70">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{track.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{track.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default LearningJourneySection;
