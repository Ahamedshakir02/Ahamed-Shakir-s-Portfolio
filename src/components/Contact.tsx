import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-zinc-950 text-white rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 block mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter mb-8 italic font-serif">
              Let's create something <span className="not-italic font-display font-bold">legendary</span>.
            </h2>
            
            <div className="flex flex-col gap-6 mt-12">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Email</div>
                  <a href="mailto:ahamedshakir02@gmail.com" className="text-lg hover:text-blue-400 transition-colors">ahamedshakir02@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">LinkedIn</div>
                  <a href="https://linkedin.com/in/ahamed-shakir" target="_blank" rel="noreferrer" className="text-lg hover:text-blue-400 transition-colors">ahamed-shakir</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                  <Instagram className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Instagram</div>
                  <a href="https://instagram.com/ahamed_shakir_" target="_blank" rel="noreferrer" className="text-lg hover:text-pink-400 transition-colors">ahamed_shakir_</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Location</div>
                  <div className="text-lg">Pattambi, Kerala, India</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-zinc-900 rounded-[2rem] border border-zinc-800"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              <motion.button 
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  boxShadow: "0 10px 30px rgba(255,255,255,0.1)" 
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 rounded-xl font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
