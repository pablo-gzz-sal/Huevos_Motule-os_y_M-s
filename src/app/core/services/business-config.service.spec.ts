import { TestBed } from '@angular/core/testing';
import { ACTIVE_BUSINESS_CONFIG } from '../config/active-business-config.provider';
import { COFFEE_ST_FITZ_CONFIG } from '../config/clients/coffee-st-fitz.config';
import { BusinessConfigService } from './business-config.service';

describe('BusinessConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BusinessConfigService,
        { provide: ACTIVE_BUSINESS_CONFIG, useValue: COFFEE_ST_FITZ_CONFIG },
      ],
    });
  });

  it('loads the build-time selected config', () => {
    const service = TestBed.inject(BusinessConfigService);

    expect(service.config().id).toBe('coffee-st-fitz-merida');
    expect(service.config().name).toBe('Coffee St Fitz');
  });

  it('derives featured menu items from config', () => {
    const service = TestBed.inject(BusinessConfigService);

    expect(service.featuredItems().length).toBeGreaterThan(0);
    expect(service.featuredItems().every(item => item.featured)).toBeTrue();
  });

  it('uses homepage section flags from config', () => {
    const service = TestBed.inject(BusinessConfigService);

    expect(service.isSectionEnabled('hero')).toBeTrue();
    expect(service.isSectionEnabled('branches')).toBeFalse();
  });

  it('builds WhatsApp URLs from the active config', () => {
    const service = TestBed.inject(BusinessConfigService);

    expect(service.whatsappUrl('Hola')).toContain('https://wa.me/529991582029?text=Hola');
  });
});
