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
      <div class="hero-media" #bg [style.background-image]="'url(' + cfg.config().sectionCopy.images.heroBackground + ')'">
        <div class="hero-overlay"></div>
      </div>

      <div class="container hero-shell">
        <div class="hero-copy" #el>
          <span class="eyebrow">{{ cfg.hero().locationLabel }}</span>
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

          <div class="hero-meta">
            @for (cat of cfg.categories().slice(0, 3); track cat.id) {
              <div class="hero-pill">{{ cat.name }}</div>
            }
          </div>
        </div>

        <div class="hero-spotlight" #el>
          <div class="spotlight-card">
            <p class="spotlight-kicker">{{ cfg.config().sectionCopy.menuHighlights.eyebrow }}</p>
            <h2 class="spotlight-title">{{ featuredItemName }}</h2>
            <p class="spotlight-text">
              {{ cfg.config().sectionCopy.menuHighlights.subheading }}
            </p>
          </div>
        </div>
      </div>

      <button class="hero-scroll-cue" (click)="scrollToConcept()" [attr.aria-label]="cfg.hero().scrollCueLabel">
        <span>{{ cfg.hero().scrollCueLabel }}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </button>
    </section>
  `,
  styles: [`
    :host { display:block; }
    .hero {
      position: relative;
      min-height: calc(100svh - 1.5rem);
      width: min(calc(100% - clamp(1rem, 5vw, 4rem)), var(--page-rail));
      margin: clamp(.8rem, 1.8vw, 1.25rem) auto clamp(1rem, 2.5vw, 2rem);
      display: grid;
      align-items: end;
      overflow: clip;
      border-radius: clamp(1.5rem, 2.8vw, 2.4rem);
      background: linear-gradient(180deg, color-mix(in oklch, var(--color-bg), transparent 68%), var(--color-bg));
      box-shadow: 0 30px 80px rgba(79,57,37,.13);
    }
    .hero-media {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transform: scale(1.02);
    }
    .hero-overlay {
      position:absolute;
      inset:0;
      background:
        linear-gradient(180deg, color-mix(in oklch, var(--color-bg), transparent 88%) 0%, color-mix(in oklch, var(--color-bg), transparent 54%) 48%, color-mix(in oklch, var(--color-bg), transparent 10%) 100%),
        linear-gradient(90deg, color-mix(in oklch, var(--color-bg), transparent 18%) 0%, color-mix(in oklch, var(--color-bg), transparent 76%) 58%, color-mix(in oklch, var(--color-bg), transparent 48%) 100%);
    }
    .hero-shell {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: minmax(0, 1.12fr) minmax(280px, .74fr);
      gap: clamp(1.25rem, 3vw, 3rem);
      align-items: end;
      padding-top: 8rem;
      padding-bottom: 5.5rem;
    }
    .hero-copy {
      max-width: 43rem;
      padding: clamp(1.35rem, 3vw, 2.5rem);
      border-radius: clamp(1.25rem, 2vw, 1.8rem);
      backdrop-filter: blur(16px) saturate(1.08);
      background:
        linear-gradient(135deg, color-mix(in oklch, var(--color-surface), transparent 16%), color-mix(in oklch, var(--color-surface-2), transparent 30%)),
        color-mix(in oklch, var(--color-surface), transparent 20%);
      border: 1px solid color-mix(in oklch, var(--color-border), transparent 35%);
      box-shadow: 0 22px 70px rgba(79,57,37,.14);
    }
    .hero-title {
      font-size: clamp(3rem, 7vw, 6rem);
      line-height: .95;
      letter-spacing: -0.03em;
      color: var(--color-text);
      margin-top: .5rem;
    }
    .hero-title em {
      font-style: italic;
      color: var(--color-primary);
      font-weight: 500;
    }
    .hero-subtitle {
      max-width: 40rem;
      margin-top: 1rem;
      font-size: clamp(1rem, 1.8vw, 1.2rem);
      color: var(--color-text-muted);
    }
    .hero-actions {
      display:flex;
      flex-wrap:wrap;
      gap:.75rem;
      margin-top: 1.5rem;
    }
    .hero-meta {
      display:flex;
      flex-wrap:wrap;
      gap:.6rem;
      margin-top: 1.25rem;
    }
    .hero-pill {
      padding: .62rem .9rem;
      border-radius: 999px;
      background: color-mix(in oklch, var(--color-surface), transparent 10%);
      border: 1px solid color-mix(in oklch, var(--color-border), transparent 35%);
      color: var(--color-text-muted);
      font-size: .88rem;
      font-weight: 600;
    }
    .hero-spotlight {
      display:flex;
      justify-content:flex-end;
    }
    .spotlight-card {
      max-width: 22rem;
      padding: 1.35rem;
      border-radius: 1.35rem;
      background: linear-gradient(160deg, color-mix(in oklch, var(--color-surface), transparent 4%), color-mix(in oklch, var(--color-surface-2), transparent 22%));
      box-shadow: 0 20px 54px rgba(79,57,37,.14);
      border: 1px solid color-mix(in oklch, var(--color-border), transparent 35%);
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
    .spotlight-text {
      margin-top:.75rem;
      color: var(--color-text-muted);
      font-size:.95rem;
    }
    .hero-scroll-cue {
      position:absolute;
      left:50%;
      bottom:1.2rem;
      transform:translateX(-50%);
      z-index:2;
      display:flex;
      align-items:center;
      gap:.5rem;
      padding:.65rem .9rem;
      border-radius:999px;
      background: color-mix(in oklch, var(--color-surface), transparent 18%);
      border:1px solid color-mix(in oklch, var(--color-border), transparent 35%);
      color: var(--color-text-muted);
      backdrop-filter: blur(8px);
    }
    @media (max-width: 900px) {
      .hero-shell {
        grid-template-columns: 1fr;
        padding-top: 7rem;
      }
      .hero {
        min-height: calc(100svh - 1.2rem);
        width: min(calc(100% - 1rem), var(--page-rail));
        margin-top: .6rem;
      }
      .hero-copy {
        padding: 1.4rem;
        border-radius: 1.5rem;
      }
      .hero-title {
        font-size: clamp(2.7rem, 12vw, 4.4rem);
      }
      .hero-spotlight {
        justify-content: stretch;
      }
      .spotlight-card {
        max-width: none;
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
