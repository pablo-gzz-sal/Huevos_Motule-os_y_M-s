import { createQueretaroClientConfig } from './queretaro-client.factory';

export const CASA_BALVANERA_QUERETARO_CONFIG = createQueretaroClientConfig({
  id: 'casa-balvanera-queretaro',
  exportName: 'CASA_BALVANERA_QUERETARO_CONFIG',
  name: 'Casa Balvanera',
  tagline: 'Sabor internacional con vista a Querétaro',
  concept:
    'Restaurante de cocina internacional con una de las mejores vistas panorámicas de Querétaro, ideal para cenas largas, eventos y coctelería al atardecer.',
  primary: 'oklch(0.32 0.06 260)',
  primaryHover: 'oklch(0.25 0.06 260)',
  accent: 'oklch(0.82 0.12 80)',
  cta: 'oklch(0.74 0.13 78)',
  background: 'oklch(0.97 0.012 92)',
  surfaceAlt: 'oklch(0.92 0.025 90)',
  heroHeadline: 'La vista que\nsabe a Balvanera',
  heroSubheadline: 'Cocina internacional, vinos y atardeceres de Querétaro en una sola terraza.',
  locationLabel: 'Querétaro · México',
  zone: 'Zona panorámica',
  instagram: 'https://www.instagram.com/casabalvanera/',
  heroImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1800&auto=format&fit=crop&q=85',
  conceptImage: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1100&auto=format&fit=crop&q=85',
  menuImage: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&auto=format&fit=crop&q=85',
  mapImage: 'https://images.unsplash.com/photo-1577086664693-894d8405334a?w=1000&auto=format&fit=crop&q=85',
});
