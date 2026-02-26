import { motion } from 'framer-motion';

const technologies = ['React', 'Python', 'SQL', 'HTML', 'CSS', 'VS Code'];

function ProjectsSection() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-cyber-edge bg-cyber-panel/45 p-6 shadow-card backdrop-blur-2xl sm:p-8"
    >
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-cyber-neon sm:text-2xl">Genshin Impact Team Builder with AI Integration</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-cyber-text/90 sm:text-base">
            A React-based web application that builds optimal teams based on user-owned characters. Integrated AI logic
            for synergy calculation and team optimization.
          </p>
          <p className="mt-2 text-xs text-cyber-text/75 sm:text-sm">
            Hosting: Backend on Render.com, Frontend on Vercel.com, Database on Railway.com.
          </p>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyber-neon/30 bg-cyber-neon/10 px-3 py-1 text-xs tracking-wide text-cyber-neon"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href=""
          aria-label="GitHub repository"
          className="rounded-lg border border-cyber-neon/50 bg-cyber-panel/60 px-4 py-2 text-sm text-cyber-neon transition hover:shadow-neon"
        >
          GitHub
        </a>
        <a
          href="https://astra-forge-ai.vercel.app"
          aria-label="Live demo"
          className="rounded-lg border border-cyber-violet/60 bg-cyber-violet/10 px-4 py-2 text-sm text-cyber-text transition hover:bg-cyber-violet/20"
        >
          Live Demo
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectsSection;

