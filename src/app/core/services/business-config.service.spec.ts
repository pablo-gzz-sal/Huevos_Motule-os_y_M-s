import { TestBed } from '@angular/core/testing';
import { ACTIVE_BUSINESS_CONFIG } from '../config/active-business-config.provider';
import { HUEVOS_MOTULENOS_CONFIG } from '../config/clients/huevos-motulenos.config';
import { BusinessConfigService } from './business-config.service';

describe('BusinessConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BusinessConfigService,
        { provide: ACTIVE_BUSINESS_CONFIG, useValue: HUEVOS_MOTULENOS_CONFIG },
      ],
    });
  });

  it('loads the build-time selected config', () => {
    const service = TestBed.inject(BusinessConfigService);

    expect(service.config().id).toBe('huevos-motulenos-y-mas-merida');
    expect(service.config().name).toBe('Huevos Motuleños y Más');
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

    expect(service.whatsappUrl('Hola')).toContain('https://wa.me/');
  });
});
