import { Search, LogIn, Menu } from 'lucide-react';

const navLinks = ['Explore', 'Designers', 'Stores', 'Bazaar'];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-white/[0.08]">
      <nav className="mx-auto flex h-16 max-w-[1500px] items-center gap-6 px-6 lg:px-10">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-2xl font-700 uppercase tracking-tighter chrome-text">
            Archivé
          </span>
          <span className="rounded-sm border border-white/20 px-1.5 py-0.5 font-mono text-[9px] font-600 uppercase tracking-widest text-white/50">
            FW26
          </span>
        </a>

        <div className="group relative hidden flex-1 max-w-xs md:block">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-600 transition-colors group-focus-within:text-white" />
          <input
            type="text"
            placeholder="Search grails, stores, designers"
            className="h-9 w-full rounded-sm border border-white/[0.08] bg-white/[0.02] pl-10 pr-3 font-mono text-xs text-white placeholder:text-neutral-600 transition-all focus:border-white/20 focus:bg-white/[0.04] focus:outline-none"
          />
        </div>

        <div className="ml-auto flex items-center gap-1">
          {navLinks.map((label) => (
            <a
              key={label}
              href={label === 'Bazaar' ? '#bazaar' : '#'}
              className={`rounded-sm px-3.5 py-2 font-mono text-[11px] font-500 uppercase tracking-widest transition-colors hover:text-white ${
                label === 'Bazaar' ? 'text-white' : 'text-neutral-500'
              }`}
            >
              <span className="hidden lg:inline">{label}</span>
              <span className="lg:hidden">{label[0]}</span>
            </a>
          ))}
          <button className="ml-3 flex items-center gap-2 chrome-bg rounded-sm px-4 py-2 font-mono text-[11px] font-700 uppercase tracking-widest text-black transition-opacity hover:opacity-90">
            <LogIn className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Login</span>
          </button>
          <button className="ml-1 rounded-sm p-2 text-neutral-500 transition-colors hover:text-white md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
