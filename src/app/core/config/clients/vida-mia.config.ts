import { BusinessConfig } from '../business.config';
import { COFFEE_ST_FITZ_CONFIG } from './coffee-st-fitz.config';

export const VIDA_MIA_CONFIG: BusinessConfig = {
  ...COFFEE_ST_FITZ_CONFIG,
  id: 'vida-mia-merida',
  name: 'Vida Mia',
  tagline: 'Desayuno y brunch en el norte de Merida',
  category: 'restaurant',
  concept: 'Fixture de brunch bohemio para validar un segundo cambio de marca desde config.',
  identity: {
    id: 'vida-mia-merida',
    name: 'Vida Mia',
    tagline: 'Desayuno y brunch en el norte de Merida',
    category: 'restaurant',
    concept: 'Fixture de brunch bohemio para validar un segundo cambio de marca desde config.',
  },
  theme: {
    ...COFFEE_ST_FITZ_CONFIG.theme!,
    primary: 'oklch(0.55 0.13 82)',
    primaryHover: 'oklch(0.47 0.12 82)',
    accent: 'oklch(0.45 0.08 135)',
    cta: 'oklch(0.5 0.13 55)',
  },
  hero: {
    ...COFFEE_ST_FITZ_CONFIG.hero,
    headline: 'Vida Mia\npara brunch en Merida',
    subheadline: 'Un fixture luminoso de desayuno y brunch para probar otra direccion visual sin tocar componentes.',
    locationLabel: 'Norte de Merida',
  },
  seo: {
    ...COFFEE_ST_FITZ_CONFIG.seo,
    title: 'Vida Mia - Demo reusable',
    description: 'Fixture de brunch para validar el starter reusable de restaurantes.',
    schemaType: 'Restaurant',
  },
  sectionCopy: {
    ...COFFEE_ST_FITZ_CONFIG.sectionCopy,
    concept: {
      ...COFFEE_ST_FITZ_CONFIG.sectionCopy.concept,
      heading: 'Un brunch distinto con la misma base',
      lead: 'Este config valida que el starter acepta otra voz, colores y menu con cambios contenidos.',
    },
    menuHighlights: {
      ...COFFEE_ST_FITZ_CONFIG.sectionCopy.menuHighlights,
      heading: 'Brunch, bowls y cafe',
      subheading: 'Una carta ligera para probar otra categoria dentro del mismo sistema.',
    },
  },
  menuCategories: [
    { id: 'brunch', name: 'Brunch', description: 'Favoritos de media manana' },
    { id: 'saludable', name: 'Saludable', description: 'Bowls y opciones frescas' },
    { id: 'cafe', name: 'Cafe', description: 'Bebidas calientes y frias' },
  ],
  menuItems: [
    { id: 'vm1', categoryId: 'brunch', name: 'Avocado toast', description: 'Pan de masa madre, aguacate y huevo.', price: '$155', tag: 'popular', featured: true },
    { id: 'vm2', categoryId: 'saludable', name: 'Smoothie bowl', description: 'Fruta, granola y semillas.', price: '$145', featured: true },
    { id: 'vm3', categoryId: 'brunch', name: 'Omelette de la casa', description: 'Huevos, vegetales y queso.', price: '$160' },
    { id: 'vm4', categoryId: 'cafe', name: 'Capuccino', description: 'Espresso y leche cremosa.', price: '$78', featured: true },
  ],
};
