import { Component, input } from '@angular/core';

@Component({
  selector: 'app-map-card',
  standalone: true,
  template: `
    <a class="map-card" [href]="mapsUrl()" target="_blank" rel="noopener noreferrer" [attr.aria-label]="ariaLabel()">
      <img [src]="imageSrc()" [alt]="imageAlt()" width="800" height="600" loading="lazy" />
      <div class="location-badge">
        <span aria-hidden="true">Map</span>
        <div>
          <strong>{{ businessName() }}</strong>
          <p>{{ city() }}</p>
        </div>
      </div>
    </a>
  `,
  styles: [`
    .map-card {
      position: relative;
      overflow: hidden;
      display: block;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      color: inherit;
      text-decoration: none;
      max-width: 38rem;
      margin-inline: auto;
      border: 1px solid color-mix(in oklch, var(--color-border), transparent 18%);
    }
    .map-card img { width:100%; height:100%; min-height:24rem; object-fit:cover; display:block; transition: transform .55s ease; }
    .map-card:hover img { transform: scale(1.04); }
    .map-card:hover { box-shadow: 0 28px 68px rgba(79,57,37,.14); }
    .location-badge {
      position:absolute;
      left:1rem;
      right:1rem;
      bottom:1rem;
      display:flex;
      align-items:center;
      gap:.8rem;
      padding:.9rem 1rem;
      border-radius:var(--radius-md);
      background: color-mix(in oklch, var(--color-surface), transparent 18%);
      border: 1px solid var(--color-border);
      backdrop-filter: blur(8px);
    }
    .location-badge p { margin:0; color: var(--color-text-muted); }
    @media (max-width: 520px) {
      .map-card img { min-height: 18rem; }
      .location-badge { align-items:flex-start; }
    }
  `],
})
export class MapCardComponent {
  readonly imageSrc = input.required<string>();
  readonly imageAlt = input.required<string>();
  readonly mapsUrl = input.required<string>();
  readonly businessName = input.required<string>();
  readonly city = input.required<string>();
  readonly ariaLabel = input<string | undefined>();
}
