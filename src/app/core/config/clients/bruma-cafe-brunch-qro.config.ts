import { createQueretaroClientConfig } from './queretaro-client.factory';

export const BRUMA_CAFE_BRUNCH_QRO_CONFIG = createQueretaroClientConfig({
  id: 'bruma-cafe-brunch-qro',
  exportName: 'BRUMA_CAFE_BRUNCH_QRO_CONFIG',
  name: 'Bruma Café & Brunch',
  tagline: 'Entre sabores y pausas en el corazón de Querétaro',
  concept:
    'Café de especialidad y brunch en el Centro Histórico de Querétaro, con bebidas de autor, panadería artesanal y un ambiente diseñado para hacer pausas largas entre amigos, trabajo remoto y momentos instagrameables.',
  primary: 'oklch(0.55 0.12 150)',
  primaryHover: 'oklch(0.47 0.12 150)',
  accent: 'oklch(0.86 0.11 90)',
  cta: 'oklch(0.72 0.13 75)',
  background: 'oklch(0.98 0.018 94)',
  surfaceAlt: 'oklch(0.94 0.035 96)',
  heroHeadline: 'Entre sabores\ny pausas bonitas',
  heroSubheadline:
    'Brunch, café de especialidad y pan recién horneado en un espacio pet-friendly del Centro Histórico de Querétaro.',
  locationLabel: 'Centro Histórico · Querétaro',
  zone: 'Centro Histórico',
  instagram: 'https://www.instagram.com/bruma.cafe_brunch/',
  category: 'cafe',
  heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1800&auto=format&fit=crop&q=85',
  conceptImage: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1100&auto=format&fit=crop&q=85',
  menuImage: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&auto=format&fit=crop&q=85',
  mapImage: 'https://images.unsplash.com/photo-1577086664693-894d8405334a?w=1000&auto=format&fit=crop&q=85',
});
