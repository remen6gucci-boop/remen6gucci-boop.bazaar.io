import { Star, BadgeCheck, ArrowUpRight, MapPin } from 'lucide-react';
import { type VerifiedStore } from '@/data/stores';

export default function StoreCard({ store, index }: { store: VerifiedStore; index: number }) {
  return (
    <article
      className="animate-fade-up group relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.015] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.03]"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <img
            src={store.avatar}
            alt={store.name}
            className="h-14 w-14 rounded-full object-cover ring-1 ring-white/15 grayscale transition-all duration-500 group-hover:grayscale-0"
          />
          <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-black ring-2 ring-black">
            <BadgeCheck className="h-5 w-5 fill-sky-500 text-black" />
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-lg font-700 uppercase tracking-tight text-white">
              {store.name}
            </h3>
            <span className="rounded-sm border border-white/10 px-1.5 py-0.5 font-mono text-[9px] font-500 uppercase tracking-widest text-white/40">
              {store.tag}
            </span>
          </div>
          <p className="font-mono text-[11px] text-neutral-500">@{store.username}</p>
          <div className="mt-1.5 flex items-center gap-2.5 font-mono text-[11px] text-neutral-500">
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span className="font-600 text-white">{store.rating.toFixed(1)}</span>
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-700" />
            <span className="text-neutral-400">{store.sales} sales</span>
            <span className="h-1 w-1 rounded-full bg-neutral-700" />
            <span className="flex items-center gap-0.5 text-neutral-500">
              <MapPin className="h-3 w-3" />
              {store.location}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-neutral-400">{store.description}</p>

      <div className="mt-4 grid grid-cols-4 gap-1.5">
        {store.thumbnails.map((thumb, i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden rounded-sm bg-neutral-900 ring-1 ring-white/[0.04]"
          >
            <img
              src={thumb}
              alt={`${store.name} item ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover grayscale-[35%] opacity-75 transition-all duration-500 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>

      <button className="mt-5 flex w-full items-center justify-center gap-1.5 chrome-bg rounded-sm py-2.5 font-mono text-[11px] font-700 uppercase tracking-widest text-black transition-opacity hover:opacity-90">
        Visit Store
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </article>
  );
}
