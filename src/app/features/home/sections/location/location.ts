import { Component, inject, OnInit, ElementRef, viewChild } from '@angular/core';
import { BusinessConfigService } from '../../../../core/services/business-config.service';
import { ReservationService } from '../../../../core/services/reservation.service';
import { GsapService } from '../../../../core/animations/gsap.service';
import { BusinessHoursComponent } from '../../../../shared/components/business-hours/business-hours';
import { MapCardComponent } from '../../../../shared/components/map-card/map-card';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [BusinessHoursComponent, MapCardComponent, SectionHeaderComponent],
  template: `
    <section class="section-pad location-section" id="ubicacion" aria-labelledby="location-heading">
      <div class="container location-shell">
        <div class="location-copy" #copy>
          <app-section-header
            [eyebrow]="cfg.config().sectionCopy.location.eyebrow"
            [heading]="cfg.config().sectionCopy.location.heading"
            headingId="location-heading"
          />
          <p class="location-lead">
            {{ cfg.config().location.address }}, {{ cfg.config().location.city }}, {{ cfg.config().location.state }}
          </p>

          <app-business-hours [title]="cfg.config().location.hoursTitle" [hours]="cfg.config().location.hours" />

          <div class="location-actions">
            <a class="btn btn-primary" [href]="cfg.config().location.googleMapsUrl" target="_blank" rel="noopener noreferrer">
              {{ cfg.config().location.openMapsLabel }}
            </a>
            <button class="btn btn-ghost" (click)="reservationSvc.open()">{{ cfg.cta().reservationLabel }}</button>
          </div>
        </div>

        <div class="location-visual" #visual>
          <app-map-card
            [imageSrc]="cfg.config().sectionCopy.images.locationMapImage"
            [imageAlt]="cfg.config().location.mapImageAlt ?? cfg.config().name"
            [mapsUrl]="cfg.config().location.googleMapsUrl"
            [businessName]="cfg.config().name"
            [city]="cfg.config().location.city"
            [ariaLabel]="cfg.config().location.mapAriaLabel"
          />
        </div>
      </div>
    </section>
  `,
  styles: [`
    .location-section {
      background:
        linear-gradient(180deg, color-mix(in oklch, var(--color-surface), transparent 0%), var(--color-bg));
      box-shadow: 0 18px 60px rgba(31,24,16,.07);
    }
    .location-shell {
      display:grid;
      grid-template-columns: minmax(0, .86fr) minmax(280px, 1fr);
      gap: clamp(2rem, 4.5vw, 4rem);
      align-items:center;
      max-width: 1040px;
    }
    .location-lead { margin-top:-.75rem; color: var(--color-text-muted); max-width: 42rem; }
    app-business-hours { display:block; margin-top:clamp(1.5rem, 3vw, 2.25rem); }
    .location-actions { display:flex; flex-wrap:wrap; gap:1rem; margin-top:clamp(1.5rem, 3vw, 2.25rem); }
    @media (max-width: 900px) {
      .location-shell { grid-template-columns: 1fr; max-width: 40rem; }
      .location-copy { text-align: center; }
      .location-actions { justify-content: center; }
    }
  `],
})
export class LocationComponent implements OnInit {
  readonly cfg = inject(BusinessConfigService);
  readonly reservationSvc = inject(ReservationService);
  private readonly gsap = inject(GsapService);
  readonly copy = viewChild<ElementRef>('copy');
  readonly visual = viewChild<ElementRef>('visual');

  async ngOnInit(): Promise<void> {
    await new Promise(r => setTimeout(r, 100));
    const copy = this.copy()?.nativeElement;
    if (copy) await this.gsap.revealOnScroll(copy.querySelectorAll(':scope > *'), 0.08);
    const visual = this.visual()?.nativeElement;
    if (visual) await this.gsap.imageReveal(visual);
  }
}
