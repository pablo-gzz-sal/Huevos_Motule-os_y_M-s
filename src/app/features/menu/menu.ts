import { Component, inject, signal, computed } from '@angular/core';
import { BusinessConfigService } from '../../core/services/business-config.service';
import { ReservationService } from '../../core/services/reservation.service';
import { MenuItemRowComponent } from '../../shared/components/menu-item-row/menu-item-row';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [MenuItemRowComponent],
  template: `
    <main id="main-content" class="menu-page">
      <!-- Page hero -->
      <div class="menu-hero">
        <div class="menu-hero-bg" [style.background-image]="'url(' + cfg.config().sectionCopy.images.menuPageHeroImage + ' )'"></div>
        <div class="menu-hero-overlay"></div>
        <div class="container menu-hero-content">
          <span class="eyebrow">{{cfg.config().sectionCopy.menuPage.eyebrow}}</span>
          <h1 class="text-h1">{{cfg.config().sectionCopy.menuPage.heading}}</h1>
          <p class="text-lead" style="color:var(--color-text-muted);max-width:50ch">
            {{cfg.config().sectionCopy.menuPage.lead}}
          </p>
        </div>
      </div>

      <div class="container menu-body section-pad">
        <!-- Category nav -->
        <nav class="menu-cat-nav" [attr.aria-label]="cfg.config().uiCopy.menuPageUi.categoryNavAriaLabel">
          @for (cat of cfg.categories(); track cat.id) {
            <button class="cat-anchor" [class.active]="activeSection() === cat.id"
              (click)="scrollTo(cat.id)">
              {{cat.emoji}} {{cat.name}}
            </button>
          }
        </nav>

        <!-- Sections -->
        @for (cat of cfg.categories(); track cat.id) {
          <section [id]="cat.id" class="menu-section">
            <div class="menu-section-header">
              <h2 class="text-h3">{{cat.name}}</h2>
              <p style="color:var(--color-text-muted);font-size:var(--text-sm)">{{cat.description}}</p>
            </div>
            <div class="menu-items-list">
              @for (item of itemsByCategory(cat.id); track item.id) {
                <app-menu-item-row [item]="item" />
              }
            </div>
          </section>
        }

        <!-- Reservation CTA -->
        <div class="menu-final-cta">
          <span class="rule-brand" style="margin-inline:auto"></span>
          <h2 class="text-h2" style="text-align:center">{{cfg.config().sectionCopy.menuPage.finalHeading}}</h2>
          <p style="color:var(--color-text-muted);text-align:center;max-width:46ch;margin-inline:auto">
            {{cfg.config().sectionCopy.menuPage.finalDescription}}
          </p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;margin-top:var(--space-6)">
            <button class="btn btn-cta" (click)="reservationSvc.open()">{{cfg.cta().reservationLabel}}</button>
            <a [href]="cfg.whatsappUrl()" target="_blank" rel="noopener" class="btn btn-ghost">{{cfg.cta().whatsappLabel}}</a>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [`
    .menu-page { padding-top: 0; }
    .menu-hero {
      position: relative; height: 50dvh; min-height: 340px;
      display: flex; align-items: center; overflow: hidden;
      width: min(calc(100% - clamp(1rem, 5vw, 4rem)), var(--page-rail));
      margin: clamp(.8rem, 1.8vw, 1.25rem) auto 0;
      border-radius: clamp(1.5rem, 2.8vw, 2.4rem);
      box-shadow: 0 30px 80px rgba(79,57,37,.13);
    }
    .menu-hero-bg {
      position: absolute; inset: 0;
      background-size: cover; background-position: center;
    }
    .menu-hero-overlay {
      position: absolute; inset: 0;
      background: oklch(0.10 0.01 60 / 0.65);
    }
    .menu-hero-content {
      position: relative; z-index: 2;
      padding-top: 6rem; display: flex; flex-direction: column; align-items:center; text-align:center; gap: var(--space-4);
    }
    .menu-body { max-width: 980px; }
    .menu-cat-nav {
      display: flex; flex-wrap: wrap; justify-content:center; gap: var(--space-2);
      margin-bottom: clamp(var(--space-12), 7vw, var(--space-20));
      position: sticky; top: 4.5rem; z-index: 10;
      background: rgba(255,251,247,.82);
      backdrop-filter: blur(14px);
      padding: var(--space-3) var(--space-4);
      border: 1px solid var(--color-divider);
      border-radius: var(--radius-full);
      box-shadow: 0 12px 34px rgba(79,57,37,.08);
    }
    .cat-anchor {
      padding: .7rem 1.25rem; border-radius: var(--radius-full);
      font-size: var(--text-sm); color: var(--color-text-muted);
      border: 1px solid var(--color-border); background: transparent;
      transition: all var(--transition-ui); cursor: pointer;
    }
    .cat-anchor.active, .cat-anchor:hover {
      border-color: var(--color-primary); color: var(--color-primary);
    }
    .menu-section {
      margin: 0 auto clamp(var(--space-16), 8vw, var(--space-24));
      scroll-margin-top: 8rem;
      max-width: 820px;
      padding: clamp(1.35rem, 3vw, 2rem);
      border-radius: var(--radius-lg);
      background: linear-gradient(150deg, rgba(255,255,255,.86), rgba(255,250,244,.68));
      border: 1px solid color-mix(in oklch, var(--color-border), transparent 20%);
      box-shadow: 0 18px 48px rgba(79,57,37,.07);
    }
    .menu-section-header { text-align:center; margin-bottom: var(--space-6); padding-bottom: var(--space-4); border-bottom: 1px solid var(--color-divider); }
    .menu-items-list { display: flex; flex-direction: column; }
    .menu-final-cta {
      max-width: 760px;
      margin-inline:auto;
      padding: clamp(var(--space-16), 8vw, var(--space-24)) clamp(1.35rem, 3vw, 2rem) var(--space-10);
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
      border-radius: var(--radius-xl);
      background: linear-gradient(150deg, rgba(255,255,255,.78), rgba(255,250,244,.62));
      border: 1px solid color-mix(in oklch, var(--color-border), transparent 22%);
    }
    @media (max-width: 640px) {
      .menu-hero { width: min(calc(100% - 1rem), var(--page-rail)); }
      .menu-cat-nav { border-radius: var(--radius-lg); }
      .cat-anchor { flex: 1 1 calc(50% - var(--space-2)); }
    }
  `],
})
export class MenuPageComponent {
  readonly cfg = inject(BusinessConfigService);
  readonly reservationSvc = inject(ReservationService);
  readonly activeSection = signal(this.cfg.categories()[0]?.id ?? '');

  itemsByCategory(catId: string) {
    return this.cfg.menu().filter(i => i.categoryId === catId);
  }

  scrollTo(id: string) {
    this.activeSection.set(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
