import { DOCUMENT } from '@angular/common';
import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { BusinessConfig } from '../config/business.config';
import { ACTIVE_BUSINESS_CONFIG } from '../config/active-business-config.provider';

@Injectable({ providedIn: 'root' })
export class BusinessConfigService {
  private readonly initialConfig = inject(ACTIVE_BUSINESS_CONFIG);
  private readonly document = inject(DOCUMENT);
  private readonly _config = signal<BusinessConfig>(this.initialConfig);

  readonly config = this._config.asReadonly();

  // Computed slices for granular component reads
  readonly hero         = computed(() => this._config().hero);
  readonly cta          = computed(() => this._config().cta);
  readonly navigation   = computed(() => this._config().navigation);
  readonly menu         = computed(() => this._config().menuItems);
  readonly categories   = computed(() => this._config().menuCategories);
  readonly promotions   = computed(() => this._config().promotions);
  readonly gallery      = computed(() => this._config().gallery);
  readonly testimonials = computed(() => this._config().testimonials);
  readonly location     = computed(() => this._config().location);
  readonly social       = computed(() => this._config().social);
  readonly reservation  = computed(() => this._config().reservation);
  readonly whatsapp     = computed(() => this._config().whatsapp);
  readonly sections     = computed(() => this._config().sections ?? [
    { id: 'hero', enabled: true },
    { id: 'concept', enabled: true },
    { id: 'menu-highlights', enabled: true },
    { id: 'promotions', enabled: true },
    { id: 'gallery', enabled: true },
    { id: 'testimonials', enabled: true },
    { id: 'branches', enabled: !!this._config().branches?.enabled },
    { id: 'location', enabled: true },
  ]);

  featuredItems = computed(() => this._config().menuItems.filter(i => i.featured));
  itemsByCategory = (categoryId: string) =>
    computed(() => this._config().menuItems.filter(i => i.categoryId === categoryId));

  constructor() {
    effect(() => this.applyTheme(this._config()));
  }

  /** Hot-swap config for different clients (future multi-tenant use) */
  loadConfig(config: BusinessConfig): void {
    this._config.set(config);
  }

  isSectionEnabled(id: string): boolean {
    return this.sections().some(section => section.id === id && section.enabled);
  }

  whatsappUrl(message = this.whatsapp().defaultMessage, number = this.whatsapp().number): string {
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  private applyTheme(config: BusinessConfig): void {
    const theme = config.theme;
    const root = this.document.documentElement;
    root.dataset['theme'] = theme?.mode ?? (config.brand.darkMode ? 'dark' : 'light');

    const tokens: Record<string, string | undefined> = {
      '--color-primary': theme?.primary ?? config.brand.primaryColor,
      '--color-primary-hover': theme?.primaryHover,
      '--color-accent': theme?.accent ?? config.brand.accentColor,
      '--color-cta': theme?.cta ?? config.brand.primaryColor,
      '--color-bg': theme?.background ?? config.brand.bgBase,
      '--color-surface': theme?.surface,
      '--color-surface-2': theme?.surfaceAlt,
      '--color-border': theme?.border,
      '--color-divider': theme?.border,
      '--color-text': theme?.text,
      '--color-text-muted': theme?.textMuted,
      '--color-text-inverse': theme?.textInverse,
      '--font-display': theme?.fontDisplay ? `'${theme.fontDisplay}', Georgia, serif` : `'${config.brand.fontDisplay}', Georgia, serif`,
      '--font-body': theme?.fontBody ? `'${theme.fontBody}', Inter, sans-serif` : `'${config.brand.fontBody}', Inter, sans-serif`,
    };

    Object.entries(tokens).forEach(([key, value]) => {
      if (value) root.style.setProperty(key, value);
    });
  }
}
