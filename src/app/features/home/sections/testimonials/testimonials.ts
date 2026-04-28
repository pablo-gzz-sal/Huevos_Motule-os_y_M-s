import { Component, inject, OnInit, ElementRef, viewChild } from '@angular/core';
import { BusinessConfigService } from '../../../../core/services/business-config.service';
import { GsapService } from '../../../../core/animations/gsap.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section class="section-pad testimonials-section" id="testimonios" aria-labelledby="testimonials-heading">
      <div class="container">
        <div class="section-header testimonials-header" #hdr>
          <span class="eyebrow">{{ cfg.config().sectionCopy.testimonials.eyebrow }}</span>
          <h2 class="text-h2" id="testimonials-heading">{{ cfg.config().sectionCopy.testimonials.heading }}</h2>
        </div>

        <div class="testimonials-grid" #grid>
          @for (item of cfg.testimonials(); track item.name) {
            <article class="testimonial-card micro-tilt" tabindex="0">
              <p class="testimonial-quote">"{{ item.text }}"</p>
              <div class="testimonial-meta">
                <strong>{{ item.name }}</strong>
                <span>{{ item.source }}</span>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
      background:
        linear-gradient(180deg, rgba(250,247,241,.72), rgba(255,252,248,.96)),
        radial-gradient(circle at 20% 0%, rgba(176,128,78,.12), transparent 24rem);
      box-shadow: 0 18px 60px rgba(79,57,37,.06);
    }
    .testimonials-header { text-align:center; margin: 0 auto clamp(1.75rem, 3.5vw, 2.75rem); max-width: 46rem; }
    .testimonials-grid {
      display:grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: clamp(1.15rem, 2.2vw, 1.65rem);
      max-width: 980px;
      margin-inline: auto;
    }
    .testimonial-card {
      padding: clamp(1.45rem, 2.5vw, 2rem); border-radius: 1.1rem;
      background: linear-gradient(160deg, rgba(255,255,255,.9), rgba(255,248,240,.72));
      border:1px solid rgba(92,64,51,.08);
      box-shadow: 0 16px 40px rgba(79,57,37,.07);
      transition: transform .24s ease, box-shadow .24s ease, border-color .24s ease;
    }
    .testimonial-card:hover,
    .testimonial-card:focus-visible { transform: translateY(-4px); box-shadow: 0 24px 56px rgba(79,57,37,.12); border-color: rgba(176,128,78,.22); }
    .testimonial-quote { color: var(--color-ink-900); font-size: 1.02rem; line-height:1.75; }
    .testimonial-meta { margin-top: 1rem; display:grid; gap:.2rem; color: var(--color-ink-700); }
    .testimonial-meta span { color: var(--color-ink-500); font-size:.88rem; }
    @media (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr; max-width: 36rem; } .testimonials-header { text-align:center; } }
  `],
})
export class TestimonialsComponent implements OnInit {
  readonly cfg = inject(BusinessConfigService);
  private readonly gsap = inject(GsapService);
  readonly hdr = viewChild<ElementRef>('hdr');
  readonly grid = viewChild<ElementRef>('grid');

  async ngOnInit(): Promise<void> {
    await new Promise(r => setTimeout(r, 120));
    const hdr = this.hdr()?.nativeElement;
    if (hdr) await this.gsap.revealOnScroll(hdr.querySelectorAll(':scope > *'), 0.06);
    const grid = this.grid()?.nativeElement;
    if (grid) await this.gsap.revealOnScroll(grid.querySelectorAll('.testimonial-card'), 0.08);
  }
}
