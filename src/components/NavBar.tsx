const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export function NavBar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-4xl -translate-x-1/2 rounded-2xl border border-cyber-edge/90 bg-cyber-panel/65 px-3 py-2 shadow-card backdrop-blur-2xl sm:px-4">
      <ul className="flex items-center justify-between gap-1 sm:gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-block rounded-md px-2 py-1.5 text-xs tracking-wide text-cyber-text/90 transition hover:bg-cyber-neon/10 hover:text-cyber-neon sm:px-3 sm:text-sm"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
