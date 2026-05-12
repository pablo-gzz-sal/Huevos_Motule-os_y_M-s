import { BusinessConfig } from '../business.config';
import { COFFEE_ST_FITZ_CONFIG } from './coffee-st-fitz.config';

export interface QueretaroClientSeed {
  id: string;
  exportName: string;
  name: string;
  tagline: string;
  concept: string;
  primary: string;
  primaryHover: string;
  accent: string;
  cta: string;
  background: string;
  surfaceAlt: string;
  heroHeadline: string;
  heroSubheadline: string;
  locationLabel: string;
  zone: string;
  instagram?: string;
  category?: BusinessConfig['category'];
  schemaType?: BusinessConfig['seo']['schemaType'];
  heroImage: string;
  conceptImage: string;
  menuImage: string;
  mapImage: string;
  proofItems?: { value: string; label: string }[];
}

const qroMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Quer%C3%A9taro%20restaurante';

const defaultHours = [
  { day: 'Lunes', hours: '8:00 am - 10:00 pm' },
  { day: 'Martes', hours: '8:00 am - 10:00 pm' },
  { day: 'Miercoles', hours: '8:00 am - 10:00 pm' },
  { day: 'Jueves', hours: '8:00 am - 10:00 pm' },
  { day: 'Viernes', hours: '8:00 am - 11:00 pm' },
  { day: 'Sabado', hours: '8:00 am - 11:00 pm' },
  { day: 'Domingo', hours: '9:00 am - 6:00 pm' },
];

export function createQueretaroClientConfig(seed: QueretaroClientSeed): BusinessConfig {
  const category = seed.category ?? 'restaurant';
  const isCafe = category === 'cafe';
  const whatsappNumber = COFFEE_ST_FITZ_CONFIG.whatsapp.number;

  return {
    ...COFFEE_ST_FITZ_CONFIG,
    id: seed.id,
    name: seed.name,
    tagline: seed.tagline,
    category,
    concept: seed.concept,
    identity: {
      id: seed.id,
      name: seed.name,
      tagline: seed.tagline,
      category,
      concept: seed.concept,
    },
    brand: {
      primaryColor: seed.primary,
      accentColor: seed.accent,
      bgBase: seed.background,
      fontDisplay: 'Playfair Display SC',
      fontBody: 'Karla',
      darkMode: false,
    },
    theme: {
      mode: 'light',
      primary: seed.primary,
      primaryHover: seed.primaryHover,
      accent: seed.accent,
      cta: seed.cta,
      background: seed.background,
      surface: 'oklch(0.998 0.006 92)',
      surfaceAlt: seed.surfaceAlt,
      border: 'oklch(0.82 0.03 82)',
      text: 'oklch(0.22 0.035 62)',
      textMuted: 'oklch(0.42 0.028 68)',
      textInverse: 'oklch(0.985 0.008 92)',
      fontDisplay: 'Playfair Display SC',
      fontBody: 'Karla',
      radius: 'classic',
      shadow: 'medium',
      motionIntensity: 'standard',
    },
    seo: {
      title: `${seed.name} Querétaro - ${seed.tagline}`,
      description: `${seed.name}: ${seed.concept}`,
      keywords: [
        seed.name.toLowerCase(),
        'restaurantes queretaro',
        'brunch queretaro',
        'cafes queretaro',
        'queretaro instagram',
      ],
      ogImage: '/assets/og-image.jpg',
      locale: 'es_MX',
      schemaType: seed.schemaType ?? (isCafe ? 'CafeOrCoffeeShop' : 'Restaurant'),
    },
    hero: {
      headline: seed.heroHeadline,
      subheadline: seed.heroSubheadline,
      ctaLabel: 'Explorar menu',
      ctaSecondaryLabel: 'Ver ubicacion',
      locationLabel: seed.locationLabel,
      scrollCueLabel: 'Explorar',
      backgroundImage: seed.heroImage,
      overlayOpacity: 0.38,
    },
    cta: {
      reservationLabel: 'Contactar',
      whatsappLabel: 'Escribenos',
      stickyLabel: 'Contactar por WhatsApp',
    },
    footer: {
      copyrightLabel: `${seed.name} - Querétaro, México`,
      navigationHeading: 'Navegacion',
      hoursHeading: 'Horarios',
      contactHeading: 'Contacto',
    },
    sectionCopy: {
      ...COFFEE_ST_FITZ_CONFIG.sectionCopy,
      images: {
        heroBackground: seed.heroImage,
        conceptImage: seed.conceptImage,
        conceptImageAlt: `${seed.name} en Querétaro`,
        locationMapImage: seed.mapImage,
        menuPageHeroImage: seed.menuImage,
        menuItemFallbackImage: seed.menuImage,
        menuItemImages: {
          qro1: seed.menuImage,
          qro2: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=700&auto=format&fit=crop&q=82',
          qro3: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&auto=format&fit=crop&q=82',
          qro4: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=700&auto=format&fit=crop&q=82',
          qro5: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=700&auto=format&fit=crop&q=82',
          qro6: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=700&auto=format&fit=crop&q=82',
        },
      },
      concept: {
        eyebrow: 'El concepto',
        heading: seed.tagline,
        lead: seed.concept,
        body:
          'Esta propuesta convierte una presencia fuerte en Instagram en una casa digital propia: menu claro, historia de marca, ubicacion, horarios y contacto inmediato desde movil.',
        foundedLabel: seed.zone,
      },
      menuHighlights: {
        eyebrow: isCafe ? 'Cafe y brunch' : 'Favoritos',
        heading: isCafe ? 'Cafe, pan y platos para quedarse' : 'Platos, bebidas y momentos para reservar',
        subheading:
          'Una muestra breve para transformar curiosidad de redes en visita real: especialidades, bebidas y antojos faciles de elegir.',
        fullMenuLabel: 'Ver menu',
      },
      promotions: {
        eyebrow: 'Momentos para volver',
        heading: 'Ideas simples para activar visitas esta semana',
        validUntilPrefix: 'Disponible hasta',
      },
      gallery: {
        eyebrow: 'Asi se vive',
        heading: `${seed.name} en imagenes`,
        filters: [
          { id: 'all', label: 'Todo' },
          { id: 'food', label: 'Platos' },
          { id: 'drinks', label: 'Bebidas' },
          { id: 'interior', label: 'Espacio' },
        ],
      },
      testimonials: {
        eyebrow: 'Prueba social',
        heading: 'Senales que ayudan a decidir',
        subheading:
          'El sitio ordena el descubrimiento disperso de redes, mapas y recomendaciones en acciones concretas.',
        proofItems: seed.proofItems ?? [
          { value: 'IG', label: 'Presencia visual fuerte' },
          { value: 'QRO', label: 'Mercado local' },
          { value: '1', label: 'Web propia clara' },
        ],
      },
      location: {
        eyebrow: 'Ubicacion',
        heading: `Encuentra ${seed.name}`,
      },
      menuPage: {
        eyebrow: isCafe ? 'Carta de cafe' : 'Carta de la casa',
        heading: `Menu ${seed.name}`,
        lead: seed.heroSubheadline,
        finalHeading: `Listo para visitar ${seed.name}?`,
        finalDescription: 'Menu, mapa, horario y contacto quedan a un toque.',
      },
      contactPage: {
        eyebrow: 'Contacto rapido',
        heading: 'Contacto y ubicacion',
        whatsappTitle: 'WhatsApp / telefono',
        reservationTitle: 'Pedido o consulta',
        reservationDescription: 'Genera un mensaje listo para continuar por WhatsApp.',
        emailTitle: 'Sitio / contacto',
      },
    },
    menuCategories: [
      { id: 'brunch', name: 'Brunch', description: 'Platos de manana y sobremesa' },
      { id: 'especiales', name: 'Especiales', description: 'Firmas de la casa' },
      { id: 'bebidas', name: 'Bebidas', description: 'Cafe, cocteles o bebidas frescas' },
    ],
    menuItems: [
      {
        id: 'qro1',
        categoryId: 'brunch',
        name: isCafe ? 'Brunch de la casa' : 'Mesa de brunch',
        description: 'Plato abundante pensado para una primera visita facil de elegir.',
        price: '$185',
        tag: 'popular',
        featured: true,
      },
      {
        id: 'qro2',
        categoryId: 'brunch',
        name: 'Huevos de temporada',
        description: 'Huevos preparados con salsa, pan o acompanamientos de la casa.',
        price: '$165',
        featured: true,
      },
      {
        id: 'qro3',
        categoryId: 'especiales',
        name: 'Pan y dulce del dia',
        description: 'Panaderia o postre ideal para acompanar cafe y sobremesa.',
        price: '$120',
      },
      {
        id: 'qro4',
        categoryId: 'bebidas',
        name: isCafe ? 'Latte especial' : 'Bebida de autor',
        description: 'Bebida pensada para verse bien, saber mejor y pedir otra ronda.',
        price: '$85',
        tag: 'signature',
        featured: true,
      },
      {
        id: 'qro5',
        categoryId: 'especiales',
        name: 'Especial para compartir',
        description: 'Un antojo social para mesa larga, terraza o visita de fin de semana.',
        price: '$210',
      },
      {
        id: 'qro6',
        categoryId: 'brunch',
        name: 'Toast de temporada',
        description: 'Pan tostado con ingredientes frescos y perfil casual contemporaneo.',
        price: '$150',
      },
    ],
    promotions: [
      {
        id: 'p1',
        title: 'Primera visita',
        description: 'Menu, fotos y ubicacion en una pagina rapida para convertir interes de Instagram.',
        badge: 'Nuevo sitio',
        ctaLabel: 'Contactar',
        ctaAction: 'whatsapp',
      },
      {
        id: 'p2',
        title: 'Fin de semana',
        description: 'Un modulo listo para destacar brunch, terraza, musica o promociones de temporada.',
        badge: 'Brunch',
        ctaLabel: 'Reservar',
        ctaAction: 'reservation',
      },
      {
        id: 'p3',
        title: 'Como llegar',
        description: 'Mapa, horario y WhatsApp visibles para bajar la friccion de visita.',
        badge: seed.zone,
        ctaLabel: 'Abrir mapa',
        ctaAction: 'link',
        ctaValue: qroMapsUrl,
      },
    ],
    gallery: [
      { id: 'g1', src: seed.menuImage, alt: `${seed.name} - plato principal`, caption: 'Mesa lista', category: 'food' },
      { id: 'g2', src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&auto=format&fit=crop&q=82', alt: `${seed.name} - bebidas`, caption: 'Bebidas de la casa', category: 'drinks' },
      { id: 'g3', src: seed.conceptImage, alt: `${seed.name} - interior`, caption: 'Ambiente con identidad', category: 'interior' },
      { id: 'g4', src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=900&auto=format&fit=crop&q=82', alt: `${seed.name} - brunch`, caption: 'Brunch casual', category: 'food' },
      { id: 'g5', src: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=900&auto=format&fit=crop&q=82', alt: `${seed.name} - bebida fria`, caption: 'Bebidas frescas', category: 'drinks' },
      { id: 'g6', src: seed.heroImage, alt: `${seed.name} - experiencia`, caption: 'Experiencia visual', category: 'interior' },
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Cliente local',
        source: 'Instagram',
        rating: 5,
        text: 'Un concepto que se entiende rapido cuando ves fotos, menu y ubicacion en un solo lugar.',
        date: '2026',
      },
      {
        id: 't2',
        name: 'Visitante',
        source: 'Direct',
        rating: 5,
        text: 'Ideal para descubrir desde el telefono y decidir si ir por brunch, cafe o terraza.',
        date: '2026',
      },
      {
        id: 't3',
        name: 'Recomendacion publica',
        source: 'Google',
        rating: 5,
        text: 'La propuesta visual de redes merece una pagina propia para convertir mejor.',
        date: '2026',
      },
    ],
    faqs: [
      { question: `Que ofrece ${seed.name}?`, answer: seed.concept },
      {
        question: 'Como puedo contactarlos?',
        answer: 'El flujo principal abre WhatsApp con un mensaje listo para enviar.',
      },
    ],
    reservation: {
      ...COFFEE_ST_FITZ_CONFIG.reservation,
      modalTitle: `Contacto rapido ${seed.name}`,
      modalDescription: 'Completa el formulario y genera un mensaje listo para continuar por WhatsApp.',
      messageTemplate: `Hola ${seed.name}. Quisiera informacion sobre menu, visita o reservacion para {{guests}} personas el {{date}} a las {{time}}. Mi nombre es {{name}}. Notas: {{notes}}`,
      whatsappNumber,
    },
    whatsapp: {
      number: whatsappNumber,
      defaultMessage: `Hola ${seed.name}, quisiera informacion sobre menu, ubicacion u horario.`,
      floatingButton: true,
      ariaLabel: `Contactar a ${seed.name} por WhatsApp`,
    },
    location: {
      address: seed.zone,
      city: 'Querétaro',
      state: 'Querétaro',
      zip: '76000',
      country: 'México',
      googleMapsUrl: qroMapsUrl,
      mapAriaLabel: `Mapa de ubicacion de ${seed.name} en Querétaro`,
      mapImageAlt: `Mapa referencial de ${seed.name} en Querétaro`,
      openMapsLabel: 'Abrir ubicacion',
      hoursTitle: 'Horario referencial',
      hours: defaultHours,
      phone: '+52 442 000 0000',
      email: `contacto@${seed.id}.mx`,
    },
    social: {
      instagram: seed.instagram,
    },
  };
}
