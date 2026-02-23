import { motion } from 'framer-motion';

type SectionHeadingProps = {
  title: string;
  index: string;
};

export function SectionHeading({ title, index }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="text-xs tracking-[0.28em] text-cyber-neon/80">{index}</span>
      <motion.h2
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-2xl font-semibold tracking-wide sm:text-3xl"
      >
        {title}
      </motion.h2>
      <span className="h-px flex-1 bg-gradient-to-r from-cyber-neon/50 to-transparent" />
    </div>
  );
}
