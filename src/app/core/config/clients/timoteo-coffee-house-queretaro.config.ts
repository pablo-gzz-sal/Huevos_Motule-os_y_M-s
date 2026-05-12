import { createQueretaroClientConfig } from './queretaro-client.factory';

export const TIMOTEO_COFFEE_HOUSE_QUERETARO_CONFIG = createQueretaroClientConfig({
  id: 'timoteo-coffee-house-queretaro',
  exportName: 'TIMOTEO_COFFEE_HOUSE_QUERETARO_CONFIG',
  name: 'Timoteo Coffee House',
  tagline: 'Coffee house con desayunos y algo más',
  concept:
    'Coffee house en Querétaro con desayunos, sándwiches, ensaladas y jugos naturales, pensado como punto de reunión casual desde la mañana.',
  primary: 'oklch(0.4 0.09 210)',
  primaryHover: 'oklch(0.32 0.09 210)',
  accent: 'oklch(0.86 0.14 95)',
  cta: 'oklch(0.7 0.14 72)',
  background: 'oklch(0.98 0.018 94)',
  surfaceAlt: 'oklch(0.935 0.032 90)',
  heroHeadline: 'Coffee house para\nempezar el día',
  heroSubheadline:
    'Desayunos, sándwiches y café en un espacio cómodo para trabajar, platicar o solo hacer una pausa.',
  locationLabel: 'Querétaro · México',
  zone: 'Querétaro urbano',
  category: 'cafe',
  heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1800&auto=format&fit=crop&q=85',
  conceptImage: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1100&auto=format&fit=crop&q=85',
  menuImage: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&auto=format&fit=crop&q=85',
  mapImage: 'https://images.unsplash.com/photo-1577086664693-894d8405334a?w=1000&auto=format&fit=crop&q=85',
});
