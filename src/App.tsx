import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import StoreCard from '@/components/StoreCard';
import Bazaar from '@/components/Bazaar';
import { verifiedStores } from '@/data/stores';

const tickerWords = [
  'GUCCI FW26', 'OPVM', 'CHROME', 'VLONE', 'OPIUM', 'NUMBER NINE', 'BALENCIAGA',
  'MARGIELA', 'CAV EMPT', 'Y2K', 'ARCHIVE', 'DEADSTOCK', 'GRAIL',
];

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Single marquee ticker */}
      <div className="border-b border-white/[0.08] bg-white/[0.015] py-2.5 overflow-hidden">
        <div className="animate-marquee flex w-max gap-6 whitespace-nowrap">
          {[...tickerWords, ...tickerWords].map((w, i) => (
            <span key={i} className="flex items-center gap-6 font-mono text-[11px] font-500 uppercase tracking-widest text-neutral-500">
              {w}
              <span className="text-neutral-800">✦</span>
            </span>
          ))}
        </div>
      </div>

      <main className="mx-auto max-w-[1500px] px-6 lg:px-10">
        {/* Hero split */}
        <section className="grid grid-cols-1 gap-10 py-12 lg:grid-cols-[42%_1fr] lg:gap-16 lg:py-16">
          {/* Left panel */}
          <div className="flex flex-col">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[11px] font-500 uppercase tracking-widest text-neutral-300">
                <Zap className="h-3.5 w-3.5 text-white" />
                Verified archive · FW26
              </span>
              <h1 className="mt-7 font-display text-6xl font-700 uppercase leading-[0.9] tracking-tighter lg:text-7xl xl:text-8xl">
                <span className="chrome-text">Wear the</span>
                <br />
                <span className="text-white">future.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-400">
                Archive fits and streetwear from verified stores only. Gucci FW26,
                Opium, Y2K grails — no random sellers, no replicas. Every piece legit.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <button className="group flex items-center gap-2 chrome-bg rounded-sm px-7 py-3.5 font-mono text-[11px] font-700 uppercase tracking-widest text-black transition-opacity hover:opacity-90">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="#bazaar"
                  className="rounded-sm border border-white/15 px-6 py-3.5 font-mono text-[11px] font-600 uppercase tracking-widest text-white transition-all hover:border-white/40 hover:bg-white/5"
                >
                  Enter Bazaar
                </a>
              </div>
              <div className="mt-9 flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-white" />
                  Legit-checked
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                  3.2k items live
                </span>
                <span className="hidden sm:inline">No replicas</span>
              </div>
            </div>

            {/* Verified stores */}
            <div className="mt-16">
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600">
                    // trusted boutiques
                  </span>
                  <h2 className="mt-1.5 font-display text-3xl font-700 uppercase tracking-tighter text-white">
                    Verified Stores
                  </h2>
                </div>
                <a href="#" className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 transition-colors hover:text-white">
                  View all →
                </a>
              </div>

              <div className="flex flex-col gap-4">
                {verifiedStores.map((store, i) => (
                  <StoreCard key={store.id} store={store} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Right gallery */}
          <div className="relative">
            <div className="lg:sticky lg:top-24">
              <div className="h-[calc(100vh-7rem)] min-h-[640px] overflow-hidden rounded-xl border border-white/[0.08] bg-neutral-950">
                <Gallery />
              </div>
              <p className="mt-3.5 text-center font-mono text-[10px] uppercase tracking-widest text-neutral-700">
                Editorial inspiration · hover to pause
              </p>
            </div>
          </div>
        </section>

        {/* Bazaar marketplace */}
        <Bazaar />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-10">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 px-6 lg:flex-row lg:px-10">
          <span className="font-display text-2xl font-700 uppercase tracking-tighter chrome-text">
            Archivé
          </span>
          <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-600">
            Verified archive · FW26 · © 2026
          </p>
          <div className="flex gap-6 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
            <a href="#" className="transition-colors hover:text-white">About</a>
            <a href="#" className="transition-colors hover:text-white">Verify</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
