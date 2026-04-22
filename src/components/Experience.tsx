import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { dataService } from '../services/dataService';
import type { Experience } from '../types';

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    return dataService.subscribeToExperience(setExperiences);
  }, []);

  return (
    <section id="experience" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-4">
              Career Path
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-8">
              Work <span className="italic font-serif">Experience</span>
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed">
              Every role has been a new opportunity to solve complex problems 
              and build meaningful products.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id || exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 border-l border-zinc-200 pb-4 last:pb-0"
              >
                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-zinc-950" />
                <span className="text-sm font-mono text-zinc-400 mb-2 block">{exp.period}</span>
                <h3 className="text-2xl font-display font-bold mb-1">{exp.role}</h3>
                <div className="text-lg font-serif italic text-zinc-600 mb-4">{exp.company}</div>
                <p className="text-zinc-500 font-light max-w-2xl">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
