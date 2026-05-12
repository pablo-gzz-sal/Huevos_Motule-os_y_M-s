import { Component, inject, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/components/nav/nav';
import { FooterComponent } from './shared/components/footer/footer';
import { ReservationModalComponent } from './shared/components/reservation-modal/reservation-modal';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button/whatsapp-button';
import { BusinessConfigService } from './core/services/business-config.service';
import { StickyCTAComponent } from './shared/components/sticky-cta/sticky-cta';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    FooterComponent,
    ReservationModalComponent,
    WhatsappButtonComponent,
    StickyCTAComponent,
  ],
  template: `
    <a href="#main-content" class="sr-only skip-link">{{ cfg.config().uiCopy.accessibility.skipToContentLabel }}</a>
    @if (loading()) {
      <div class="app-loader" role="status" aria-live="polite" aria-label="Cargando sitio">
        <div class="loader-panel">
          <span class="loader-kicker">{{ cfg.config().location.city }}</span>
          <strong>{{ cfg.config().name }}</strong>
          <span class="loader-line" aria-hidden="true"></span>
        </div>
      </div>
    }
    <app-nav />
    <div class="app-frame" [class.app-frame-loading]="loading()">
      <router-outlet />
      <app-footer />
    </div>
    <!-- Global overlays -->
    <app-reservation-modal />
    <app-whatsapp-button />
    <app-sticky-cta />
  `,
  styles: [`
    .skip-link:focus {
      position: fixed; top: var(--space-4); left: var(--space-4); z-index: 9999;
      background: var(--color-primary); color: var(--color-text-inverse);
      padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
      font-size: var(--text-sm); text-decoration: none;
    }
    .app-frame {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 360ms var(--ease-out-expo), transform 360ms var(--ease-out-expo);
    }
    .app-frame-loading {
      opacity: .18;
      transform: translateY(.35rem);
      pointer-events: none;
    }
    .app-loader {
      position: fixed;
      inset: 0;
      z-index: 9998;
      display: grid;
      place-items: center;
      padding: 1.25rem;
      background: linear-gradient(135deg, color-mix(in oklch, var(--color-bg), black 4%), color-mix(in oklch, var(--color-surface), var(--color-primary) 8%));
      color: var(--color-text);
    }
    .loader-panel {
      width: min(25rem, 100%);
      display: grid;
      gap: .45rem;
      text-align: center;
      padding: clamp(1.35rem, 4vw, 2rem);
      border-radius: var(--radius-xl);
      background: color-mix(in oklch, var(--color-surface), transparent 2%);
      border: 1px solid color-mix(in oklch, var(--color-border), transparent 10%);
      box-shadow: 0 30px 90px rgba(31, 24, 16, .16);
    }
    .loader-kicker {
      justify-self: center;
      font-size: .75rem;
      font-weight: 900;
      text-transform: uppercase;
      color: var(--color-primary);
    }
    .loader-panel strong {
      font-family: var(--font-display);
      font-size: clamp(1.7rem, 6vw, 2.8rem);
      line-height: 1;
    }
    .loader-line {
      position: relative;
      height: .22rem;
      margin-top: .85rem;
      overflow: hidden;
      border-radius: 999px;
      background: color-mix(in oklch, var(--color-border), transparent 28%);
    }
    .loader-line::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 42%;
      border-radius: inherit;
      background: linear-gradient(90deg, var(--color-primary), var(--color-cta));
      animation: loaderLine 980ms var(--ease-out-expo) infinite;
    }
    @keyframes loaderLine {
      0% { transform: translateX(-110%); }
      100% { transform: translateX(250%); }
    }
    @media (prefers-reduced-motion: reduce) {
      .app-frame,
      .loader-line::after { transition: none; animation: none; }
    }
  `],
})
export class AppComponent {
  readonly cfg = inject(BusinessConfigService);
  private readonly router = inject(Router);
  readonly loading = signal(true);

  constructor() {
    const finishInitialLoad = () => this.finishLoading(520);

    if (document.readyState === 'complete') {
      finishInitialLoad();
    } else {
      window.addEventListener('load', finishInitialLoad, { once: true });
      window.setTimeout(finishInitialLoad, 1800);
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading.set(true);
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.finishLoading(260);
      }
    });
  }

  private finishLoading(delay: number): void {
    window.setTimeout(() => this.loading.set(false), delay);
  }
}
