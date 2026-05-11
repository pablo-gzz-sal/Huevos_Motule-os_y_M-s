import { Component, input } from '@angular/core';
import { LocationConfig } from '../../../core/config/business.config';

@Component({
  selector: 'app-business-hours',
  standalone: true,
  template: `
    <div class="location-card hours-card">
      @if (title()) {
        <p class="card-kicker">{{ title() }}</p>
      }
      <div class="hours-list">
        @for (row of hours(); track row.day) {
          <div class="hours-row" [class.closed]="row.closed">
            <span>{{ row.day }}</span>
            <strong>{{ row.hours }}</strong>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .location-card {
      padding: 1.2rem;
      border-radius: var(--radius-lg);
      background: linear-gradient(150deg, color-mix(in oklch, var(--color-surface), transparent 0%), color-mix(in oklch, var(--color-surface-2), transparent 8%));
      border: 1px solid color-mix(in oklch, var(--color-border), transparent 8%);
      box-shadow: var(--shadow-md);
      max-width: 34rem;
      margin-inline: auto;
    }
    .card-kicker {
      color: var(--color-text-muted);
      font-size: .8rem;
      text-transform: uppercase;
      letter-spacing: .12em;
      margin-bottom: .8rem;
    }
    .hours-list { display:grid; gap:.6rem; }
    .hours-row { display:flex; justify-content:space-between; gap:1rem; color: var(--color-text-muted); padding-block: .1rem; }
    .hours-row strong { color: var(--color-text); }
    .hours-row.closed { opacity: .62; }
    @media (max-width: 420px) {
      .hours-row { flex-direction: column; align-items: center; gap:.1rem; text-align:center; }
    }
  `],
})
export class BusinessHoursComponent {
  readonly title = input<LocationConfig['hoursTitle']>('');
  readonly hours = input.required<LocationConfig['hours']>();
}
