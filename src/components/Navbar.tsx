import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Notebook as Pencil, User, Briefcase, Mail, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { useVibe } from '../contexts/VibeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isVibeMode, toggleVibeMode } = useVibe();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '/#projects', icon: Code2 },
    { name: 'Skills', href: '/#skills', icon: User },
    { name: 'Experience', href: '/#experience', icon: Briefcase },
    { name: 'Blog', href: '/blog', icon: Pencil },
    { name: 'Contact', href: '/#contact', icon: Mail },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-display font-bold text-xl tracking-tight">Ahamed Shakir</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <motion.button 
            onClick={toggleVibeMode}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
              isVibeMode ? "bg-green-500 text-black shadow-[0_0_10px_#00ff00]" : "bg-zinc-100 text-zinc-600"
            )}
          >
            <Zap size={14} fill={isVibeMode ? "currentColor" : "none"} />
            {isVibeMode ? "Vibe Mode: ON" : "Vibe Mode"}
          </motion.button>
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/resume" 
              className="px-5 py-2.5 bg-zinc-950 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-zinc-800 transition-colors block"
            >
              Resume
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-950"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-6 flex flex-col gap-6 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-lg font-display font-medium text-zinc-600 hover:text-zinc-950"
            >
              <link.icon size={20} />
              {link.name}
            </a>
          ))}
          <Link 
            to="/resume"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-zinc-950 text-white text-center font-display font-bold rounded-xl"
          >
            View Resume
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
