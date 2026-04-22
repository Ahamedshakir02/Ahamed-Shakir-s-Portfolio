export default function Footer() {
  return (
    <footer className="py-12 bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold tracking-tight">Ahamed Shakir</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-zinc-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Social</a>
          </div>
          
          <p className="text-zinc-500 text-xs tracking-widest uppercase">
            © 2026 Crafted with Passion
          </p>
        </div>
      </div>
    </footer>
  );
}
