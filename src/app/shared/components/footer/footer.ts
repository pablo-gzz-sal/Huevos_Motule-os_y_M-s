import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BusinessConfigService } from '../../../core/services/business-config.service';
import { ReservationService } from '../../../core/services/reservation.service';
import { BusinessHoursComponent } from '../business-hours/business-hours';
import { SocialLinksComponent } from '../social-links/social-links';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, BusinessHoursComponent, SocialLinksComponent],
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <p class="footer-logo">{{ cfg.config().name }}</p>
            <p class="footer-tagline">{{ cfg.config().tagline }}</p>
            <p class="footer-concept">{{ cfg.config().concept }}</p>
            <app-social-links [links]="cfg.social()" />
          </div>

          <div class="footer-col">
            <p class="footer-heading">{{ cfg.config().footer.navigationHeading }}</p>
            <nav class="footer-nav">
              <a routerLink="/">{{ cfg.navigation().homeLabel }}</a>
              <a routerLink="/menu">{{ cfg.navigation().menuLabel }}</a>
              <a routerLink="/nosotros">{{ cfg.navigation().aboutLabel }}</a>
              <a routerLink="/contacto">{{ cfg.navigation().contactLabel }}</a>
            </nav>
          </div>

          <div class="footer-col">
            <p class="footer-heading">{{ cfg.config().footer.hoursHeading }}</p>
            <app-business-hours [hours]="cfg.location().hours" />
          </div>

          <div class="footer-col">
            <p class="footer-heading">{{ cfg.config().footer.contactHeading }}</p>
            <address class="footer-address">
              <p>{{ cfg.location().address }}</p>
              <p>{{ cfg.location().city }}, {{ cfg.location().state }}</p>
              @if (cfg.location().phone) {
                <a [href]="'tel:' + cfg.location().phone">{{ cfg.location().phone }}</a>
              }
              @if (cfg.location().email) {
                <a [href]="'mailto:' + cfg.location().email">{{ cfg.location().email }}</a>
              }
            </address>
          </div>
        </div>

        <div class="footer-bottom divider">
          <p>(c) {{ year }} {{ cfg.config().footer.copyrightLabel }}</p>
          <button class="btn btn-outline-brand footer-reserve" (click)="reservationSvc.open()">
            {{ cfg.cta().reservationLabel }}
          </button>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      width: min(calc(100% - clamp(1rem, 5vw, 4rem)), var(--page-rail));
      margin: clamp(1rem, 2.5vw, 2rem) auto clamp(.75rem, 2vw, 1.25rem);
      background: linear-gradient(150deg, rgba(255,255,255,.9), rgba(255,250,244,.72));
      border: 1px solid var(--color-divider);
      border-radius: clamp(1.25rem, 2.2vw, 2rem);
      box-shadow: 0 18px 60px rgba(79,57,37,.08);
      padding-block: clamp(var(--space-16), 7vw, var(--space-24)) clamp(var(--space-10), 4vw, var(--space-16));
      padding-inline: clamp(.25rem, 1.5vw, 1rem);
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: clamp(var(--space-10), 5vw, var(--space-20));
      align-items: start;
    }
    @media (min-width: 640px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
    @media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1fr 1.2fr 1fr; } }
    .footer-logo {
      font-family: var(--font-display);
      font-size: var(--text-2xl);
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: var(--space-2);
    }
    .footer-brand,
    .footer-col {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }
    .footer-tagline {
      font-size: var(--text-sm);
      letter-spacing: .1em;
      text-transform: uppercase;
      color: var(--color-text-muted);
    }
    .footer-concept {
      font-size: var(--text-sm);
      color: var(--color-text-muted);
      line-height: 1.7;
      max-width: 38ch;
      margin-bottom: var(--space-2);
    }
    .footer-heading {
      font-size: var(--text-xs);
      font-weight: 700;
      letter-spacing: .15em;
      text-transform: uppercase;
      color: var(--color-primary);
      margin-bottom: var(--space-1);
    }
    .footer-nav, .footer-address {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }
    .footer-nav a, .footer-address a {
      font-size: var(--text-sm);
      color: var(--color-text-muted);
      text-decoration: none;
      transition: color var(--transition-ui);
    }
    .footer-nav a:hover, .footer-address a:hover { color: var(--color-primary); }
    .footer-address { font-style: normal; gap: var(--space-3); }
    .footer-address p { font-size: var(--text-sm); color: var(--color-text-muted); }
    app-business-hours { display:block; }
    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: var(--space-6);
      margin-top: clamp(var(--space-12), 6vw, var(--space-20));
      padding-top: var(--space-8);
    }
    .footer-bottom p { font-size: var(--text-sm); color: var(--color-text-faint); }
    @media (max-width: 640px) {
      .site-footer { width: min(calc(100% - 1rem), var(--page-rail)); }
      .footer-grid,
      .footer-bottom { text-align:center; justify-items:center; justify-content:center; }
      .footer-brand,
      .footer-col,
      .footer-nav,
      .footer-address { align-items:center; }
      .footer-bottom { flex-direction: column; }
      .footer-reserve { width: 100%; max-width: 18rem; }
    }
  `],
})
export class FooterComponent {
  readonly cfg = inject(BusinessConfigService);
  readonly reservationSvc = inject(ReservationService);
  readonly year = new Date().getFullYear();
}
