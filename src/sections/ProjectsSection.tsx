import { Reveal } from '../components/motion/Reveal';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

function ProjectsSection() {
  return (
    <Reveal className="space-y-4">
      <div className="grid gap-5 lg:grid-cols-1 xl:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Reveal>
  );
}

export default ProjectsSection;
