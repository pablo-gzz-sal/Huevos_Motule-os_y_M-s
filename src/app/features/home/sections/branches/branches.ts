import { Component, inject } from '@angular/core';
import { BusinessConfigService } from '../../../../core/services/business-config.service';

@Component({
  selector: 'app-branches',
  standalone: true,
  template: `
    @if (cfg.config().branches?.enabled) {
      <section class="branches-section section-pad" id="sucursales">
        <div class="container">
          <div class="section-header">
            <span class="eyebrow">{{ cfg.config().branches!.eyebrow }}</span>
            <h2 class="text-h2">{{ cfg.config().branches!.heading }}</h2>
            <p class="section-subtitle">{{ cfg.config().branches!.subheading }}</p>
          </div>

          <div class="branches-grid">
            @for (branch of cfg.config().branches!.branches; track branch.id) {
              <div class="branch-card">
                @if (branch.image) {
                  <div class="branch-img-wrap">
                    <img [src]="branch.image" [alt]="branch.name + ' — ' + branch.neighborhood"
                         width="700" height="420" loading="lazy" class="branch-img" />
                    @if (branch.tag) {
                      <span class="branch-tag">{{ branch.tag }}</span>
                    }
                  </div>
                }
                <div class="branch-body">
                  <h3 class="branch-name">{{ branch.name }}</h3>
                  <p class="branch-address">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {{ branch.address }}, {{ branch.city }}
                  </p>
                  <div class="branch-hours">
                    @for (h of branch.hours; track h.day) {
                      <span class="hours-row">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {{ h.day }}: {{ h.hours }}
                      </span>
                    }
                  </div>
                  @if (branch.phone) {
                    <p class="branch-phone">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      {{ branch.phone }}
                    </p>
                  }
                  <div class="branch-actions">
                    <a [href]="branch.googleMapsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                      Ver en mapa
                    </a>
                    @if (branch.instagram) {
                      <a [href]="branch.instagram" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm" aria-label="Instagram {{ branch.name }}">
                        Instagram
                      </a>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    }
  `,
  styles: [`
    .branches-section { background: var(--color-surface-offset); }
    .section-header { text-align: center; max-width: 640px; margin: 0 auto var(--space-12); }
    .section-subtitle { color: var(--color-text-muted); margin-top: var(--space-3); }

    .branches-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(320px,100%), 1fr));
      gap: var(--space-8);
    }

    .branch-card {
      background: var(--color-surface);
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease;
    }
    .branch-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }

    .branch-img-wrap { position: relative; aspect-ratio: 16/9; overflow: hidden; }
    .branch-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
    .branch-card:hover .branch-img { transform: scale(1.04); }

    .branch-tag {
      position: absolute; top: var(--space-3); left: var(--space-3);
      background: var(--color-primary); color: #fff;
      font-size: var(--text-xs); font-weight: 700;
      padding: 0.25rem 0.75rem; border-radius: var(--radius-full);
      letter-spacing: 0.04em; text-transform: uppercase;
    }

    .branch-body { padding: var(--space-6); display: grid; gap: var(--space-3); }

    .branch-name {
      font-family: var(--font-display);
      font-size: var(--text-xl);
      color: var(--color-text);
      line-height: 1.2;
    }

    .branch-address, .branch-phone {
      display: flex; align-items: flex-start; gap: var(--space-2);
      color: var(--color-text-muted); font-size: var(--text-sm);
    }
    .branch-address svg, .branch-phone svg { flex-shrink: 0; margin-top: 2px; color: var(--color-primary); }

    .branch-hours { display: flex; flex-direction: column; gap: var(--space-1); }
    .hours-row {
      display: flex; align-items: center; gap: var(--space-2);
      font-size: var(--text-sm); color: var(--color-text-muted);
    }
    .hours-row svg { color: var(--color-primary); flex-shrink: 0; }

    .branch-actions { display: flex; gap: var(--space-3); margin-top: var(--space-2); flex-wrap: wrap; }
  `],
})
export class BranchesComponent {
  readonly cfg = inject(BusinessConfigService);
}
