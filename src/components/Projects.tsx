import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import { dataService } from '../services/dataService';
import type { Project } from '../types';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  const fallbackProjects: Project[] = [
    {
      title: "AI-Based FIR Analysis",
      description: "NLP-based system to extract structured information from unstructured FIR documents using Python and Regex.",
      technologies: ["Python", "NLP", "Regex", "PDF Processing"],
      link: "https://github.com/ahamedshakir02",
      github: "https://github.com/ahamedshakir02",
      order: 1
    },
    {
      title: "Real-Time GPS Safety App",
      description: "React Native mobile app connected to an ESP32 for real-time tracking and accident detection.",
      technologies: ["React Native", "Firebase", "ESP32", "WebSockets"],
      link: "https://github.com/ahamedshakir02",
      github: "https://github.com/ahamedshakir02",
      order: 2
    },
    {
      title: "Disease Prediction ANN",
      description: "Artificial Neural Network model achieving 98%+ accuracy in disease diagnosis using medical datasets.",
      technologies: ["Python", "TensorFlow", "Scikit-Learn", "Pandas"],
      link: "https://github.com/ahamedshakir02",
      github: "https://github.com/ahamedshakir02",
      order: 3
    },
    {
      title: "Handwriting Recognition",
      description: "A deep learning tool to assist visually impaired individuals by converting handwritten text to digital formats.",
      technologies: ["CNN", "OpenCV", "Python", "Keras"],
      link: "https://github.com/ahamedshakir02",
      github: "https://github.com/ahamedshakir02",
      order: 4
    },
    {
      title: "Smart Energy Management",
      description: "IoT-based solution for monitoring and optimizing energy consumption in household appliances.",
      technologies: ["IoT", "Arduino", "Esp8266", "Cloud Computing"],
      link: "https://github.com/ahamedshakir02",
      github: "https://github.com/ahamedshakir02",
      order: 5
    }
  ];

  useEffect(() => {
    return dataService.subscribeToProjects((dbProjects) => {
      setProjects(dbProjects.length > 0 ? dbProjects : fallbackProjects);
    });
  }, []);

  return (
    <section id="projects" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-4">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight">
              Crafting <span className="italic font-serif">Solutions</span>
            </h2>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20 bg-white/50 rounded-[3rem] border border-dashed border-zinc-200">
            <p className="text-zinc-400 font-display">Developing something unique. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id || project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-white shadow-sm mb-8">
                  <img 
                    src={project.image || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop`} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.link && (
                      <a href={project.link} className="p-4 bg-white rounded-full text-zinc-950 hover:scale-110 transition-transform">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} className="p-4 bg-white rounded-full text-zinc-950 hover:scale-110 transition-transform">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:translate-x-2 transition-transform">
                  {project.title}
                </h3>
                <p className="text-zinc-500 font-light leading-relaxed max-w-lg">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
