import { BusinessConfig } from '../business.config';
import { DEFAULT_RESTAURANT_PRESET } from '../presets/default-restaurant.preset';

export const HUEVOS_MOTULENOS_CONFIG: BusinessConfig = {
  ...(DEFAULT_RESTAURANT_PRESET as BusinessConfig),

  id: 'huevos-motulenos-merida',
  name: 'Huevos Motuleños y Más',
  tagline: 'El sabor auténtico de Yucatán en cada plato.',
  category: 'restaurant',
  concept: 'Restaurante yucateco especializado en huevos motuleños y platillos típicos regionales. Tres sucursales en Mérida con más de una década sirviendo los sabores auténticos de la cocina local: papadzules, panuchos, sopa de lima, bistec de vuelta, chaya con limón y mucho más.',

  brand: {
    primaryColor: '#C41E3A',
    accentColor: '#F5F0C8',
    bgBase: '#FDF8F0',
    fontDisplay: 'Playfair Display',
    fontBody: 'DM Sans',
    darkMode: false,
  },

  seo: {
    title: 'Huevos Motuleños y Más — Cocina Yucateca en Mérida',
    description: 'Los mejores huevos motuleños de Mérida. Cocina yucateca auténtica: papadzules, panuchos, sopa de lima, bistec de vuelta y más. Tres sucursales en Fco. de Montejo, Periférico Chichí y Santa Ana.',
    keywords: ['huevos motuleños Mérida', 'cocina yucateca Mérida', 'desayunos yucatecos', 'papadzules Mérida', 'restaurant típico Mérida', 'huevos motuleños y más'],
    ogImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/0b/97/bc/si-no-sabes-que-almorzar.jpg?w=1200&h=600&s=1',
    locale: 'es_MX',
    schemaType: 'Restaurant',
    googleMapsEmbed: '',
  },

  hero: {
    headline: 'El sabor auténtico\nde Yucatán',
    subheadline: 'Huevos motuleños, papadzules, panuchos, sopa de lima y toda la cocina típica yucateca. Tres sucursales en Mérida para que siempre tengas uno cerca.',
    ctaLabel: 'Ver menú',
    ctaSecondaryLabel: 'Nuestras sucursales',
    locationLabel: '3 sucursales en Mérida · Lun–Dom desde las 7:30am',
    scrollCueLabel: 'Descubre más',
    backgroundImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/0b/97/bc/si-no-sabes-que-almorzar.jpg?w=1600&h=900&s=1',
    overlayOpacity: 0.52,
  },

  cta: {
    reservationLabel: 'Reservar mesa',
    whatsappLabel: 'WhatsApp',
    stickyLabel: 'Reservar',
  },

  navigation: {
    homeLabel: 'Inicio',
    menuLabel: 'Menú',
    aboutLabel: 'Nosotros',
    contactLabel: 'Contacto',
  },

  footer: {
    copyrightLabel: 'Todos los derechos reservados',
    navigationHeading: 'Navegación',
    hoursHeading: 'Horarios',
    contactHeading: 'Contacto',
  },

  sectionCopy: {
    images: {
      heroBackground: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/0b/97/bc/si-no-sabes-que-almorzar.jpg?w=1600&h=900&s=1',
      conceptImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=80',
      conceptImageAlt: 'Platillos típicos yucatecos en Huevos Motuleños y Más',
      locationMapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&auto=format&fit=crop&q=80',
      menuPageHeroImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/0b/97/bc/si-no-sabes-que-almorzar.jpg?w=1400&h=700&s=1',
      menuItemImages: {},
      menuItemFallbackImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
    },
    concept: {
      eyebrow: 'Nuestra historia',
      heading: 'Cocina yucateca de verdad, sin atajos',
      lead: 'Huevos Motuleños y Más nació con una misión simple: servir la cocina típica de Yucatán con el sabor, los ingredientes y la calidez que merece.',
      body: 'Desde nuestros huevos motuleños con frijol, plátano, jamón, chícharo y salsa de jitomate, hasta papadzules, panuchos, sopa de lima y bistec de vuelta. Cada platillo respeta la receta regional. Tres sucursales en Mérida para que siempre tengas el auténtico sabor yucateco cerca de ti.',
      foundedLabel: 'Mérida, Yucatán',
    },
    menuHighlights: {
      eyebrow: 'Lo más pedido',
      heading: 'Los favoritos de Mérida',
      subheading: 'Platillos típicos yucatecos preparados con ingredientes frescos y recetas auténticas de la región.',
      fullMenuLabel: 'Ver menú completo',
    },
    promotions: {
      eyebrow: 'Novedades y promociones',
      heading: 'Razones para visitarnos esta semana',
      validUntilPrefix: 'Válido hasta',
    },
    gallery: {
      eyebrow: 'Galería',
      heading: 'La cocina yucateca en imágenes',
      filters: [
        { id: 'all', label: 'Todo' },
        { id: 'food', label: 'Platillos' },
        { id: 'drinks', label: 'Bebidas' },
        { id: 'interior', label: 'Ambiente' },
        { id: 'events', label: 'Momentos' },
      ],
    },
    testimonials: {
      eyebrow: 'Lo que dicen',
      heading: 'El favorito de Mérida por años',
      subheading: 'Clientes de Mérida y visitantes que vuelven por los huevos motuleños auténticos.',
      proofItems: [
        { value: '3', label: 'Sucursales en Mérida' },
        { value: '7am', label: 'Abrimos todos los días' },
        { value: '4.5★', label: 'Calificación en TripAdvisor' },
      ],
    },
    location: {
      eyebrow: 'Encuéntranos',
      heading: 'Tres sucursales en Mérida',
    },
    menuPage: {
      eyebrow: 'Menú completo',
      heading: 'Cocina típica yucateca',
      lead: 'Huevos motuleños, papadzules, panuchos, sopa de lima, chaya con limón, limonada de fresa y mucho más.',
      finalHeading: '¿Listo para el mejor desayuno yucateco de tu día?',
      finalDescription: 'Visítanos en cualquiera de nuestras tres sucursales, de lunes a domingo desde las 7:30am.',
    },
    contactPage: {
      eyebrow: 'Contacto',
      heading: 'Estamos para atenderte',
      whatsappTitle: 'WhatsApp / Teléfono',
      reservationTitle: 'Reservar mesa',
      reservationDescription: 'Reserva tu mesa en la sucursal de tu preferencia',
      emailTitle: 'Correo',
    },
  },

  menuCategories: [
    { id: 'estrella', name: 'Nuestra Estrella', description: 'El platillo que nos define', emoji: '⭐' },
    { id: 'yucatecos', name: 'Clásicos Yucatecos', description: 'La cocina regional auténtica', emoji: '🍽️' },
    { id: 'desayunos', name: 'Desayunos', description: 'Para empezar el día con energía', emoji: '🍳' },
    { id: 'antojitos', name: 'Antojitos', description: 'Panuchos, salbutes y más', emoji: '🫔' },
    { id: 'bebidas', name: 'Bebidas', description: 'Jugos, aguas y bebidas naturales', emoji: '🥤' },
    { id: 'postres', name: 'Postres', description: 'El toque dulce final', emoji: '🍮' },
  ],

  menuItems: [
    { id: 'm1', categoryId: 'estrella', name: 'Huevos Motuleños', description: 'Tortilla frita, frijol, huevo estrellado, jamón, chícharo, plátano frito y salsa de jitomate. El clásico de Yucatán.', price: '$145', tag: 'signature', featured: true },
    { id: 'm2', categoryId: 'yucatecos', name: 'Papadzules', description: 'Tortillas enrolladas rellenas de huevo duro, bañadas en salsa de pepita y jitomate.', price: '$120', tag: 'popular', featured: true },
    { id: 'm3', categoryId: 'yucatecos', name: 'Sopa de Lima', description: 'Caldo de pollo con lima yucateca, tortilla frita y pollo deshebrado. Un clásico irresistible.', price: '$130', tag: 'popular', featured: true },
    { id: 'm4', categoryId: 'yucatecos', name: 'Parmesana Motuleña', description: 'Pollo empanizado con salsa de jitomate y queso gratinado al estilo de la casa.', price: '$175', tag: 'signature', featured: true },
    { id: 'm5', categoryId: 'desayunos', name: 'Bistec de Vuelta', description: 'Bistec a la plancha acompañado de frijoles, ensalada y tortillas recién hechas.', price: '$185', featured: true },
    { id: 'm6', categoryId: 'desayunos', name: 'Huevos al Gusto', description: 'Estrellados, revueltos o en cualquier forma con frijoles, queso y tortillas.', price: '$110' },
    { id: 'm7', categoryId: 'antojitos', name: 'Panuchos', description: 'Tortilla frita rellena de frijol con pavo, lechuga, tomate y cebolla morada encurtida.', price: '$35', tag: 'popular' },
    { id: 'm8', categoryId: 'antojitos', name: 'Salbutes', description: 'Tortilla esponjada con pavo, lechuga, tomate y cebolla. Ligeros y deliciosos.', price: '$30' },
    { id: 'm9', categoryId: 'bebidas', name: 'Limonada de Fresa', description: 'Limonada fresca con fresas naturales, la favorita de la casa.', price: '$65', tag: 'popular', featured: true },
    { id: 'm10', categoryId: 'bebidas', name: 'Chaya con Limón', description: 'Jugo natural de chaya yucateca con limón. Refrescante y nutritivo.', price: '$55', tag: 'signature' },
    { id: 'm11', categoryId: 'bebidas', name: 'Jugo Natural', description: 'Frutas de temporada recién exprimidas.', price: '$60' },
    { id: 'm12', categoryId: 'postres', name: 'Crème Brûlée', description: 'Cremoso postre francés con toque de la casa, caramelizado al momento.', price: '$85', tag: 'new' },
  ],

  promotions: [
    { id: 'p1', title: 'Los huevos motuleños más auténticos de Mérida', description: 'El platillo que nos define: tortilla, frijol, huevo, jamón, chícharo, plátano y salsa de jitomate. La receta original de Motul en cada visita.', badge: 'Nuestra especialidad', ctaLabel: 'Ver menú completo', ctaAction: 'link', ctaValue: '/menu' },
    { id: 'p2', title: 'Disponibles en Uber Eats', description: '¿No puedes salir? Pide tus platillos yucatecos favoritos desde casa. Entregamos con el mismo sabor de siempre.', badge: 'Pide en línea', ctaLabel: 'Ordenar ahora', ctaAction: 'link', ctaValue: 'https://www.ubereats.com/mx/store/huevos-motulenos-y-mas/mkylNO6wRQu1F-R1ma2DMA' },
    { id: 'p3', title: 'Tres sucursales para elegir', description: 'Fco. de Montejo, Periférico Chichí Suárez y Santa Ana. Siempre hay una Huevos Motuleños y Más cerca de ti en Mérida.', badge: 'Múltiples ubicaciones', ctaLabel: 'Ver sucursales', ctaAction: 'link', ctaValue: '/#sucursales' },
  ],

  gallery: [
    { id: 'g1', src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/0b/97/bc/si-no-sabes-que-almorzar.jpg?w=800&h=600&s=1', alt: 'Huevos motuleños auténticos', caption: 'La especialidad de la casa', category: 'food' },
    { id: 'g2', src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80', alt: 'Platillos yucatecos frescos', caption: 'Sabor regional', category: 'food' },
    { id: 'g3', src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=80', alt: 'Sopa de lima yucateca', caption: 'Sopa de lima', category: 'food' },
    { id: 'g4', src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop&q=80', alt: 'Interior del restaurante', caption: 'Ambiente familiar', category: 'interior' },
    { id: 'g5', src: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&auto=format&fit=crop&q=80', alt: 'Limonada de fresa fresca', caption: 'Limonada de fresa', category: 'drinks' },
    { id: 'g6', src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=80', alt: 'Mesa completa con desayuno yucateco', caption: 'Mesa completa', category: 'food' },
  ],

  testimonials: [
    { id: 't1', name: 'Reseña TripAdvisor', source: 'TripAdvisor', rating: 5, text: 'Los mejores huevos motuleños de Mérida, sin lugar a dudas. El sabor es exactamente como debe ser, con el plátano frito y el chícharo bien equilibrados. Volveré pronto.', date: '2024' },
    { id: 't2', name: 'Reseña TripAdvisor', source: 'TripAdvisor', rating: 5, text: 'Si no sabes qué almorzar, este es tu lugar. La parmesana motuleña es una revelación y la sopa de lima, perfecta. Ambiente familiar y servicio rápido.', date: '2024' },
    { id: 't3', name: 'Visitante frecuente', source: 'Google', rating: 5, text: 'Mi lugar favorito para el desayuno en Mérida. La chaya con limón y los papadzules son increíbles. Ya es tradición familiar los domingos.', date: '2025' },
  ],

  faqs: [
    { question: '¿Cuántas sucursales tienen?', answer: 'Contamos con tres sucursales en Mérida: Francisco de Montejo, Periférico Chichí Suárez y Santa Ana.' },
    { question: '¿Tienen servicio a domicilio?', answer: 'Sí, puedes pedir a través de Uber Eats y recibir tus platillos favoritos en casa.' },
    { question: '¿Cuál es su horario?', answer: 'Abrimos todos los días de lunes a domingo desde las 7:30am. Consulta cada sucursal para el horario de cierre.' },
    { question: '¿Participan en Restaurant Week?', answer: 'Sí, somos participantes del Mérida Restaurant Week con menús especiales de temporada.' },
  ],

  reservation: {
    enabled: true,
    mode: 'mock',
    maxGuests: 20,
    minAdvanceHours: 1,
    modalTitle: 'Reservar mesa — Huevos Motuleños y Más',
    modalDescription: 'Elige tu sucursal preferida y te confirmamos tu mesa por WhatsApp.',
    successTitle: '¡Solicitud recibida!',
    successDescription: 'Continúa por WhatsApp para confirmar tu reservación en la sucursal elegida.',
    previewLabel: 'Tu mensaje:',
    openWhatsappLabel: 'Confirmar por WhatsApp',
    messageTemplate: 'Hola Huevos Motuleños y Más 👋 Quisiera reservar una mesa para *{{guests}} personas* el *{{date}}* a las *{{time}}*. Mi nombre es *{{name}}*.',
    whatsappNumber: '529999000000',
  },

  whatsapp: {
    number: '529999000000',
    defaultMessage: 'Hola Huevos Motuleños y Más, quisiera información sobre el menú y reservaciones.',
    floatingButton: true,
    ariaLabel: 'Contactar Huevos Motuleños y Más por WhatsApp',
  },

  location: {
    address: 'Fco. de Montejo, Mérida, Yucatán',
    city: 'Mérida',
    state: 'Yucatán',
    zip: '97203',
    country: 'México',
    googleMapsUrl: 'https://maps.google.com/?q=Huevos+Motulenos+y+Mas+Francisco+de+Montejo+Merida',
    embedMapSrc: '',
    mapAriaLabel: 'Mapa de sucursales de Huevos Motuleños y Más',
    mapImageAlt: 'Ubicación Huevos Motuleños y Más en Mérida, Yucatán',
    openMapsLabel: 'Abrir en Google Maps',
    hoursTitle: 'Horario',
    hours: [
      { day: 'Lunes – Domingo', hours: '7:30am – 3:00pm' },
    ],
    phone: '+52 999 XXX XXXX',
    email: 'contacto@huevosmotulenos.com',
  },

  social: {
    instagram: 'https://www.instagram.com/huevosmotulenosfm/',
    facebook: 'https://www.facebook.com/hmperifericochichi/',
  },

  branches: {
    enabled: true,
    eyebrow: 'Nuestras sucursales',
    heading: 'Siempre hay una cerca de ti',
    subheading: 'Tres restaurantes en Mérida con el mismo sabor auténtico yucateco de siempre.',
    branches: [
      {
        id: 'fco-montejo',
        name: 'Francisco de Montejo',
        address: 'Calle 20 No. 89-D x 25 y 15-A, Francisco de Montejo',
        neighborhood: 'Francisco de Montejo',
        city: 'Mérida, Yucatán',
        phone: '+52 999 XXX XXXX',
        hours: [
          { day: 'Lun – Dom', hours: '7:30am – 3:00pm' },
        ],
        googleMapsUrl: 'https://www.tripadvisor.com.mx/Restaurant_Review-g150811-d12064151-Reviews-Huevos_Motulenos_y_Mas_Francisco_de_Montejo-Merida_Yucatan_Peninsula.html',
        instagram: 'https://www.instagram.com/huevosmotulenosfm/',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop&q=80',
        tag: 'Sucursal principal',
      },
      {
        id: 'chichi',
        name: 'Periférico Chichí Suárez',
        address: 'Periférico Chichí Suárez, Mérida',
        neighborhood: 'Chichí Suárez',
        city: 'Mérida, Yucatán',
        phone: '+52 999 XXX XXXX',
        hours: [
          { day: 'Lun – Dom', hours: '7:30am – 3:00pm' },
        ],
        googleMapsUrl: 'https://www.tripadvisor.com.mx/Restaurant_Review-g150811-d19423551-Reviews-Huevos_Motulenos_Y_Mas_Chichi_Suarez-Merida_Yucatan_Peninsula.html',
        facebook: 'https://www.facebook.com/hmperifericochichi/',
        instagram: 'https://www.instagram.com/huevosmotulenoschichi/',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&auto=format&fit=crop&q=80',
        tag: 'Zona norte',
      },
      {
        id: 'santa-ana',
        name: 'Santa Ana',
        address: 'Col. Santa Ana, Mérida',
        neighborhood: 'Santa Ana',
        city: 'Mérida, Yucatán',
        phone: '+52 999 XXX XXXX',
        hours: [
          { day: 'Lun – Dom', hours: '7:30am – 3:00pm' },
        ],
        googleMapsUrl: 'https://maps.google.com/?q=Huevos+Motulenos+y+Mas+Santa+Ana+Merida',
        image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=700&auto=format&fit=crop&q=80',
        tag: 'Centro',
      },
    ],
  },

  uiCopy: {
    accessibility: {
      skipToContentLabel: 'Saltar al contenido',
      primaryNavLabel: 'Principal',
      dividerAriaLabel: 'Divisor',
    },
    mobileMenu: {
      triggerAriaLabel: 'Abrir menú móvil',
      dialogAriaLabel: 'Menú móvil',
      eyebrow: 'Navegación',
      closeAriaLabel: 'Cerrar menú',
    },
    reservationUi: {
      eyebrow: 'Reservar mesa',
      closeAriaLabel: 'Cerrar',
      fields: {
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre completo',
        phoneLabel: 'Teléfono',
        phonePlaceholder: '+52 999 000 0000',
        dateLabel: 'Fecha',
        timeLabel: 'Hora',
        guestsLabel: 'Número de personas',
        guestsSuffix: 'personas',
        notesLabel: 'Notas',
        notesPlaceholder: 'Sucursal preferida, celebración especial, alergias…',
      },
      actions: {
        cancelLabel: 'Cancelar',
        confirmLabel: 'Confirmar reserva',
        closeLabel: 'Cerrar',
      },
      successEyebrow: '¡Reserva recibida!',
    },
    menuPageUi: {
      categoryNavAriaLabel: 'Categorías del menú',
    },
  },
};
