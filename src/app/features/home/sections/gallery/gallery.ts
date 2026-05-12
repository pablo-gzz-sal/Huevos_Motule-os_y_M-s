import { Component, inject, signal, computed, OnInit, ElementRef, viewChild } from '@angular/core';
import { BusinessConfigService } from '../../../../core/services/business-config.service';
import { GsapService } from '../../../../core/animations/gsap.service';

type GalleryCategory = 'all' | 'food' | 'drinks' | 'interior' | 'events';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <section class="section-pad gallery-section" id="galeria" aria-labelledby="gallery-heading">
      <div class="container">
        <div class="section-header gallery-header" #hdr>
          <span class="eyebrow">{{ cfg.config().sectionCopy.gallery.eyebrow }}</span>
          <h2 class="text-h2" id="gallery-heading">{{ cfg.config().sectionCopy.gallery.heading }}</h2>
        </div>

        <div class="gallery-filters" role="group" aria-label="Filtrar galería">
          @for (f of filters(); track f.id) {
            <button class="filter-btn" [class.active]="activeFilter() === f.id" (click)="setFilter(f.id)" [attr.aria-pressed]="activeFilter() === f.id">
              {{ f.label }}
            </button>
          }
        </div>

        <div class="gallery-grid" #galleryGrid>
          @for (item of filteredItems(); track item.id) {
            <figure class="gallery-item" tabindex="0" role="button" (click)="openLightbox(item)" (keydown.enter)="openLightbox(item)" (keydown.space)="openLightbox(item); $event.preventDefault()">
              <img [src]="item.src" [alt]="item.alt" width="600" height="450" loading="lazy" class="gallery-img aspect-menu" />
              <figcaption class="gallery-caption">
                <span>{{ item.caption }}</span>
              </figcaption>
            </figure>
          }
        </div>
      </div>

      @if (lightboxItem()) {
        <div class="gallery-lightbox" (click)="closeLightbox()" role="dialog" aria-modal="true" [attr.aria-label]="lightboxItem()?.alt">
          <button class="lightbox-close" (click)="closeLightbox()" aria-label="Cerrar">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <img [src]="lightboxItem()?.src" [alt]="lightboxItem()?.alt" class="lightbox-img" (click)="$event.stopPropagation()" />
          @if (lightboxItem()?.caption) {
            <p class="lightbox-caption">{{ lightboxItem()?.caption }}</p>
          }
        </div>
      }
    </section>
  `,
  styles: [`
    .gallery-section {
      background:
        linear-gradient(180deg, color-mix(in oklch, var(--color-surface-2), transparent 8%), color-mix(in oklch, var(--color-surface), transparent 2%));
      box-shadow: 0 18px 60px rgba(31, 24, 16, .08);
    }
    .gallery-header { text-align:center; margin: 0 auto clamp(1.5rem, 3vw, 2.25rem); max-width: 46rem; }
    .gallery-filters { display:flex; flex-wrap:wrap; justify-content:center; gap:.75rem; margin: 0 auto clamp(1.75rem, 3vw, 2.5rem); }
    .filter-btn {
      padding:.75rem 1.25rem; border-radius:999px; background: color-mix(in oklch, var(--color-surface), transparent 0%);
      border:1px solid color-mix(in oklch, var(--color-border), transparent 20%); color: var(--color-text-muted); font-weight:700;
      transition: background .2s ease, border-color .2s ease, color .2s ease;
    }
    .filter-btn:hover { border-color: color-mix(in oklch, var(--color-primary), transparent 45%); color: var(--color-primary); }
    .filter-btn.active { background: var(--color-primary); color:white; border-color: var(--color-primary); }
    .gallery-grid {
      display:grid;
      grid-template-columns: repeat(12, 1fr);
      gap: clamp(1rem, 2vw, 1.5rem);
      max-width: 1020px;
      margin-inline: auto;
    }
    .gallery-item {
      grid-column: span 4;
      position:relative;
      overflow:hidden;
      border-radius: var(--radius-lg);
      cursor:pointer;
      min-height: 18rem;
      box-shadow: 0 18px 44px rgba(31, 24, 16, .12);
      transition: transform .28s ease, box-shadow .28s ease;
    }
    .gallery-item:hover { transform: translateY(-3px); box-shadow: 0 24px 58px rgba(96, 54, 22, .15); }
    .gallery-item:nth-child(4n+1) { grid-column: span 7; }
    .gallery-item:nth-child(4n+2) { grid-column: span 5; }
    .gallery-item:nth-child(4n+3) { grid-column: span 5; }
    .gallery-item:nth-child(4n+4) { grid-column: span 7; }
    .gallery-img { width:100%; height:100%; object-fit:cover; transition: transform .6s ease; }
    .gallery-item:hover .gallery-img { transform: scale(1.05); }
    .gallery-caption {
      position:absolute; left:1rem; right:1rem; bottom:1rem;
      padding:.8rem 1rem; border-radius: var(--radius-md);
      background: color-mix(in oklch, var(--color-surface), transparent 4%); backdrop-filter: blur(8px);
      color: var(--color-text); font-weight:700;
    }
    .gallery-lightbox {
      position:fixed; inset:0; z-index:120;
      display:grid; place-items:center;
      background: rgba(26,20,16,.72);
      padding: 1.5rem;
    }
    .lightbox-img { max-width:min(92vw, 980px); max-height:78vh; border-radius:var(--radius-xl); box-shadow:0 24px 60px rgba(0,0,0,.28); }
    .lightbox-caption { color:white; margin-top:1rem; text-align:center; }
    .lightbox-close {
      position:absolute; top:1rem; right:1rem; width:2.5rem; height:2.5rem; border-radius:999px;
      background: rgba(255,255,255,.18); color:white; display:grid; place-items:center;
      transition: background .2s ease, transform .2s ease;
    }
    .lightbox-close:hover { background: rgba(255,255,255,.28); transform: rotate(90deg); }
    @media (max-width: 768px) {
      .gallery-header { text-align:center; }
      .gallery-grid { grid-template-columns: 1fr; }
      .gallery-item,
      .gallery-item:nth-child(n) { grid-column: auto; min-height: 16rem; }
      .filter-btn { flex: 1 1 calc(50% - .65rem); }
    }
  `],
})
export class GalleryComponent implements OnInit {
  readonly cfg = inject(BusinessConfigService);
  private readonly gsap = inject(GsapService);
  readonly hdr = viewChild<ElementRef>('hdr');
  readonly galleryGrid = viewChild<ElementRef>('galleryGrid');

  readonly activeFilter = signal<GalleryCategory>('all');
  readonly lightboxItem = signal<any | null>(null);
  readonly filters = computed(() => this.cfg.config().sectionCopy.gallery.filters);
  readonly filteredItems = computed(() => {
    const filter = this.activeFilter();
    const items = this.cfg.gallery();
    return filter === 'all' ? items : items.filter(i => i.category === filter);
  });

  setFilter(filter: GalleryCategory): void { this.activeFilter.set(filter); }
  openLightbox(item: any): void { this.lightboxItem.set(item); }
  closeLightbox(): void { this.lightboxItem.set(null); }

  async ngOnInit(): Promise<void> {
    await new Promise(r => setTimeout(r, 100));
    const hdr = this.hdr()?.nativeElement;
    if (hdr) await this.gsap.revealOnScroll(hdr.querySelectorAll(':scope > *'), 0.06);
    const grid = this.galleryGrid()?.nativeElement;
    if (grid) await this.gsap.revealOnScroll(grid.querySelectorAll('.gallery-item'), 0.05);
  }
}
