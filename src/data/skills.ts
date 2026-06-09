export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Software Development',
    description: 'Full-stack and backend-aware development for practical digital products, APIs, and managed websites.',
    items: ['Java', 'Python', 'Full Stack Development', 'MySQL', 'APIs', 'Website Management']
  },
  {
    title: 'Mobile Development',
    description: 'Android application development with attention to usability, structure, and real-world workflows.',
    items: ['Android Development', 'Java Apps', 'Mobile UI', 'App Architecture']
  },
  {
    title: 'Design & Branding',
    description: 'Interface, product, and identity design shaped around clarity, brand recall, and polished presentation.',
    items: ['UI/UX Design', 'Logo Design', 'Brand Identity', 'Name Cards', 'Posters', 'Product Design']
  },
  {
    title: '3D & Creative',
    description: 'Blender-based visual work for product visualization, creative assets, and spatial presentation.',
    items: ['Blender', '3D Modeling', 'Product Visualization', 'Scene Composition']
  },
  {
    title: 'Emerging Technologies',
    description: 'A growing learning track across AI, game design, and modern architecture for future-facing builds.',
    items: ['Artificial Intelligence', 'Game Design & Development', 'Modern Software Architecture']
  }
];
