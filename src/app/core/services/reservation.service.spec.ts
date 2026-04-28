import { TestBed } from '@angular/core/testing';
import { ACTIVE_BUSINESS_CONFIG } from '../config/active-business-config.provider';
import { COFFEE_ST_FITZ_CONFIG } from '../config/clients/coffee-st-fitz.config';
import { ReservationService } from './reservation.service';

describe('ReservationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReservationService,
        { provide: ACTIVE_BUSINESS_CONFIG, useValue: COFFEE_ST_FITZ_CONFIG },
      ],
    });
  });

  it('generates a message from the configured template', () => {
    const service = TestBed.inject(ReservationService);
    const message = service.buildWhatsappMessage(
      { name: 'Ana', phone: '999', date: '2026-05-01', time: '09:00', guests: 2, notes: 'Terraza' },
      COFFEE_ST_FITZ_CONFIG.reservation.messageTemplate,
    );

    expect(message).toContain('Ana');
    expect(message).toContain('2026-05-01');
    expect(message).toContain('2 personas');
    expect(message).toContain('Terraza');
  });

  it('keeps mock reservations in-app and exposes the preview', () => {
    const service = TestBed.inject(ReservationService);

    service.submit(
      { name: 'Ana', phone: '999', date: '2026-05-01', time: '09:00', guests: 2, notes: '' },
      COFFEE_ST_FITZ_CONFIG.reservation,
    );

    expect(service.state()).toBe('success');
    expect(service.preview()).toContain('Ana');
  });
});
