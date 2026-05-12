import { createQueretaroClientConfig } from './queretaro-client.factory';

export const PARQUE_MONCHIS_QUERETARO_CONFIG = createQueretaroClientConfig({
  id: 'parque-monchis-queretaro',
  exportName: 'PARQUE_MONCHIS_QUERETARO_CONFIG',
  name: 'Parque Monchis',
  tagline: 'Restaurante al aire libre para toda la familia',
  concept:
    'Restaurante al aire libre en Querétaro con áreas verdes, juegos y espacios pensados para familias y mascotas, donde la comida se disfruta sin prisas.',
  primary: 'oklch(0.52 0.15 140)',
  primaryHover: 'oklch(0.43 0.14 140)',
  accent: 'oklch(0.78 0.18 70)',
  cta: 'oklch(0.73 0.16 68)',
  background: 'oklch(0.975 0.026 118)',
  surfaceAlt: 'oklch(0.92 0.04 120)',
  heroHeadline: 'Comer al aire libre\ncon toda la familia',
  heroSubheadline:
    'Terrazas, áreas verdes y platillos casuales en el restaurante más divertido de Querétaro.',
  locationLabel: 'Querétaro · México',
  zone: 'Querétaro urbano',
  instagram: 'https://www.instagram.com/parquemonchis/',
  heroImage: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1800&auto=format&fit=crop&q=85',
  conceptImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1100&auto=format&fit=crop&q=85',
  menuImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&auto=format&fit=crop&q=85',
  mapImage: 'https://images.unsplash.com/photo-1577086664693-894d8405334a?w=1000&auto=format&fit=crop&q=85',
});
