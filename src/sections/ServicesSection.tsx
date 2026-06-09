import { motion } from 'framer-motion';
import { Reveal } from '../components/motion/Reveal';

const services = [
  'Full Stack Development',
  'Android Development',
  'UI/UX Design',
  'Branding Design',
  'Website Management',
  'Product Design',
  'Blender 3D Visualization'
];

function ServicesSection() {
  return (
    <Reveal>
      <div className="surface-panel rounded-[2rem] p-5 sm:p-7">
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.035 }}
              className="group flex min-h-24 items-center justify-between gap-5 rounded-[1.35rem] border border-white/10 bg-white/[0.035] px-4 py-4 transition duration-300 hover:border-teal-200/25 hover:bg-teal-300/[0.07]"
            >
              <span className="text-base font-medium text-white">{service}</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-xs text-slate-400 transition group-hover:border-teal-200/30 group-hover:text-teal-100">
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default ServicesSection;
