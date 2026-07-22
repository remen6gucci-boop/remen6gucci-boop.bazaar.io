import { Heart, MapPin } from 'lucide-react';
import { bazaarItems, type BazaarItem } from '@/data/bazaar';

const filters = ['All', 'Gucci FW26', 'Opium', 'Y2K', 'Archive', 'Denim'];

export default function Bazaar() {
  return (
    <section id="bazaar" className="border-t border-white/[0.08] py-20">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-600">
            // the marketplace
          </span>
          <h2 className="mt-2 font-display text-5xl font-700 uppercase tracking-tighter text-white lg:text-6xl">
            <span className="chrome-text">Bazaar</span>
          </h2>
          <p className="mt-2 max-w-md text-sm text-neutral-500">
            Buy archive pieces direct from verified stores. Every listing legit-checked.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`rounded-sm px-3.5 py-1.5 font-mono text-[11px] font-600 uppercase tracking-widest transition-all ${
                i === 0
                  ? 'chrome-bg text-black'
                  : 'border border-white/10 text-neutral-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {bazaarItems.map((item, i) => (
          <BazaarCard key={item.id} item={item} index={i} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="rounded-sm border border-white/15 px-8 py-3 font-mono text-[11px] font-600 uppercase tracking-widest text-white transition-all hover:border-white hover:bg-white hover:text-black">
          Load more ↓
        </button>
      </div>
    </section>
  );
}

function BazaarCard({ item, index }: { item: BazaarItem; index: number }) {
  return (
    <article
      className="animate-fade-up group relative cursor-pointer overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.015] transition-all duration-500 hover:-translate-y-1 hover:border-white/25"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover grayscale-[25%] opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        {item.sold && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/55">
            <span className="font-display text-2xl font-700 uppercase tracking-widest text-white">
              Sold
            </span>
          </div>
        )}
        <button className="absolute right-2.5 top-2.5 rounded-full bg-black/40 p-2 text-white backdrop-blur transition-all hover:bg-black/70">
          <Heart className="h-4 w-4" />
        </button>
        {item.tag && (
          <span className="absolute left-2.5 top-2.5 chrome-bg rounded-sm px-2 py-1 font-mono text-[10px] font-700 uppercase tracking-widest text-black">
            {item.tag}
          </span>
        )}
        <span className="absolute bottom-2.5 left-2.5 rounded-sm bg-black/50 px-2 py-1 font-mono text-[10px] font-500 uppercase tracking-wider text-white/70 backdrop-blur">
          {item.condition}
        </span>
      </div>

      <div className="p-3.5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
            {item.brand}
          </span>
          <span className="flex items-center gap-0.5 font-mono text-[10px] text-neutral-600">
            <MapPin className="h-2.5 w-2.5" />
            {item.store}
          </span>
        </div>
        <h3 className="mt-1.5 truncate text-sm font-500 text-white">{item.title}</h3>
        <div className="mt-2.5 flex items-center justify-between">
          <span className="font-display text-xl font-700 text-white">
            ${item.price.toLocaleString()}
          </span>
          <span className="rounded-sm border border-white/10 px-2 py-0.5 font-mono text-[10px] text-neutral-400">
            Sz {item.size}
          </span>
        </div>
      </div>
    </article>
  );
}
