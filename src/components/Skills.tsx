import { motion } from 'framer-motion';
import { Code, Palette, Server, Globe } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "D3.js"]
    },
    {
      title: "Backend & Infrastructure",
      icon: Server,
      skills: ["Node.js", "Express", "Firebase", "PostgreSQL", "MongoDB", "Auth0"]
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: ["Figma", "Design Systems", "Motion Design", "Responsive Layouts", "A11y"]
    },
    {
      title: "Tools & Strategy",
      icon: Globe,
      skills: ["Git", "Docker", "CI/CD", "Technical Writing", "SEO Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-4">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight">
              My <span className="italic font-serif">Toolbox</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-md font-light">
            I combine technical expertise with a sharp eye for design to build 
            products that are both functional and beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center text-white mb-6">
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-zinc-50 text-zinc-600 rounded-full text-xs font-medium border border-zinc-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
