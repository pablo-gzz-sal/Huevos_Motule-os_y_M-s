import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="section-header" [class.centered]="align() === 'center'">
      @if (eyebrow()) {
        <span class="eyebrow">{{ eyebrow() }}</span>
      }
      <h2 class="text-h2" [id]="headingId()">{{ heading() }}</h2>
      @if (subheading()) {
        <p class="text-lead section-subtitle">{{ subheading() }}</p>
      }
    </div>
  `,
  styles: [`
    .section-header {
      max-width: 48rem;
      margin: 0 auto 2rem;
      text-align: center;
    }
    .section-header.centered {
      text-align: center;
      margin-inline: auto;
    }
    .section-subtitle {
      color: var(--color-text-muted);
      margin-top: .75rem;
    }
  `],
})
export class SectionHeaderComponent {
  readonly eyebrow = input('');
  readonly heading = input.required<string>();
  readonly subheading = input('');
  readonly headingId = input<string | null>(null);
  readonly align = input<'left' | 'center'>('center');
}
