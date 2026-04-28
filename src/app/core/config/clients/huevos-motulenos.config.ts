import { BusinessConfig } from '../business.config';
import { COFFEE_ST_FITZ_CONFIG } from './coffee-st-fitz.config';

export const HUEVOS_MOTULENOS_CONFIG: BusinessConfig = {
  ...COFFEE_ST_FITZ_CONFIG,
  id: 'huevos-motulenos-merida',
  name: 'Huevos Motulenos y Mas',
  tagline: 'Cocina yucateca para desayunar bien',
  category: 'restaurant',
  concept: 'Fixture de restaurante yucateco para validar que el starter puede cambiar de cliente sin tocar componentes.',
  identity: {
    id: 'huevos-motulenos-merida',
    name: 'Huevos Motulenos y Mas',
    tagline: 'Cocina yucateca para desayunar bien',
    category: 'restaurant',
    concept: 'Fixture de restaurante yucateco para validar cambios de cliente por config.',
  },
  theme: {
    ...COFFEE_ST_FITZ_CONFIG.theme!,
    primary: 'oklch(0.46 0.18 28)',
    primaryHover: 'oklch(0.39 0.17 28)',
    accent: 'oklch(0.72 0.12 78)',
    cta: 'oklch(0.52 0.17 36)',
  },
  hero: {
    ...COFFEE_ST_FITZ_CONFIG.hero,
    headline: 'Huevos Motulenos\ncon sabor de Merida',
    subheadline: 'Un fixture regional para probar menu, ubicacion y conversion con otra identidad.',
    locationLabel: 'Merida, Yucatan',
  },
  seo: {
    ...COFFEE_ST_FITZ_CONFIG.seo,
    title: 'Huevos Motulenos y Mas - Demo reusable',
    description: 'Fixture de cocina yucateca para validar el starter reusable de restaurantes.',
    schemaType: 'Restaurant',
  },
  sectionCopy: {
    ...COFFEE_ST_FITZ_CONFIG.sectionCopy,
    concept: {
      ...COFFEE_ST_FITZ_CONFIG.sectionCopy.concept,
      heading: 'Otra marca, la misma arquitectura reusable',
      lead: 'Este config demuestra que el sitio puede cambiar de cafe a restaurante regional sin editar secciones.',
    },
    menuHighlights: {
      ...COFFEE_ST_FITZ_CONFIG.sectionCopy.menuHighlights,
      heading: 'Clasicos yucatecos destacados',
      subheading: 'Huevos motulenos, panuchos, papadzules y bebidas frescas como prueba de reusabilidad.',
    },
  },
  menuCategories: [
    { id: 'desayunos', name: 'Desayunos', description: 'Clasicos de la manana' },
    { id: 'yucateco', name: 'Yucateco', description: 'Platillos regionales' },
    { id: 'bebidas', name: 'Bebidas', description: 'Jugos y cafe' },
  ],
  menuItems: [
    { id: 'hm1', categoryId: 'desayunos', name: 'Huevos motulenos', description: 'Tortilla, frijol, huevo, salsa y platano.', price: '$165', tag: 'signature', featured: true },
    { id: 'hm2', categoryId: 'yucateco', name: 'Papadzules', description: 'Tortillas rellenas con salsa de pepita.', price: '$155', featured: true },
    { id: 'hm3', categoryId: 'yucateco', name: 'Panuchos', description: 'Crujientes, servidos con recado y curtido.', price: '$145' },
    { id: 'hm4', categoryId: 'bebidas', name: 'Jugo de naranja', description: 'Natural y fresco.', price: '$75', featured: true },
  ],
};
