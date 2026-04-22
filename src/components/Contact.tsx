import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 block mb-4">
              Get in Touch
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter mb-8 italic font-serif">
              Let's create something <span className="not-italic font-display font-bold">legendary</span>.
            </h2>
            
            <div className="flex flex-col gap-8 mt-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Email</div>
                  <div className="text-xl">ahamedshakir02@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Location</div>
                  <div className="text-xl">Pattambi, Kerala, India</div>
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
              <button 
                className="mt-4 flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 rounded-xl font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all active:scale-95"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
