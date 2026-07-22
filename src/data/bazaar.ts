export interface BazaarItem {
  id: number;
  title: string;
  brand: string;
  price: number;
  size: string;
  condition: string;
  image: string;
  store: string;
  tag?: string;
  sold?: boolean;
}

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=500`;

export const bazaarItems: BazaarItem[] = [
  { id: 1, title: 'GG Logo Fur Coat', brand: 'Gucci FW26', price: 4200, size: 'M', condition: 'Deadstock', image: px(34567855), store: 'OPVM', tag: 'NEW' },
  { id: 2, title: 'Chrome Denim Jacket', brand: 'Cav Empt', price: 640, size: 'L', condition: 'Used - Good', image: px(16817066), store: 'CHROME DEPOT' },
  { id: 3, title: 'Vlone Hoodie Black', brand: 'Vlone', price: 890, size: 'L', condition: 'Used - Excellent', image: px(10288208), store: 'GRAIL VAULT', tag: 'RARE' },
  { id: 4, title: 'Leather Trench Coat', brand: 'Balenciaga', price: 2850, size: 'M', condition: 'Used - Like New', image: px(31189508), store: 'OPVM' },
  { id: 5, title: 'Silver Metallic Jacket', brand: 'Number (N)ine', price: 1240, size: 'M', condition: 'Deadstock', image: px(33981913), store: 'CHROME DEPOT', tag: 'NEW' },
  { id: 6, title: 'Tour Tee FW24', brand: 'Opium', price: 320, size: 'S', condition: 'Used - Good', image: px(28581213), store: 'GRAIL VAULT', sold: true },
  { id: 7, title: 'Fur Trim Bomber', brand: 'Maison Margiela', price: 1980, size: 'L', condition: 'Used - Excellent', image: px(11482693), store: 'OPVM' },
  { id: 8, title: 'Y2K Low-Rise Denim', brand: 'Archive 2000', price: 410, size: '32', condition: 'Used - Good', image: px(29396864), store: 'CHROME DEPOT' },
];
