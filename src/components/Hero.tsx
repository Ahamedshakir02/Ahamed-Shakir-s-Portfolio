import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-zinc-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12 p-1 rounded-full bg-gradient-to-tr from-zinc-950 to-zinc-400"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center overflow-hidden grayscale">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver" 
                alt="Ahamed Shakir" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Available for New Opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-medium leading-[0.9] tracking-tighter mb-8 max-w-4xl">
              Ahamed <span className="italic font-serif text-zinc-400">Shakir</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-zinc-500 max-w-2xl mb-12 font-light leading-relaxed"
          >
            I'm a Computer Science student at APJ Abdul Kalam University, 
            passionate about Machine Learning, IoT, and Mobile Apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                y: -4
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-zinc-950 text-white rounded-full font-medium hover:bg-zinc-800 transition-shadow group"
            >
              View My Work
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </motion.a>
            
            <div className="flex items-center gap-4">
              <motion.a 
                href="https://github.com/ahamedshakir02" 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 text-zinc-400 hover:text-zinc-950 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/ahamed-shakir" 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 text-zinc-400 hover:text-zinc-950 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-16 bg-gradient-to-b from-zinc-300 to-transparent"
        />
      </div>
    </section>
  );
}
