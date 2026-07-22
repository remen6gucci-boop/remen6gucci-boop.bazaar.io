export interface GalleryImage {
  id: number;
  src: string;
  ratio: number;
  alt: string;
}

const px = (id: number, extra = '') =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600${extra}`;

export const galleryImages: GalleryImage[] = [
  { id: 1, src: px(34567855, '&h=900'), ratio: 1.33, alt: 'Fur coat, dramatic studio light' },
  { id: 2, src: px(34567856), ratio: 0.75, alt: 'Metallic gloves, fur coat' },
  { id: 3, src: px(11482693), ratio: 1.4, alt: 'Fur coat, red light' },
  { id: 4, src: px(29889408), ratio: 0.72, alt: 'Leather jacket, moody portrait' },
  { id: 5, src: px(31189508), ratio: 1.25, alt: 'Leather jacket, warm light' },
  { id: 6, src: px(10288208), ratio: 1.5, alt: 'Black leather jacket, studio' },
  { id: 7, src: px(33981913), ratio: 0.8, alt: 'Green fur coat, silver boots' },
  { id: 8, src: px(36005670), ratio: 1.35, alt: 'Leather jacket, elegant portrait' },
  { id: 9, src: px(34359705), ratio: 1.5, alt: 'Fur coat, dark backdrop' },
  { id: 10, src: px(28581213), ratio: 1.25, alt: 'Leather jacket, sunglasses, dramatic' },
  { id: 11, src: px(29396864), ratio: 0.78, alt: 'Street fashion, urban' },
  { id: 12, src: px(17243583), ratio: 1.45, alt: 'Street style portrait' },
  { id: 13, src: px(16817066), ratio: 1.2, alt: 'Y2K style fashion' },
  { id: 14, src: px(34534952), ratio: 0.75, alt: 'Faux fur, city lights night' },
  { id: 15, src: px(37577682), ratio: 1.3, alt: 'Leather jacket, moody studio' },
  { id: 16, src: px(31502140), ratio: 1.5, alt: 'Leather jacket, sepia tone' },
  { id: 17, src: px(33681521), ratio: 0.72, alt: 'Dark fashion portrait' },
  { id: 18, src: px(20894559), ratio: 1.25, alt: 'Leather jacket, dramatic light' },
];
