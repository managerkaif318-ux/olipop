
export interface DrinkVariant {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  themeColor: string;
  accentColor: string;
  sequencePath: string;
  frameCount: number;
  mode: 'dark' | 'light';
}

export const DRINK_VARIANTS: DrinkVariant[] = [
  {
    id: 'cherry-vanilla',
    name: 'CHERRY',
    subtitle: 'VANILLA SODA',
    description: 'A modern take on a classic soda with a perfect blend of sweet and tart, full of nostalgic flavor.',
    themeColor: '#E01E37',
    accentColor: '#F28CCD',
    sequencePath: 'https://xkbusafxgmexravpxruc.supabase.co/storage/v1/object/public/cheery%20vanila/frame_###_delay-0.041s.webp',
    frameCount: 192,
    mode: 'dark'
  },
  {
    id: 'vanilla-grape',
    name: 'VANILLA',
    subtitle: 'GRAPE SODA',
    description: 'A modern functional soda brand inspired by classic flavors but made with better ingredients.',
    themeColor: '#6D28D9',
    accentColor: '#A78BFA',
    sequencePath: 'https://xkbusafxgmexravpxruc.supabase.co/storage/v1/object/public/vanila%20grape/frame_###_delay-0.041s.webp',
    frameCount: 192,
    mode: 'dark'
  },
  {
    id: 'ginger-lemon',
    name: 'GINGER',
    subtitle: 'LEMON SODA',
    description: 'Bright and refreshing citrus soda with natural lemon spark and crisp bubbles.',
    themeColor: '#FBBF24',
    accentColor: '#FEF3C7',
    sequencePath: 'https://xkbusafxgmexravpxruc.supabase.co/storage/v1/object/public/ginger%20lemon/frame_###_delay-0.041s.webp',
    frameCount: 192,
    mode: 'dark'
  }
];

export function getFrameUrl(path: string, index: number): string {
  const frameString = index.toString().padStart(3, '0');
  return path.replace('###', frameString);
}
