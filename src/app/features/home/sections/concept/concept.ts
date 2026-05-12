import { Component, OnInit, ElementRef, inject, viewChild } from '@angular/core';
import { GsapService } from '../../../../core/animations/gsap.service';
import { BusinessConfigService } from '../../../../core/services/business-config.service';

@Component({
  selector: 'app-concept',
  standalone: true,
  template: `
    <section class="section-pad" id="nosotros" aria-labelledby="concept-heading">
      <div class="container">
        <div class="concept-grid">
          <div class="concept-image-wrap" #imgWrap>
            <img
              [src]="cfg.config().sectionCopy.images.conceptImage"
              [alt]="cfg.config().sectionCopy.images.conceptImageAlt"
              width="800" height="1000" loading="lazy"
              class="concept-image"
            />
            <div class="concept-badge">
              <span class="concept-badge-number">{{ cfg.config().sectionCopy.testimonials.proofItems[0].value }}</span>
              <span class="concept-badge-label">{{cfg.config().sectionCopy.concept.foundedLabel}}</span>
            </div>
          </div>
          <div class="concept-text" #textBlock>
            <span class="eyebrow">{{cfg.config().sectionCopy.concept.eyebrow}}</span>
            <h2 class="text-h2" id="concept-heading">{{cfg.config().sectionCopy.concept.heading}}</h2>
            <span class="rule-brand"></span>
            <p class="text-lead" style="color:var(--color-text-muted)">
              {{cfg.config().sectionCopy.concept.lead}}
            </p>
            <p style="color:var(--color-text-muted);font-size:var(--text-base);margin-top:var(--space-4);line-height:1.8">
              {{cfg.config().sectionCopy.concept.body}}
            </p>
            <div class="concept-stats">
              @for (item of cfg.config().sectionCopy.testimonials.proofItems; track item.label) {
                <div class="stat">
                  <span class="stat-num">{{ item.value }}</span>
                  <span class="stat-label">{{ item.label }}</span>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .concept-grid {
      display: grid; grid-template-columns: 1fr;
      gap: clamp(var(--space-8), 5vw, var(--space-16));
      align-items: center;
      max-width: 1080px;
      margin-inline: auto;
    }
    @media (min-width: 768px) { .concept-grid { grid-template-columns: 1fr 1fr; } }
    .concept-image-wrap {
      position: relative;
      max-width: 34rem;
      margin-inline: auto;
      padding: clamp(.65rem, 1.5vw, 1rem);
      border: 1px solid color-mix(in oklch, var(--color-primary), transparent 76%);
      background: linear-gradient(145deg, color-mix(in oklch, var(--color-surface), transparent 0%), color-mix(in oklch, var(--color-surface-2), transparent 8%));
      box-shadow: 0 20px 60px rgba(31, 24, 16, .11);
    }
    .concept-image-wrap::before {
      content: '';
      position: absolute;
      inset: clamp(1.3rem, 3vw, 2rem) auto auto clamp(-.9rem, -1vw, -.5rem);
      width: 34%;
      height: 46%;
      background: color-mix(in oklch, var(--color-accent), transparent 28%);
      z-index: -1;
    }
    .concept-image {
      width: 100%; border-radius: var(--radius-md);
      object-fit: cover; aspect-ratio: 4/5;
      box-shadow: 0 22px 64px rgba(96, 54, 22, .12);
    }
    .concept-badge {
      position: absolute; bottom: var(--space-6); left: calc(-1 * var(--space-4));
      background: var(--color-primary);
      color: var(--color-text-inverse);
      border: 1px solid color-mix(in oklch, var(--color-cta), transparent 35%);
      border-radius: var(--radius-md);
      padding: var(--space-4) var(--space-6);
      display: flex; flex-direction: column;
      box-shadow: var(--shadow-lg);
      max-width: 15rem;
    }
    @media (max-width: 768px) { .concept-badge { left: var(--space-4); } }
    .concept-badge-number {
      font-family: var(--font-display); font-size: var(--text-2xl);
      color: var(--color-cta); line-height: 1;
    }
    .concept-badge-label {
      font-size: var(--text-xs); letter-spacing: 0.1em;
      text-transform: uppercase; color: color-mix(in oklch, var(--color-text-inverse), transparent 16%);
      margin-top: var(--space-1);
    }
    .concept-text { display: flex; flex-direction: column; gap: var(--space-4); max-width: 35rem; }
    .concept-text .text-h2 { max-width: 11ch; }
    .concept-stats {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: .75rem;
      padding-top: var(--space-6);
      margin-top: var(--space-4);
    }
    @media (max-width: 767px) {
      .concept-text { text-align: center; margin-inline: auto; }
      .rule-brand { margin-inline: auto; }
      .concept-text .text-h2 { max-width: none; }
      .concept-stats { grid-template-columns: 1fr; gap: .65rem; }
      .stat { align-items: center; }
    }
    .stat {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
      padding: .95rem;
      border-top: 2px solid color-mix(in oklch, var(--color-primary), transparent 50%);
      background: color-mix(in oklch, var(--color-surface), transparent 0%);
      border: 1px solid color-mix(in oklch, var(--color-border), transparent 8%);
      border-radius: var(--radius-lg);
    }
    .stat-num {
      font-family: var(--font-display); font-size: var(--text-xl);
      color: var(--color-primary); font-weight: 600;
    }
    .stat-label { font-size: var(--text-xs); color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.08em; }
  `],
})
export class ConceptComponent implements OnInit {
  readonly cfg = inject(BusinessConfigService);
  private readonly gsap = inject(GsapService);
  readonly imgWrap  = viewChild<ElementRef>('imgWrap');
  readonly textBlock = viewChild<ElementRef>('textBlock');

  async ngOnInit() {
    await new Promise(r => setTimeout(r, 100));
    const img = this.imgWrap()?.nativeElement;
    const txt = this.textBlock()?.nativeElement;
    if (img) await this.gsap.imageReveal(img);
    if (txt) await this.gsap.revealOnScroll(txt.querySelectorAll(':scope > *'), 0.06);
  }
}
