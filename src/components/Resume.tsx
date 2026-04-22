import { motion } from 'framer-motion';
import { Printer, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12 no-print">
          <Link to="/" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-950 transition-colors">
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2.5 bg-zinc-950 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
          >
            <Printer size={16} />
            Print Resume
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 md:p-20 shadow-xl rounded-[2rem] border border-zinc-100 print:shadow-none print:border-none print:p-0"
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 border-b border-zinc-100 pb-16">
            <div>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tighter uppercase">Ahamed Shakir M P</h1>
              <p className="text-2xl font-serif italic text-zinc-500">Computer Science & Engineering Student</p>
            </div>
            <div className="text-right text-zinc-500 font-light flex flex-col gap-2">
              <p>ahamedshakir02@gmail.com</p>
              <p>+91 9447533289</p>
              <p>Pattambi, India</p>
              <p>github.com/ahamedshakir02</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 flex flex-col gap-12">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 font-display">Expertise</h2>
                <div className="flex flex-col gap-3">
                  <div className="text-zinc-950 font-medium">Machine Learning (ANN)</div>
                  <div className="text-zinc-950 font-medium">Mobile Development</div>
                  <div className="text-zinc-950 font-medium">IoT Integrations (ESP32)</div>
                  <div className="text-zinc-950 font-medium">UI/UX Planning</div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 font-display">Tech Stack</h2>
                <div className="flex flex-wrap gap-2 text-sm">
                  {['Java', 'JavaScript', 'Python', 'React Native', 'Firebase', 'MongoDB', 'C', 'Figma', 'Git'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded text-zinc-600">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col gap-12">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 font-display">Experience</h2>
                <div className="flex flex-col gap-10">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-bold font-display uppercase">Campus Lead</h3>
                      <span className="text-sm font-mono text-zinc-400">2025 - 2026</span>
                    </div>
                    <div className="text-zinc-600 italic font-serif mb-3">GTech µLearn | MES College</div>
                    <p className="text-zinc-500 font-light leading-relaxed">
                      Increased active participation by 40% through structured learning. Organized sessions for AI, Web Dev, and Cybersecurity for 100+ students.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 font-display">Education</h2>
                <div className="flex flex-col gap-8">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-bold font-display uppercase">B.Tech in CSE</h3>
                      <span className="text-sm font-mono text-zinc-400">2022 - Present</span>
                    </div>
                    <div className="text-zinc-600 italic font-serif">APJ Abdul Kalam Technological University</div>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl font-bold font-display uppercase">Biology Science</h3>
                      <span className="text-sm font-mono text-zinc-400">2019 - 2022</span>
                    </div>
                    <div className="text-zinc-600 italic font-serif">Govt. Higher Secondary School Kumaranellur</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
