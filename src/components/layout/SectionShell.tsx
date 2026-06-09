import type { PropsWithChildren, ReactNode } from 'react';
import { Reveal } from '../motion/Reveal';

type SectionShellProps = PropsWithChildren<{
  id: string;
  index: string;
  title: string;
  description?: string;
  aside?: ReactNode;
  className?: string;
  introClassName?: string;
  contentClassName?: string;
}>;

export function SectionShell({
  id,
  index,
  title,
  description,
  aside,
  className = '',
  introClassName = '',
  contentClassName = '',
  children
}: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-28 ${className}`}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.45fr)] lg:gap-12">
        <Reveal className={`space-y-5 ${introClassName}`}>
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-teal-200/70">
            <span>{index}</span>
            <span className="h-px w-10 bg-gradient-to-r from-teal-300/70 to-transparent" />
          </div>
          <div className="space-y-4">
            <h2 className="max-w-sm text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
            {description ? <p className="max-w-md text-base leading-7 text-slate-300">{description}</p> : null}
          </div>
          {aside}
        </Reveal>

        <div className={contentClassName}>{children}</div>
      </div>
    </section>
  );
}
