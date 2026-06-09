import { Reveal } from '../components/motion/Reveal';
import { SkillGroupCard } from '../components/ui/SkillGroupCard';
import { skillGroups } from '../data/skills';

function SkillsSection() {
  return (
    <Reveal className="space-y-5">
      <div className="surface-panel rounded-[2rem] p-5 sm:p-7">
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillGroupCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default SkillsSection;
