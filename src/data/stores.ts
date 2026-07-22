export interface VerifiedStore {
  id: number;
  name: string;
  username: string;
  avatar: string;
  rating: number;
  sales: string;
  location: string;
  tag: string;
  description: string;
  thumbnails: string[];
}

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=200`;

export const verifiedStores: VerifiedStore[] = [
  {
    id: 1,
    name: 'OPVM',
    username: 'opvm',
    avatar: px(29889408),
    rating: 5.0,
    sales: '3.2k',
    location: 'Milano, IT',
    tag: 'Couture Archive',
    description: 'Gucci FW26, Balenciaga, Margiela. Runway-only, no replicas.',
    thumbnails: [px(34567855), px(33981913), px(11482693), px(34359705)],
  },
  {
    id: 2,
    name: 'GRAIL VAULT',
    username: 'grailvault',
    avatar: px(31189508),
    rating: 4.9,
    sales: '2.1k',
    location: 'Atlanta, US',
    tag: 'Opium / Drill',
    description: 'Vlone, Opium, Playboi Carti tour pieces. Sourced direct.',
    thumbnails: [px(10288208), px(28581213), px(37577682), px(20894559)],
  },
  {
    id: 3,
    name: 'CHROME DEPOT',
    username: 'chromedepot',
    avatar: px(16817066),
    rating: 4.8,
    sales: '1.6k',
    location: 'Tokyo, JP',
    tag: 'Y2K / Cyber',
    description: 'Early 2000s archive, chrome denim, Cav Empt, Number (N)ine.',
    thumbnails: [px(16817066), px(29396864), px(17243583), px(31502140)],
  },
];
