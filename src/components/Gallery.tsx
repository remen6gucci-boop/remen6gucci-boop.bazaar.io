import { galleryImages, type GalleryImage } from '@/data/gallery';

const columns: GalleryImage[][] = [
  galleryImages.slice(0, 6),
  galleryImages.slice(6, 12),
  galleryImages.slice(12, 18),
];

const animations = ['animate-scroll-up', 'animate-scroll-up-med', 'animate-scroll-up-slow'];

export default function Gallery() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 overflow-hidden">
      {columns.map((col, i) => (
        <div key={i} className="gallery-column relative h-full overflow-hidden">
          <div className={`${animations[i]} flex flex-col gap-2 will-change-transform`}>
            {[...col, ...col].map((img, idx) => (
              <GalleryCard key={`${img.id}-${idx}`} image={img} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function GalleryCard({ image }: { image: GalleryImage }) {
  return (
    <div className="group relative overflow-hidden rounded-md bg-neutral-900 ring-1 ring-white/[0.04] transition-all duration-500 hover:ring-white/20">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        style={{ aspectRatio: `1 / ${image.ratio}` }}
        className="w-full object-cover grayscale-[30%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}
