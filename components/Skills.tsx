
import React from 'react';
import { motion } from 'framer-motion';
// Fixed: 'Tool' is not an exported member of 'lucide-react'. Using 'Wrench' as a suitable replacement for Tools category.
import { Layers, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { Skill } from '../types';

const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 98, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'MongoDB / PostgreSQL', level: 85, category: 'Backend' },
  { name: 'GraphQL / REST APIs', level: 92, category: 'Backend' },
  { name: 'Docker / Kubernetes', level: 75, category: 'Tools' },
  { name: 'Git / GitHub Actions', level: 90, category: 'Tools' },
  { name: 'AWS / Vercel', level: 82, category: 'Tools' },
];

const SkillCategory: React.FC<{ 
  title: string; 
  icon: React.ReactNode; 
  skills: Skill[] 
}> = ({ title, icon, skills }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
    <div className="flex items-center gap-3 mb-8">
      <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    </div>
    <div className="space-y-6">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-blue-500" />
              {skill.name}
            </span>
            <span className="text-xs font-bold text-slate-400">{skill.level}%</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-blue-600 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const frontend = SKILLS.filter(s => s.category === 'Frontend');
  const backend = SKILLS.filter(s => s.category === 'Backend');
  const tools = SKILLS.filter(s => s.category === 'Tools');

  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My diverse skill set spans the entire web stack, enabling me to take 
            ideas from concept to scalable production-ready applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Frontend" icon={<Layers size={24} />} skills={frontend} />
          <SkillCategory title="Backend" icon={<Database size={24} />} skills={backend} />
          {/* Fixed: Replaced 'Tool' with 'Wrench' icon */}
          <SkillCategory title="DevOps & Tools" icon={<Wrench size={24} />} skills={tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
