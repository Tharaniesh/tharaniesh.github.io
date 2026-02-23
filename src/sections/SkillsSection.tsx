import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Game Design',
    skills: ['Game Design', 'Story Design', 'Illustration', 'Value Sketches', '3D Modeling (Blender)']
  },
  {
    title: 'Data & Analytics',
    skills: ['Python', 'SQL']
  }
];

function SkillsSection() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {skillGroups.map((group, groupIndex) => (
        <motion.article
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: groupIndex * 0.12 }}
          className="relative overflow-hidden rounded-2xl border border-cyber-edge bg-cyber-panel/45 p-6 shadow-card backdrop-blur-2xl"
        >
          <span className="absolute -top-12 right-0 h-32 w-32 rounded-full bg-cyber-neon/10 blur-2xl" />
          <h3 className="mb-4 text-lg font-semibold text-cyber-neon">{group.title}</h3>
          <ul className="grid gap-3">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-cyber-neon/20 bg-black/20 px-4 py-2 text-sm text-cyber-text/90 transition hover:border-cyber-neon/70 hover:text-cyber-neon"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}

export default SkillsSection;
