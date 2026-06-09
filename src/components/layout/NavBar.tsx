import { motion } from 'framer-motion';
import { navItems } from '../../data/site';

export function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#03060d]/75 px-3 py-2 shadow-[0_12px_50px_rgba(2,6,23,0.42)] backdrop-blur-xl sm:px-5">
        <a href="#home" className="rounded-full px-3 py-2 text-sm font-medium tracking-[0.18em] text-white/90 transition hover:text-white">
          THARANIESH
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/6 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white transition hover:border-teal-300/30 hover:bg-teal-300/10"
        >
          Let&apos;s Build
        </a>
      </div>
    </motion.nav>
  );
}
