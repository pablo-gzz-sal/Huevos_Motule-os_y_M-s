import { createQueretaroClientConfig } from './queretaro-client.factory';

export const CAFE_BRETON_QUERETARO_CONFIG = createQueretaroClientConfig({
  id: 'cafe-breton-queretaro',
  exportName: 'CAFE_BRETON_QUERETARO_CONFIG',
  name: 'Café Breton',
  tagline: 'Bistró, pan y café a la francesa',
  concept:
    'Bistró y cafetería afrancesada en el Centro Histórico de Querétaro, conocido por su panadería artesanal, brunch clásico y ambiente europeo relajado.',
  primary: 'oklch(0.35 0.07 250)',
  primaryHover: 'oklch(0.28 0.07 250)',
  accent: 'oklch(0.9 0.09 95)',
  cta: 'oklch(0.68 0.12 72)',
  background: 'oklch(0.98 0.014 94)',
  surfaceAlt: 'oklch(0.93 0.028 92)',
  heroHeadline: 'Un bistró para\nel brunch clásico',
  heroSubheadline: 'Croissants, tartas, café y brunch afrancesado en el corazón de Querétaro.',
  locationLabel: 'Centro Histórico · Querétaro',
  zone: 'Centro Histórico',
  instagram: 'https://www.instagram.com/breton_queretaro/',
  category: 'cafe',
  heroImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&auto=format&fit=crop&q=85',
  conceptImage: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1100&auto=format&fit=crop&q=85',
  menuImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&auto=format&fit=crop&q=85',
  mapImage: 'https://images.unsplash.com/photo-1577086664693-894d8405334a?w=1000&auto=format&fit=crop&q=85',
});
