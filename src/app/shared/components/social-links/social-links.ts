import { Component, input } from '@angular/core';
import { SocialLinks } from '../../../core/config/business.config';

@Component({
  selector: 'app-social-links',
  standalone: true,
  template: `
    <div class="social-links" aria-label="Redes sociales">
      @if (links().instagram) { <a [href]="links().instagram" target="_blank" rel="noopener noreferrer">Instagram</a> }
      @if (links().facebook) { <a [href]="links().facebook" target="_blank" rel="noopener noreferrer">Facebook</a> }
      @if (links().tiktok) { <a [href]="links().tiktok" target="_blank" rel="noopener noreferrer">TikTok</a> }
      @if (links().tripadvisor) { <a [href]="links().tripadvisor" target="_blank" rel="noopener noreferrer">TripAdvisor</a> }
      @if (links().youtube) { <a [href]="links().youtube" target="_blank" rel="noopener noreferrer">YouTube</a> }
    </div>
  `,
  styles: [`
    .social-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: inherit;
      gap: .65rem;
    }
    a {
      color: var(--color-text-muted);
      text-decoration: none;
      font-size: var(--text-sm);
      padding: .45rem .7rem;
      border-radius: var(--radius-full);
      border: 1px solid color-mix(in oklch, var(--color-border), transparent 35%);
      background: rgba(255,255,255,.52);
      transition: color var(--transition-ui), border-color var(--transition-ui), background var(--transition-ui), transform var(--transition-ui);
    }
    a:hover { color: var(--color-primary); border-color: color-mix(in oklch, var(--color-primary), transparent 62%); background: rgba(255,255,255,.84); transform: translateY(-1px); }
  `],
})
export class SocialLinksComponent {
  readonly links = input.required<SocialLinks>();
}
