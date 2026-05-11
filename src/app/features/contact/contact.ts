import { Component, inject } from '@angular/core';
import { BusinessConfigService } from '../../core/services/business-config.service';
import { ReservationService } from '../../core/services/reservation.service';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [SocialLinksComponent],
  template: `
    <section class="section-pad contact-page">
      <div class="container contact-shell">
        <div class="contact-intro">
          <span class="eyebrow">{{ cfg.config().sectionCopy.contactPage.eyebrow }}</span>
          <h1 class="text-h1">{{ cfg.config().sectionCopy.contactPage.heading }}</h1>
          <p class="contact-lead">{{ cfg.config().sectionCopy.menuPage.finalDescription }}</p>
          <app-social-links [links]="cfg.social()" />
        </div>

        <div class="contact-grid">
          <a class="contact-card" [href]="cfg.whatsappUrl()" target="_blank" rel="noopener noreferrer">
            <p class="contact-card-title">{{ cfg.config().sectionCopy.contactPage.whatsappTitle }}</p>
            <p class="contact-card-desc">{{ cfg.config().location.phone }}</p>
          </a>

          <button class="contact-card" (click)="reservationSvc.open()">
            <p class="contact-card-title">{{ cfg.config().sectionCopy.contactPage.reservationTitle }}</p>
            <p class="contact-card-desc">{{ cfg.config().sectionCopy.contactPage.reservationDescription }}</p>
          </button>

          <a class="contact-card" [href]="cfg.config().location.googleMapsUrl" target="_blank" rel="noopener noreferrer">
            <p class="contact-card-title">{{ cfg.config().location.openMapsLabel }}</p>
            <p class="contact-card-desc">{{ cfg.config().location.address }}</p>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-page {
      background:
        linear-gradient(180deg, var(--color-bg), color-mix(in oklch, var(--color-surface), transparent 2%));
      box-shadow: 0 18px 60px rgba(31,24,16,.07);
    }
    .contact-shell { display:grid; gap: clamp(2rem, 4vw, 3.5rem); max-width: 980px; }
    .contact-intro { max-width: 42rem; margin-inline:auto; text-align:center; display: grid; gap: .8rem; }
    .contact-lead { color: var(--color-text-muted); }
    app-social-links { display:flex; justify-content:center; }
    .contact-grid { display:grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(1.1rem, 2vw, 1.5rem); }
    .contact-card {
      text-align:center;
      padding: clamp(1.35rem, 2.4vw, 1.9rem);
      border-radius:var(--radius-lg);
      background: linear-gradient(150deg, color-mix(in oklch, var(--color-surface), transparent 0%), color-mix(in oklch, var(--color-surface-2), transparent 8%));
      border:1px solid color-mix(in oklch, var(--color-border), transparent 8%);
      box-shadow: var(--shadow-sm);
      text-decoration: none;
      transition: transform var(--transition-ui), box-shadow var(--transition-ui);
    }
    .contact-card:hover,
    .contact-card:focus-visible { transform: translateY(-3px); box-shadow: var(--shadow-md); border-color: rgba(176,128,78,.24); }
    .contact-card-title { font-family: var(--font-display); font-size: 1.35rem; color: var(--color-text); }
    .contact-card-desc { margin:.65rem auto 0; color: var(--color-text-muted); max-width: 24ch; }
    @media (max-width: 900px) {
      .contact-grid { grid-template-columns: 1fr; max-width: 36rem; margin-inline:auto; }
    }
  `],
})
export class ContactPageComponent {
  readonly cfg = inject(BusinessConfigService);
  readonly reservationSvc = inject(ReservationService);
}
