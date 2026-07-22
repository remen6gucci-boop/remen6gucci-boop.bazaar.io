import { galleryImages, type GalleryImage } from '@/data/gallery';

const columns: GalleryImage[][] = [
  galleryImages.slice(0, 6),
  galleryImages.slice(6, 12),
  galleryImages.slice(12, 18),
];

export default function Gallery() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 overflow-hidden">
      {columns.map((col, i) => (
        <div key={i} className="flex h-full flex-col gap-2">
          {col.map((img) => (
            <GalleryCard key={img.id} image={img} />
          ))}
        </div>
      ))}
    </div>
  );
}

function GalleryCard({ image }: { image: GalleryImage }) {
  return (
    <div className="overflow-hidden rounded-md bg-neutral-900 ring-1 ring-white/[0.04]">
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        style={{ aspectRatio: `1 / ${image.ratio}` }}
        className="h-full w-full object-cover grayscale-[20%]"
      />
    </div>
  );
}
