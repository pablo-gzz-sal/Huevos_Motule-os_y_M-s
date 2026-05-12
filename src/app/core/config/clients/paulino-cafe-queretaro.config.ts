import { createQueretaroClientConfig } from './queretaro-client.factory';

export const PAULINO_CAFE_QUERETARO_CONFIG = createQueretaroClientConfig({
  id: 'paulino-cafe-queretaro',
  exportName: 'PAULINO_CAFE_QUERETARO_CONFIG',
  name: 'Paulino Café',
  tagline: 'Café veracruzano en una barra queretana',
  concept:
    'Cafetería en el Centro Histórico de Querétaro operada por productores de café veracruzano de especialidad, con énfasis en origen y técnicas de extracción.',
  primary: 'oklch(0.38 0.12 50)',
  primaryHover: 'oklch(0.3 0.11 50)',
  accent: 'oklch(0.7 0.13 150)',
  cta: 'oklch(0.7 0.13 68)',
  background: 'oklch(0.978 0.016 90)',
  surfaceAlt: 'oklch(0.93 0.032 86)',
  heroHeadline: 'De Veracruz a tu taza\nen Querétaro',
  heroSubheadline: 'Productores de café veracruzano sirviendo cada taza con historia y técnica.',
  locationLabel: 'Centro Histórico · Querétaro',
  zone: 'Centro Histórico',
  category: 'cafe',
  heroImage: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1800&auto=format&fit=crop&q=85',
  conceptImage: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=1100&auto=format&fit=crop&q=85',
  menuImage: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=1200&auto=format&fit=crop&q=85',
  mapImage: 'https://images.unsplash.com/photo-1577086664693-894d8405334a?w=1000&auto=format&fit=crop&q=85',
});
