import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'secondary' | 'ghost';
  }
>;

export function ButtonLink({ children, className = '', variant = 'primary', ...props }: ButtonLinkProps) {
  const variants = {
    primary:
      'border border-teal-300/30 bg-teal-300/12 text-white shadow-[0_12px_30px_rgba(45,212,191,0.12)] hover:border-teal-200/60 hover:bg-teal-300/18',
    secondary:
      'border border-white/12 bg-white/5 text-slate-100 hover:border-white/20 hover:bg-white/10',
    ghost: 'border border-transparent bg-transparent text-slate-300 hover:text-white'
  };

  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
