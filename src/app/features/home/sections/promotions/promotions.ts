import { Component, inject, OnInit, ElementRef, viewChild } from '@angular/core';
import { BusinessConfigService } from '../../../../core/services/business-config.service';
import { ReservationService } from '../../../../core/services/reservation.service';
import { GsapService } from '../../../../core/animations/gsap.service';

@Component({
  selector: 'app-promotions',
  standalone: true,
  template: `
    <section class="section-pad promotions-section" id="promociones" aria-labelledby="promotions-heading">
      <div class="container">
        <div class="section-header promotions-header" #hdr>
          <span class="eyebrow">{{ cfg.config().sectionCopy.promotions.eyebrow }}</span>
          <h2 class="text-h2" id="promotions-heading">{{ cfg.config().sectionCopy.promotions.heading }}</h2>
        </div>

        <div class="promotions-grid" #grid>
          @for (promo of cfg.promotions(); track promo.id) {
            <article class="promo-card micro-lift" tabindex="0">
              <p class="promo-kicker">{{ promo.badge || 'Promoción' }}</p>
              <h3 class="promo-title">{{ promo.title }}</h3>
              <p class="promo-desc">{{ promo.description }}</p>
              <button class="promo-link" (click)="reservationSvc.open()">{{ cfg.cta().reservationLabel }}</button>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .promotions-section {
      background:
        linear-gradient(180deg, color-mix(in oklch, var(--color-surface), transparent 0%), color-mix(in oklch, var(--color-surface-2), transparent 5%));
      box-shadow: 0 18px 60px rgba(31, 24, 16, .08);
    }
    .promotions-header { text-align:center; max-width: 46rem; margin: 0 auto clamp(2rem, 4vw, 3rem); }
    .section-subtitle { margin-top:.7rem; color: var(--color-ink-700); }
    .promotions-grid {
      display:grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(1.15rem, 2.2vw, 1.65rem);
      max-width: 980px;
      margin-inline: auto;
    }
    .promo-card {
      padding: clamp(1.45rem, 2.5vw, 2rem); border-radius: 1.1rem;
      background: linear-gradient(160deg, color-mix(in oklch, var(--color-surface), transparent 0%), color-mix(in oklch, var(--color-accent), transparent 82%));
      border:1px solid color-mix(in oklch, var(--color-border), transparent 8%);
      box-shadow: 0 16px 40px rgba(31, 24, 16, .1);
      transition: transform .24s ease, box-shadow .24s ease, border-color .24s ease;
    }
    .promo-card:hover,
    .promo-card:focus-visible { transform: translateY(-4px); box-shadow: 0 24px 56px rgba(79,57,37,.12); border-color: rgba(176,128,78,.24); }
    .promo-kicker { font-size:.76rem; letter-spacing:0; text-transform:uppercase; color: var(--color-text-muted); font-weight: 800; }
    .promo-title { margin-top:.55rem; font-family: var(--font-display); font-size: 1.55rem; line-height:1.04; color: var(--color-text); }
    .promo-desc { margin-top:.7rem; color: var(--color-text-muted); line-height:1.65; }
    .promo-link { margin-top:1rem; color: var(--color-primary); font-weight:800; }
    @media (max-width: 900px) { .promotions-grid { grid-template-columns: 1fr; max-width: 36rem; } .promotions-header { text-align:center; } }
  `],
})
export class PromotionsComponent implements OnInit {
  readonly cfg = inject(BusinessConfigService);
  readonly reservationSvc = inject(ReservationService);
  private readonly gsap = inject(GsapService);
  readonly hdr = viewChild<ElementRef>('hdr');
  readonly grid = viewChild<ElementRef>('grid');

  async ngOnInit(): Promise<void> {
    await new Promise(r => setTimeout(r, 120));
    const hdr = this.hdr()?.nativeElement;
    if (hdr) await this.gsap.revealOnScroll(hdr.querySelectorAll(':scope > *'), 0.06);
    const grid = this.grid()?.nativeElement;
    if (grid) await this.gsap.revealOnScroll(grid.querySelectorAll('.promo-card'), 0.08);
  }
}
