import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ReservationService } from '../../../core/services/reservation.service';
import { BusinessConfigService } from '../../../core/services/business-config.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header" [class.menu-open]="menuOpen()">
      <div class="container nav-shell">
        <a routerLink="/" class="brand-logo" [attr.aria-label]="cfg.config().name + ' - ' + cfg.navigation().homeLabel">
          <span class="brand-mark" aria-hidden="true">{{ brandInitials }}</span>
          <span class="brand-name">{{ cfg.config().name }}</span>
        </a>

        <nav class="nav-desktop" [attr.aria-label]="cfg.config().uiCopy.accessibility.primaryNavLabel">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" class="nav-link">{{ cfg.navigation().homeLabel }}</a>
          <a routerLink="/menu" routerLinkActive="active" class="nav-link">{{ cfg.navigation().menuLabel }}</a>
          <a routerLink="/nosotros" routerLinkActive="active" class="nav-link">{{ cfg.navigation().aboutLabel }}</a>
          <a routerLink="/contacto" routerLinkActive="active" class="nav-link">{{ cfg.navigation().contactLabel }}</a>
        </nav>

        <div class="nav-actions">
          <button class="btn btn-primary desktop-cta" (click)="openReservation()">{{ cfg.cta().reservationLabel }}</button>
          <button class="nav-toggle" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()" [attr.aria-label]="cfg.config().uiCopy.mobileMenu.triggerAriaLabel">
            <span></span><span></span>
          </button>
        </div>
      </div>

      @if (menuOpen()) {
        <div class="mobile-backdrop" (click)="toggleMenu()" aria-hidden="true"></div>
        <div class="mobile-sheet" role="dialog" aria-modal="true" [attr.aria-label]="cfg.config().uiCopy.mobileMenu.triggerAriaLabel">
          <div class="mobile-sheet-inner">
            <div class="mobile-sheet-head">
              <span class="eyebrow">{{ cfg.config().uiCopy.mobileMenu.eyebrow }}</span>
              <button class="mobile-close" (click)="toggleMenu()" [attr.aria-label]="cfg.config().uiCopy.mobileMenu.closeAriaLabel">x</button>
            </div>
            <a routerLink="/" class="mobile-link" (click)="toggleMenu()">{{ cfg.navigation().homeLabel }}</a>
            <a routerLink="/menu" class="mobile-link" (click)="toggleMenu()">{{ cfg.navigation().menuLabel }}</a>
            <a routerLink="/nosotros" class="mobile-link" (click)="toggleMenu()">{{ cfg.navigation().aboutLabel }}</a>
            <a routerLink="/contacto" class="mobile-link" (click)="toggleMenu()">{{ cfg.navigation().contactLabel }}</a>
            <button class="btn btn-primary w-full" (click)="openReservation(); toggleMenu()">{{ cfg.cta().reservationLabel }}</button>
          </div>
        </div>
      }
    </header>
  `,
  styles: [`
    .site-header {
      position: sticky;
      top: clamp(.6rem, 1.8vw, 1rem);
      z-index: 50;
      width: min(calc(100% - clamp(1rem, 5vw, 4rem)), var(--page-rail));
      margin: 0 auto;
      border-radius: var(--radius-full);
      backdrop-filter: blur(18px) saturate(1.08);
      background: color-mix(in oklch, var(--color-surface), transparent 16%);
      border: 1px solid color-mix(in oklch, var(--color-primary), transparent 78%);
      box-shadow: 0 18px 48px rgba(96, 54, 22, .12);
    }
    .nav-shell { display:flex; align-items:center; justify-content:space-between; min-height: 4.4rem; gap: 1rem; padding-inline: clamp(.85rem, 2vw, 1.4rem); }
    .brand-logo { display:flex; align-items:center; gap:.75rem; color: var(--color-text); text-decoration:none; }
    .brand-mark {
      width:2.35rem; height:2.35rem; display:grid; place-items:center; border-radius:999px;
      background: radial-gradient(circle at 38% 32%, var(--color-accent), var(--color-primary) 72%);
      color: var(--color-text-inverse);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.5), 0 10px 24px rgba(96, 54, 22, .16);
      font-weight: 800;
    }
    .brand-name { font-family: var(--font-display); font-size: 1.5rem; }
    .nav-desktop { display:flex; align-items:center; gap:1.2rem; }
    .nav-link { color: var(--color-text-muted); text-decoration:none; font-weight:700; }
    .nav-link.active { color: var(--color-text); }
    .nav-actions { display:flex; align-items:center; gap:.75rem; }
    .nav-toggle {
      display:none; width:2.8rem; height:2.8rem; border-radius:999px;
      border:1px solid color-mix(in oklch, var(--color-primary), transparent 78%);
      background: color-mix(in oklch, var(--color-surface), transparent 10%);
      align-items:center; justify-content:center; flex-direction:column; gap:.28rem;
      transition: transform .24s ease, background .24s ease, box-shadow .24s ease;
      box-shadow: 0 10px 24px rgba(79,57,37,.08);
    }
    .menu-open .nav-toggle { transform: rotate(90deg); }
    .nav-toggle span { width:1rem; height:2px; background: var(--color-text); display:block; border-radius:999px; transition: transform .24s ease, opacity .24s ease; }
    .mobile-backdrop {
      position: fixed; inset: 0; z-index: 58; background: rgba(39,29,20,.18);
      backdrop-filter: blur(6px); animation: fadeIn .2s ease;
    }
    .mobile-sheet {
      position: fixed; inset: 5.8rem 0 auto 0; z-index: 60; padding: 0 1rem 1rem;
      animation: sheetIn .28s cubic-bezier(0.16,1,0.3,1);
    }
    .mobile-sheet-inner {
      width:min(100%, 34rem);
      margin-inline:auto;
      display:grid; gap:.7rem; padding:1rem; border-radius:1.4rem;
      background: color-mix(in oklch, var(--color-surface), transparent 2%);
      border:1px solid color-mix(in oklch, var(--color-primary), transparent 78%);
      box-shadow: 0 22px 54px rgba(79,57,37,.14);
    }
    .mobile-sheet-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:.25rem; }
    .mobile-close { width:2.3rem; height:2.3rem; border-radius:999px; background: rgba(255,255,255,.7); color: var(--color-text); font-size:1.4rem; }
    .mobile-link {
      padding: 1rem 1rem; border-radius: 1rem; text-decoration:none;
      color: var(--color-text); background: rgba(255,255,255,.78); font-weight:700;
      transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
    }
    .mobile-link:hover { transform: translateX(4px); background: rgba(255,255,255,.95); box-shadow: 0 12px 24px rgba(79,57,37,.08); }
    @keyframes sheetIn { from { opacity:0; transform: translateY(-14px) scale(.98); } to { opacity:1; transform: translateY(0) scale(1); } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @media (max-width: 900px) {
      .site-header { width: min(calc(100% - 1rem), var(--page-rail)); }
      .nav-desktop, .desktop-cta { display:none; }
      .nav-toggle { display:flex; }
      .brand-name { font-size: 1.35rem; }
    }
  `],
})
export class NavComponent {
  readonly cfg = inject(BusinessConfigService);
  private readonly reservation = inject(ReservationService);
  readonly menuOpen = signal(false);
  get brandInitials(): string {
    return this.cfg.config().name.split(' ').slice(0, 2).map(part => part[0]).join('');
  }

  toggleMenu(): void { this.menuOpen.update(v => !v); }
  openReservation(): void { this.reservation.open(); }
}
