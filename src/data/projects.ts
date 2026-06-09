export type ProjectAction = {
  label: string;
  href: string;
  external?: boolean;
  variant?: 'primary' | 'secondary';
};

export type Project = {
  title: string;
  category: string;
  description: string;
  outcome: string;
  achievement: string;
  tags: string[];
  accent: string;
  actions?: ProjectAction[];
};

export const projects: Project[] = [
  {
    title: 'Volunteer Management Application',
    category: 'Full Stack Application',
    description:
      'A structured application concept for coordinating volunteers, events, registrations, and operational communication in one practical workflow.',
    outcome:
      'Built around cleaner administration, faster coordination, and a user experience that keeps organizers and volunteers aligned.',
    achievement: 'Designed as a real-world management system with role-aware flows, database thinking, and scalable feature planning.',
    tags: ['Full Stack', 'MySQL', 'Java', 'Admin Workflows', 'Responsive UI'],
    accent: 'from-emerald-300/28 via-cyan-200/10 to-transparent',
    actions: [
      {
        label: 'Live Demo',
        href: '#contact',
        variant: 'primary'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/Tharaniesh',
        external: true,
        variant: 'secondary'
      }
    ]
  },
  {
    title: 'Flask AI Chatbot',
    category: 'AI-Powered Web Tool',
    description:
      'A Flask-based chatbot experience exploring conversational interfaces, backend routing, and AI-assisted responses for web users.',
    outcome:
      'Created as a learning-forward product that connects Python development with practical AI interaction design.',
    achievement: 'Strengthened backend logic, prompt-flow thinking, and interface clarity for an emerging AI workflow.',
    tags: ['Python', 'Flask', 'AI', 'APIs', 'Web UI'],
    accent: 'from-sky-300/28 via-violet-200/10 to-transparent',
    actions: [
      {
        label: 'Live Demo',
        href: '#contact',
        variant: 'primary'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/Tharaniesh',
        external: true,
        variant: 'secondary'
      }
    ]
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Premium Digital Portfolio',
    description:
      'A responsive portfolio system that combines software development, design, branding, 3D creativity, and subtle motion into one cohesive experience.',
    outcome:
      'Built to communicate multidisciplinary value clearly to recruiters, clients, startups, and collaborators.',
    achievement: 'Uses reusable React sections, smooth reveal animations, responsive layouts, and Three.js-powered creative presentation.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    accent: 'from-fuchsia-300/24 via-cyan-200/10 to-transparent',
    actions: [
      {
        label: 'Explore This Site',
        href: '#home',
        variant: 'primary'
      }
    ]
  }
];
