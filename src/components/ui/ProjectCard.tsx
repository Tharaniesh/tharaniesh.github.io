import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';
import { ButtonLink } from './ButtonLink';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative grid h-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/68 shadow-[0_18px_60px_rgba(2,6,23,0.4)] transition duration-500"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80 transition duration-500 group-hover:opacity-100`} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative min-h-56 overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px] opacity-25" />
        <div className="relative flex h-full min-h-44 flex-col justify-between">
          <span className="w-fit rounded-full border border-white/12 bg-slate-950/45 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-200/80 backdrop-blur-xl sm:text-[11px]">
            {project.category}
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Preview</p>
            <h3 className="mt-2 max-w-[15ch] text-[2rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-[2.35rem]">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="relative flex h-full flex-col gap-5 p-5 sm:p-6">
        <div className="space-y-4">
          <div className="space-y-2.5">
            <div className="grid gap-3 text-sm leading-6 text-slate-300">
              <p>{project.description}</p>
              <p className="text-slate-400">{project.outcome}</p>
              <p className="rounded-[1rem] border border-white/10 bg-white/[0.035] px-4 py-3 text-slate-200">
                <span className="text-teal-100/80">Key achievement:</span> {project.achievement}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-[11px] tracking-[0.16em] text-slate-200/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.actions?.length ? (
          <div className="mt-auto flex flex-wrap gap-2.5 pt-1">
            {project.actions.map((action) => (
              <ButtonLink
                key={`${project.title}-${action.label}`}
                href={action.href}
                variant={action.variant ?? 'secondary'}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noreferrer' : undefined}
                className="px-4 py-2.5 text-[13px]"
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
