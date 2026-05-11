import { Component, input } from '@angular/core';
import { MenuItem } from '../../../core/config/business.config';

@Component({
  selector: 'app-menu-item-row',
  standalone: true,
  template: `
    <article class="menu-list-item">
      <div class="mli-info">
        <div class="mli-header">
          <h3 class="mli-name">{{ item().name }}</h3>
          @if (item().tag) {
            <span class="badge mli-tag" [attr.data-tag]="item().tag">
              {{ tagLabel(item().tag!) }}
            </span>
          }
        </div>
        <p class="mli-desc">{{ item().description }}</p>
      </div>
      <span class="mli-price">{{ item().price }}</span>
    </article>
  `,
  styles: [`
    .menu-list-item {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: var(--space-6);
      padding: var(--space-5) var(--space-4);
      border-radius: var(--radius-md);
      border: 1px solid transparent;
      border-bottom-color: color-mix(in oklch, var(--color-divider), transparent 36%);
      transition: background var(--transition-ui), transform var(--transition-ui);
    }
    .menu-list-item:hover { background: color-mix(in oklch, var(--color-primary), transparent 92%); border-color: color-mix(in oklch, var(--color-primary), transparent 72%); transform: translateY(-1px); }
    .mli-info { flex: 1; }
    .mli-header { display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-2); flex-wrap: wrap; }
    .mli-name { font-family: var(--font-display); font-size: var(--text-lg); }
    .mli-tag  { font-size: 0.65rem; }
    .mli-desc { font-size: var(--text-sm); color: var(--color-text-muted); max-width: 60ch; line-height: 1.6; }
    .mli-price {
      font-family: var(--font-display);
      font-size: var(--text-lg);
      color: var(--color-primary);
      white-space: nowrap;
      font-weight: 600;
      flex-shrink: 0;
    }
    [data-tag="signature"] { background: var(--color-primary); color: var(--color-text-inverse); }
    [data-tag="popular"] { background: var(--color-cta); color: color-mix(in oklch, var(--color-text), black 18%); }
    [data-tag="new"], [data-tag="vegan"] { background: var(--color-accent); color: var(--color-text-inverse); }
    @media (max-width: 520px) {
      .menu-list-item { flex-direction: column; align-items:center; text-align:center; gap: var(--space-3); }
      .mli-header { justify-content:center; }
    }
  `],
})
export class MenuItemRowComponent {
  readonly item = input.required<MenuItem>();

  tagLabel(tag: string): string {
    const map: Record<string, string> = { signature: 'Firma', popular: 'Popular', new: 'Nuevo', vegan: 'Vegano' };
    return map[tag] ?? tag;
  }
}
