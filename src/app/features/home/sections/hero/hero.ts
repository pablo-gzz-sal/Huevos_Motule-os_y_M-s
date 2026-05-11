import { Component, inject, OnInit, ElementRef, viewChildren, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BusinessConfigService } from '../../../../core/services/business-config.service';
import { GsapService } from '../../../../core/animations/gsap.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero" [attr.aria-label]="'Hero - ' + cfg.config().name">
      <div
        class="hero-media"
        #bg
        [style.background-image]="'url(' + cfg.config().sectionCopy.images.heroBackground + ')'"
        [style.--hero-overlay-opacity]="cfg.hero().overlayOpacity"
      >
        <div class="hero-overlay"></div>
      </div>

      <div class="container hero-shell">
        <div class="hero-copy" #el>
          <span class="hero-kicker">{{ cfg.hero().locationLabel }}</span>
          <h1 class="hero-title">
            {{ headlineLine1 }}<br />
            <em>{{ headlineLine2 }}</em>
          </h1>
          <p class="hero-subtitle">{{ cfg.hero().subheadline }}</p>

          <div class="hero-actions">
            <a routerLink="/menu" class="btn btn-primary">{{ cfg.hero().ctaLabel }}</a>
            <a [href]="cfg.config().location.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">
              {{ cfg.hero().ctaSecondaryLabel }}
            </a>
          </div>
        </div>

        <div class="hero-spotlight" #el>
          <div class="spotlight-card">
            <p class="spotlight-kicker">{{ cfg.config().sectionCopy.menuHighlights.eyebrow }}</p>
            <h2 class="spotlight-title">{{ featuredItemName }}</h2>
            <p class="spotlight-text">
              {{ cfg.config().sectionCopy.menuHighlights.subheading }}
            </p>
            <div class="spotlight-meta">
              <span>{{ cfg.config().location.hours[0].hours }}</span>
              <span>{{ cfg.config().location.phone }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-service-strip" aria-label="Informacion rapida">
        @for (item of quickSignals; track item.label) {
          <div class="service-item">
            <span>{{ item.label }}</span>
            <strong>{{ item.value }}</strong>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    :host{display:block}
    .hero{position:relative;min-height:calc(100svh - 1rem);width:min(calc(100% - clamp(.8rem,3vw,2rem)),1360px);margin:clamp(.55rem,1vw,.9rem) auto clamp(1.2rem,2.5vw,2rem);display:grid;align-items:center;overflow:clip;border-radius:clamp(1rem,2vw,1.65rem);background:var(--color-primary);box-shadow:0 34px 100px rgba(31,24,16,.22)}
    .hero-media {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
    }
    .hero-overlay { position:absolute; inset:0; background: linear-gradient(180deg, rgba(10, 8, 5, .26), rgba(10, 8, 5, .82)), linear-gradient(90deg, rgba(10, 8, 5, .92), rgba(10, 8, 5, .44) 46%, rgba(10, 8, 5, .18)); opacity: max(.88, var(--hero-overlay-opacity, .38)); }
    .hero::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,.035) 1px, transparent 1px); background-size: 54px 54px; pointer-events: none; opacity:.55; }
    .hero-shell {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: minmax(0, 1.12fr) minmax(280px, .74fr);
      gap: clamp(1.25rem, 3vw, 3rem);
      align-items: center;
      padding-top: 6.5rem;
      padding-bottom: 6.8rem;
    }
    .hero-copy { width: min(43rem, 100%); text-shadow: 0 2px 22px rgba(0,0,0,.55); }
    .hero-kicker {
      display: inline-flex;
      align-items: center;
      gap: .65rem;
      font-size: var(--text-sm);
      font-weight: 800;
      color: color-mix(in oklch, var(--color-cta), white 10%);
      text-shadow: 0 1px 18px rgba(0,0,0,.62);
    }
    .hero-kicker::before {
      content: '';
      width: 2.7rem;
      height: 2px;
      background: currentColor;
    }
    .hero-title {
      font-size: clamp(3rem, 6.8vw, 5.9rem);
      line-height: .92;
      letter-spacing: 0;
      color: var(--color-text-inverse);
      margin-top: .5rem;
      max-width: 13ch;
      overflow-wrap: anywhere;
      text-shadow: 0 4px 32px rgba(0,0,0,.62);
    }
    .hero-title em {
      display: block;
      max-width: 12ch;
      margin-top: .2rem;
      font-size: .74em;
      line-height: 1;
      font-style: normal;
      color: color-mix(in oklch, var(--color-cta), white 4%);
      font-weight: 700;
    }
    .hero-subtitle {
      max-width: 42rem;
      width: 100%;
      margin-top: 1rem;
      font-size: clamp(1rem, 1.8vw, 1.2rem);
      color: color-mix(in oklch, var(--color-text-inverse), transparent 6%);
      font-weight: 500;
      text-shadow: 0 2px 20px rgba(0,0,0,.62);
    }
    .hero-actions {
      display:flex;
      flex-wrap:wrap;
      gap:.75rem;
      margin-top: 1.5rem;
    }
    .hero-spotlight {
      display:flex;
      justify-content:flex-end;
    }
    .spotlight-card {
      max-width: 22rem;
      padding: 1.35rem;
      border-radius: .95rem;
      background:
        linear-gradient(160deg, color-mix(in oklch, var(--color-surface), transparent 1%), color-mix(in oklch, var(--color-surface-2), transparent 8%));
      box-shadow: 0 24px 62px rgba(0, 0, 0, .2);
      border: 1px solid color-mix(in oklch, var(--color-border), transparent 8%);
      backdrop-filter: blur(14px) saturate(1.08);
    }
    .spotlight-kicker {
      font-size:.78rem;
      text-transform:uppercase;
      letter-spacing:.14em;
      color: var(--color-text-muted);
    }
    .spotlight-title {
      margin-top:.45rem;
      font-size:1.35rem;
      line-height:1.08;
      color: var(--color-text);
    }
    .spotlight-text{margin-top:.75rem;color:var(--color-text-muted)}
    .spotlight-meta {
      margin-top: 1rem;
      display: grid;
      gap: .35rem;
      padding-top: 1rem;
      border-top: 1px solid color-mix(in oklch, var(--color-border), transparent 20%);
      color: var(--color-primary);
      font-size: .86rem;
      font-weight: 800;
    }
    .hero-service-strip { position: absolute; left: clamp(1rem, 3vw, 2.25rem); right: clamp(1rem, 3vw, 2.25rem); bottom: 1.15rem; z-index: 3; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-radius: .95rem; overflow: hidden; background: color-mix(in oklch, var(--color-surface), transparent 4%); border: 1px solid color-mix(in oklch, var(--color-border), transparent 8%); box-shadow: 0 20px 54px rgba(0,0,0,.22); backdrop-filter: blur(14px); }
    .service-item {
      padding: .95rem 1rem;
      display: grid;
      gap: .2rem;
      border-right: 1px solid color-mix(in oklch, var(--color-border), transparent 12%);
    }
    .service-item:last-child { border-right: 0; }
    .service-item span {
      color: var(--color-text-muted);
      font-size: .78rem;
      font-weight: 800;
      text-transform: uppercase;
    }
    .service-item strong {
      color: var(--color-text);
      font-size: .96rem;
      line-height: 1.2;
    }
    @media (max-width: 900px) {
      .hero-shell {
        grid-template-columns: 1fr;
        padding-top: 4.8rem;
        padding-bottom: 6.5rem;
        overflow: hidden;
      }
      .hero {
        min-height: calc(92svh - 1.2rem);
        width: min(calc(100% - 1rem), var(--page-rail));
        margin-top: .6rem;
      }
      .hero-copy{max-width:21rem;padding:.6rem}
      .hero-title {
        font-size: clamp(2.1rem, 9vw, 3.05rem);
        max-width: 11ch;
      }
      .hero-title em { max-width: 11ch; }
      .hero-subtitle{max-width:21rem}
      .hero-actions{flex-direction:column;align-items:stretch;max-width:21rem}
      .hero-actions .btn{width:100%;padding-inline:.9rem}
      .hero-spotlight {
        display: none;
      }
      .hero-service-strip {
        display: none;
      }
    }
  `]
})
export class HeroComponent implements OnInit {
  readonly cfg = inject(BusinessConfigService);
  private readonly gsap = inject(GsapService);
  readonly els = viewChildren<ElementRef<HTMLElement>>('el');
  readonly bg = viewChild<ElementRef<HTMLElement>>('bg');

  get headlineLine1() { return this.cfg.hero().headline.split('\n')[0] ?? this.cfg.hero().headline; }
  get headlineLine2() { return this.cfg.hero().headline.split('\n')[1] ?? ''; }
  get featuredItemName() { return this.cfg.featuredItems()[0]?.name ?? this.cfg.config().tagline; }
  get quickSignals() {
    return [
      { label: 'Horario', value: this.cfg.config().location.hours[0]?.hours ?? 'Horario publicado' },
      { label: 'Especialidad', value: this.cfg.categories()[0]?.name ?? this.cfg.config().category },
      { label: 'Accion', value: this.cfg.cta().whatsappLabel },
    ];
  }

  async ngOnInit(): Promise<void> {
    const items = this.els().map(ref => ref.nativeElement);
    await this.gsap.heroEntrance(items);

    const bg = this.bg()?.nativeElement;
    if (bg) {
      await this.gsap.parallax(bg, 8);
    }
  }

  scrollToConcept(): void {
    document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
