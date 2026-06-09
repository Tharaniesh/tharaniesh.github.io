import { motion } from 'framer-motion';
import { Reveal } from '../components/motion/Reveal';

const buildItems = [
  { title: 'Websites', detail: 'Responsive, polished, SEO-aware web experiences.' },
  { title: 'Web Applications', detail: 'Dashboards, tools, workflows, and product interfaces.' },
  { title: 'Android Apps', detail: 'Mobile experiences designed for real use and clear flows.' },
  { title: 'Brand Identities', detail: 'Logos, visual systems, name cards, posters, and brand assets.' },
  { title: '3D Visualizations', detail: 'Blender models, product visuals, and interactive previews.' },
  { title: 'AI-Powered Solutions', detail: 'Chatbots, assisted workflows, and learning-led AI prototypes.' },
  { title: 'Interactive Experiences', detail: 'Motion, creative code, and interface experiments.' }
];

function BuildSection() {
  return (
    <Reveal>
      <div className="grid gap-4">
        {buildItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
            className="group grid gap-3 rounded-[1.4rem] border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-white/18 hover:bg-white/[0.06] sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-center"
          >
            <p className="text-sm uppercase tracking-[0.22em] text-teal-100/70">{item.title}</p>
            <p className="text-base leading-7 text-slate-300">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </Reveal>
  );
}

export default BuildSection;
