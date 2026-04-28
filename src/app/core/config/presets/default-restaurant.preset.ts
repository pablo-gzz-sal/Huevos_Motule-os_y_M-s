import { BusinessConfig } from '../business.config';

export const DEFAULT_RESTAURANT_PRESET: Partial<BusinessConfig> = {
  category: 'restaurant',
  brand: {
    primaryColor: '#b0804e',
    accentColor: '#d2ab67',
    bgBase: '#f8f2eb',
    fontDisplay: 'Cormorant Garamond',
    fontBody: 'Inter',
    darkMode: false,
  },
  cta: {
    reservationLabel: 'Reservar',
    whatsappLabel: 'WhatsApp',
    stickyLabel: 'Reservar ahora',
  },
  navigation: {
    homeLabel: 'Inicio',
    menuLabel: 'Menu',
    aboutLabel: 'Nosotros',
    contactLabel: 'Contacto',
  },
  footer: {
    copyrightLabel: 'Todos los derechos reservados',
    navigationHeading: 'Navegacion',
    hoursHeading: 'Horarios',
    contactHeading: 'Contacto',
  },
  uiCopy: {
    accessibility: {
      skipToContentLabel: 'Saltar al contenido',
      primaryNavLabel: 'Principal',
      dividerAriaLabel: 'Divisor',
    },
    mobileMenu: {
      triggerAriaLabel: 'Abrir menu movil',
      dialogAriaLabel: 'Menu movil',
      eyebrow: 'Navegacion',
      closeAriaLabel: 'Cerrar menu',
    },
    reservationUi: {
      eyebrow: 'Contacto',
      closeAriaLabel: 'Cerrar modal',
      fields: {
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre',
        phoneLabel: 'Telefono',
        phonePlaceholder: '+52 999 000 0000',
        dateLabel: 'Fecha',
        timeLabel: 'Hora',
        guestsLabel: 'Numero de personas',
        guestsSuffix: 'personas',
        notesLabel: 'Notas especiales',
        notesPlaceholder: 'Alergias, celebraciones, area preferida...',
      },
      actions: {
        cancelLabel: 'Cancelar',
        confirmLabel: 'Confirmar',
        closeLabel: 'Cerrar',
      },
      successEyebrow: 'Listo para continuar',
    },
    menuPageUi: {
      categoryNavAriaLabel: 'Secciones del menu',
    },
  },
};
