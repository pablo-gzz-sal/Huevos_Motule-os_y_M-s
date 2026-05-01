import { BusinessConfig } from '../business.config';
import { DEFAULT_RESTAURANT_PRESET } from '../presets/default-restaurant.preset';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Huevos%20Motule%C3%B1os%20y%20M%C3%A1s%20Calle%2041%20375%20Francisco%20de%20Montejo%20II%20M%C3%A9rida';
const huevosImage =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Huevos%20motule%C3%B1os%20en%20Puebla.jpg?width=1800';
const huevosPlateImage =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Huevos%20Motul%20M%C3%A9xico.jpg?width=1400';

export const HUEVOS_MOTULENOS_CONFIG: BusinessConfig = {
  ...(DEFAULT_RESTAURANT_PRESET as BusinessConfig),
  id: 'huevos-motulenos-y-mas-merida',
  name: 'Huevos Motuleños y Más',
  tagline: 'Historia, tradición y sabor en cada bocado',
  category: 'restaurant',
  concept:
    'Cocina yucateca familiar en Francisco de Montejo, famosa por sus huevos motuleños, ingredientes regionales y desayunos generosos para sentirse en casa.',
  identity: {
    id: 'huevos-motulenos-y-mas-merida',
    name: 'Huevos Motuleños y Más',
    tagline: 'Historia, tradición y sabor en cada bocado',
    category: 'restaurant',
    concept:
      'Un restaurante yucateco de desayuno, brunch y comida regional donde el plato de Motul se vuelve experiencia completa.',
  },
  brand: {
    primaryColor: 'oklch(0.48 0.18 31)',
    accentColor: 'oklch(0.79 0.13 88)',
    bgBase: 'oklch(0.985 0.018 82)',
    fontDisplay: 'Playfair Display SC',
    fontBody: 'Karla',
    darkMode: false,
  },
  theme: {
    mode: 'light',
    primary: 'oklch(0.48 0.18 31)',
    primaryHover: 'oklch(0.41 0.17 31)',
    accent: 'oklch(0.79 0.13 88)',
    cta: 'oklch(0.58 0.16 55)',
    background: 'oklch(0.985 0.018 82)',
    surface: 'oklch(0.998 0.008 86)',
    surfaceAlt: 'oklch(0.95 0.035 84)',
    border: 'oklch(0.82 0.035 72)',
    text: 'oklch(0.24 0.055 42)',
    textMuted: 'oklch(0.43 0.045 48)',
    textInverse: 'oklch(0.99 0.008 86)',
    fontDisplay: 'Playfair Display SC',
    fontBody: 'Karla',
    radius: 'soft',
    shadow: 'medium',
    motionIntensity: 'standard',
  },
  sections: [
    { id: 'hero', enabled: true, variant: 'immersive' },
    { id: 'concept', enabled: true, variant: 'editorial' },
    { id: 'menu-highlights', enabled: true, variant: 'default' },
    { id: 'promotions', enabled: true, variant: 'compact' },
    { id: 'gallery', enabled: true, variant: 'editorial' },
    { id: 'testimonials', enabled: true, variant: 'compact' },
    { id: 'branches', enabled: false },
    { id: 'location', enabled: true, variant: 'default' },
  ],
  seo: {
    title: 'Huevos Motuleños y Más Mérida - Cocina yucateca en Francisco de Montejo',
    description:
      'Huevos Motuleños y Más en Mérida: desayunos, brunch, bebidas y cocina yucateca con la especialidad de la casa, huevos de patio, salsa motuleña, plátano frito y queso de bola.',
    keywords: [
      'huevos motuleños mérida',
      'huevos motuleños y más',
      'desayunos mérida',
      'comida yucateca mérida',
      'francisco de montejo restaurantes',
    ],
    ogImage: '/assets/og-image.jpg',
    locale: 'es_MX',
    schemaType: 'Restaurant',
    googleMapsEmbed:
      'https://www.google.com/maps?q=Huevos%20Motule%C3%B1os%20y%20M%C3%A1s%20Calle%2041%20375%20M%C3%A9rida&output=embed',
  },
  hero: {
    headline: 'Los originales\nsaben a Motul',
    subheadline:
      'Huevos de patio sobre tostadas crujientes, frijol, salsa motuleña, plátano frito y queso de bola. Un desayuno yucateco con alma familiar en Mérida.',
    ctaLabel: 'Ver especialidades',
    ctaSecondaryLabel: 'Cómo llegar',
    locationLabel: 'Francisco de Montejo II · Mérida',
    scrollCueLabel: 'Probar con la vista',
    backgroundImage: huevosImage,
    overlayOpacity: 0.3,
  },
  cta: {
    reservationLabel: 'Reservar por WhatsApp',
    whatsappLabel: 'Escribir a WhatsApp',
    stickyLabel: 'Reservar mesa',
  },
  navigation: {
    homeLabel: 'Inicio',
    menuLabel: 'Menú',
    aboutLabel: 'Tradición',
    contactLabel: 'Visítanos',
  },
  footer: {
    copyrightLabel: 'Huevos Motuleños y Más - Mérida, Yucatán',
    navigationHeading: 'Explora',
    hoursHeading: 'Horario',
    contactHeading: 'Sucursal',
  },
  sectionCopy: {
    images: {
      heroBackground: huevosImage,
      conceptImage: huevosPlateImage,
      conceptImageAlt:
        'Mesa de desayuno yucateco con tortillas, huevos, salsas y bebidas frescas',
      locationMapImage:
        'https://images.unsplash.com/photo-1585466097824-4819eec33fe7?w=1000&auto=format&fit=crop&q=85',
      menuPageHeroImage:
        'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1800&auto=format&fit=crop&q=88',
      menuItemFallbackImage: huevosImage,
      menuItemImages: {
        hm1: huevosImage,
        hm2: 'https://images.unsplash.com/photo-1604467707321-70d5ac45adda?w=700&auto=format&fit=crop&q=82',
        hm3: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be8?w=700&auto=format&fit=crop&q=82',
        hm4: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=700&auto=format&fit=crop&q=82',
        hm5: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=700&auto=format&fit=crop&q=82',
        hm6: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=700&auto=format&fit=crop&q=82',
        hm7: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700&auto=format&fit=crop&q=82',
        hm8: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=700&auto=format&fit=crop&q=82',
        hm9: 'https://images.unsplash.com/photo-1547496502-affa22d38842?w=700&auto=format&fit=crop&q=82',
        hm10: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=700&auto=format&fit=crop&q=82',
        hm11: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=700&auto=format&fit=crop&q=82',
        hm12: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=700&auto=format&fit=crop&q=82',
      },
    },
    concept: {
      eyebrow: 'De Motul a Mérida',
      heading: 'Una mesa yucateca que se reconoce desde la primera salsa',
      lead:
        'La casa celebra el plato que hizo famoso a Motul: huevos de patio, frijol, tostada, salsa roja, jamón, chícharos, plátano frito y queso de bola en equilibrio generoso.',
      body:
        'La experiencia se siente familiar y cuidada: porciones abundantes, servicio cálido, bebidas frescas y una carta regional pensada para desayunar, brunchear o volver por antojo yucateco.',
      foundedLabel: 'Especialidad de la casa',
    },
    menuHighlights: {
      eyebrow: 'Carta yucateca',
      heading: 'El desayuno que vale la vuelta',
      subheading:
        'Especialidades regionales, entradas de maíz y queso de bola, bebidas frescas y platos servidos con la calma de una mañana en Mérida.',
      fullMenuLabel: 'Explorar el menú',
    },
    promotions: {
      eyebrow: 'Momentos de la casa',
      heading: 'Razones sencillas para volver esta semana',
      validUntilPrefix: 'Disponible hasta',
    },
    gallery: {
      eyebrow: 'Antojo visual',
      heading: 'Color, salsa y mesa puesta',
      filters: [
        { id: 'all', label: 'Todo' },
        { id: 'food', label: 'Platillos' },
        { id: 'drinks', label: 'Bebidas' },
        { id: 'interior', label: 'Ambiente' },
      ],
    },
    testimonials: {
      eyebrow: 'Confianza local',
      heading: 'La gente vuelve por sabor y atención',
      subheading:
        'Opiniones públicas destacan sabores auténticos, porciones generosas, ambiente cómodo y servicio atento.',
      proofItems: [
        { value: '4.9', label: 'TripAdvisor' },
        { value: '#4', label: 'Restaurantes en Mérida' },
        { value: '8-4', label: 'Todos los días' },
      ],
    },
    location: {
      eyebrow: 'Visítanos',
      heading: 'En Francisco de Montejo II',
    },
    menuPage: {
      eyebrow: 'Cocina regional',
      heading: 'Menú Huevos Motuleños y Más',
      lead:
        'Una carta de desayuno, brunch y comida yucateca con la especialidad de la casa al centro.',
      finalHeading: '¿Listo para unos motuleños?',
      finalDescription:
        'Reserva por WhatsApp, revisa el horario o abre el mapa para llegar directo a la sucursal.',
    },
    contactPage: {
      eyebrow: 'Contacto rápido',
      heading: 'Reserva, pregunta o llega directo',
      whatsappTitle: 'WhatsApp / teléfono',
      reservationTitle: 'Reservar mesa',
      reservationDescription: 'Genera un mensaje listo para continuar por WhatsApp.',
      emailTitle: 'Correo',
    },
  },
  menuCategories: [
    { id: 'especialidades', name: 'Especialidades', description: 'Los platos que cuentan la historia de la casa' },
    { id: 'entradas', name: 'Entradas', description: 'Maíz, queso de bola, chaya y antojos regionales' },
    { id: 'yucatecos', name: 'Yucatecos', description: 'Clásicos para seguir explorando Yucatán' },
    { id: 'bebidas', name: 'Bebidas', description: 'Frescas, dulces y perfectas para el calor' },
  ],
  menuItems: [
    {
      id: 'hm1',
      categoryId: 'especialidades',
      name: 'Huevos Motuleños',
      description:
        'Huevos de patio sobre tostadas crujientes con frijol, salsa motuleña, plátano frito, jamón ahumado, tocino y queso de bola.',
      price: '$195',
      tag: 'signature',
      featured: true,
    },
    {
      id: 'hm2',
      categoryId: 'especialidades',
      name: 'Huevos Encamisados',
      description:
        'Tortillas de maíz hechas a mano rellenas con huevos de patio, chiltomate ahumado y frijol colado.',
      price: '$155',
      tag: 'popular',
      featured: true,
    },
    {
      id: 'hm3',
      categoryId: 'entradas',
      name: 'Empanadas de chaya y queso de bola',
      description:
        'Masa nixtamalizada, chaya, queso de bola, salsa de tomate y cebolla morada curtida.',
      price: '$165',
      featured: true,
    },
    {
      id: 'hm4',
      categoryId: 'entradas',
      name: 'Frijol con queso de bola',
      description: 'Frijol colado servido con queso de bola y totopos crujientes de maíz.',
      price: '$145',
    },
    {
      id: 'hm5',
      categoryId: 'entradas',
      name: 'Longaniza asada de Temozón',
      description:
        'Longaniza condimentada y asada con chiltomate, frijol colado, cebolla asada y naranja agria.',
      price: '$155',
      featured: true,
    },
    {
      id: 'hm6',
      categoryId: 'entradas',
      name: 'Molletes con longaniza',
      description:
        'Pan francés horneado a la leña con frijol colado, gouda gratinado, longaniza y pico de gallo.',
      price: '$185',
    },
    {
      id: 'hm7',
      categoryId: 'yucatecos',
      name: 'Papadzules',
      description: 'Tortillas bañadas en salsa de pepita, huevo y tomate, servidas al estilo regional.',
      price: '$155',
      tag: 'popular',
      featured: true,
    },
    {
      id: 'hm8',
      categoryId: 'yucatecos',
      name: 'Queso relleno',
      description: 'Receta yucateca profunda, cremosa y festiva para comer con calma.',
      price: '$210',
    },
    {
      id: 'hm9',
      categoryId: 'yucatecos',
      name: 'Burrito de poc chuc',
      description: 'Cerdo yucateco, cítricos y guarniciones frescas en formato abundante.',
      price: '$175',
    },
    {
      id: 'hm10',
      categoryId: 'bebidas',
      name: 'Chaya con limón',
      description: 'Bebida fresca, verde y yucateca para acompañar la salsa motuleña.',
      price: '$75',
      tag: 'signature',
      featured: true,
    },
    {
      id: 'hm11',
      categoryId: 'bebidas',
      name: 'Limonada de fresa',
      description: 'Refrescante, dulce y ácida, favorita para una mesa familiar.',
      price: '$85',
    },
    {
      id: 'hm12',
      categoryId: 'bebidas',
      name: 'Atole de mazapán',
      description: 'Bebida cálida y dulce con memoria de desayuno tradicional.',
      price: '$80',
      featured: true,
    },
  ],
  promotions: [
    {
      id: 'p1',
      title: 'La especialidad de la casa',
      description:
        'Si es tu primera visita, empieza por los Huevos Motuleños: el plato completo que presenta la identidad del restaurante.',
      badge: 'Imperdible',
      ctaLabel: 'Reservar',
      ctaAction: 'reservation',
    },
    {
      id: 'p2',
      title: 'Mesa familiar de fin de semana',
      description:
        'Carta amplia, porciones abundantes y bebidas frescas para desayunar sin prisa en Mérida.',
      badge: 'Brunch',
      ctaLabel: 'Escribir',
      ctaAction: 'whatsapp',
    },
    {
      id: 'p3',
      title: 'Antojos regionales',
      description:
        'Empanadas de chaya, queso de bola, longaniza de Temozón y papadzules para probar más que huevos.',
      badge: 'Yucatán',
      ctaLabel: 'Ver menú',
      ctaAction: 'link',
      ctaValue: '/menu',
    },
  ],
  gallery: [
    {
      id: 'g1',
      src: huevosImage,
      alt: 'Plato de desayuno con huevos servidos sobre mesa cálida',
      caption: 'Huevos, salsa y mañana completa',
      category: 'food',
    },
    {
      id: 'g2',
      src: 'https://images.unsplash.com/photo-1604467707321-70d5ac45adda?w=1000&auto=format&fit=crop&q=82',
      alt: 'Tortillas y guisos mexicanos en mesa',
      caption: 'Maíz y cocina regional',
      category: 'food',
    },
    {
      id: 'g3',
      src: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=1000&auto=format&fit=crop&q=82',
      alt: 'Bebida fresca de fruta en vaso',
      caption: 'Bebidas para el calor de Mérida',
      category: 'drinks',
    },
    {
      id: 'g4',
      src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1000&auto=format&fit=crop&q=82',
      alt: 'Mesa de restaurante con platos coloridos para compartir',
      caption: 'Mesa familiar',
      category: 'interior',
    },
    {
      id: 'g5',
      src: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1000&auto=format&fit=crop&q=82',
      alt: 'Plato de pasta y salsa en mesa de restaurante',
      caption: 'Antojo abundante',
      category: 'food',
    },
    {
      id: 'g6',
      src: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=1000&auto=format&fit=crop&q=82',
      alt: 'Bebida cremosa en vaso con textura dulce',
      caption: 'Dulce para cerrar',
      category: 'drinks',
    },
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Javsy L.',
      source: 'TripAdvisor',
      rating: 5,
      text: 'Los huevos motuleños siguen deliciosos, las bebidas acompañan perfecto y el trato se siente amable desde que llegas.',
      date: '2026',
    },
    {
      id: 't2',
      name: 'Claudia S.',
      source: 'TripAdvisor',
      rating: 5,
      text: 'Una experiencia muy recomendable: alimentos bastos, servicio atento y una mesa que se disfruta con amigos.',
      date: '2026',
    },
    {
      id: 't3',
      name: 'Visitante de Mérida',
      source: 'TripAdvisor',
      rating: 5,
      text: 'Sabor tradicional, porciones excelentes y precios justos para volver por cocina yucateca.',
      date: '2025',
    },
  ],
  faqs: [
    {
      question: '¿Cuál es la especialidad?',
      answer:
        'Los Huevos Motuleños: huevos de patio sobre tostadas con frijol, salsa motuleña, plátano frito, jamón, tocino y queso de bola.',
    },
    {
      question: '¿Cómo puedo reservar o preguntar?',
      answer: 'El sitio abre WhatsApp con un mensaje listo para confirmar mesa, horario o dudas del menú.',
    },
  ],
  reservation: {
    enabled: true,
    mode: 'mock',
    maxGuests: 10,
    minAdvanceHours: 1,
    timeSlots: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '15:00'],
    guestOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    modalTitle: 'Reservar en Huevos Motuleños y Más',
    modalDescription:
      'Completa los datos y genera un mensaje listo para enviar por WhatsApp a la sucursal.',
    successTitle: 'Mensaje listo',
    successDescription: 'Tu solicitud quedó preparada para continuar por WhatsApp.',
    previewLabel: 'Vista previa del mensaje',
    openWhatsappLabel: 'Abrir WhatsApp',
    messageTemplate:
      'Hola Huevos Motuleños y Más. Quisiera reservar para {{guests}} personas el {{date}} a las {{time}}. Mi nombre es {{name}}. Teléfono: {{phone}}. Notas: {{notes}}',
    whatsappNumber: '529995026319',
  },
  whatsapp: {
    number: '529995026319',
    defaultMessage:
      'Hola Huevos Motuleños y Más, quisiera información para reservar o visitar la sucursal de Francisco de Montejo.',
    floatingButton: true,
    ariaLabel: 'Contactar a Huevos Motuleños y Más por WhatsApp',
  },
  location: {
    address: 'Calle 41, 375 entre 54 y 56, Col. Francisco de Montejo II',
    city: 'Mérida',
    state: 'Yucatán',
    zip: '97203',
    country: 'México',
    googleMapsUrl: mapsUrl,
    embedMapSrc:
      'https://www.google.com/maps?q=Huevos%20Motule%C3%B1os%20y%20M%C3%A1s%20Calle%2041%20375%20M%C3%A9rida&output=embed',
    mapAriaLabel: 'Abrir mapa de Huevos Motuleños y Más en Mérida',
    mapImageAlt: 'Mapa referencial de la sucursal Huevos Motuleños y Más en Mérida',
    openMapsLabel: 'Abrir mapa',
    hoursTitle: 'Horario publicado',
    hours: [
      { day: 'Domingo', hours: '8:00 am - 4:00 pm' },
      { day: 'Lunes', hours: '8:00 am - 4:00 pm' },
      { day: 'Martes', hours: '8:00 am - 4:00 pm' },
      { day: 'Miércoles', hours: '8:00 am - 4:00 pm' },
      { day: 'Jueves', hours: '8:00 am - 4:00 pm' },
      { day: 'Viernes', hours: '8:00 am - 4:00 pm' },
      { day: 'Sábado', hours: '8:00 am - 4:00 pm' },
    ],
    phone: '+52 999 502 6319',
    email: 'contacto@huevosmotulenosymas.com',
  },
  social: {
    instagram: 'https://www.instagram.com/huevosmotulenosfm/?hl=en',
    tripadvisor:
      'https://www.tripadvisor.es/Restaurant_Review-g150811-d12064151-Reviews-Huevos_Motulenos_y_Mas_Francisco_de_Montejo-Merida_Yucatan_Peninsula.html',
  },
};
