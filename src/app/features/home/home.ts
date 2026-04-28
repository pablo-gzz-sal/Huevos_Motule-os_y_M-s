import { Component, inject } from '@angular/core';
import { BusinessConfigService } from '../../core/services/business-config.service';
import { HeroComponent }          from './sections/hero/hero';
import { ConceptComponent }       from './sections/concept/concept';
import { MenuHighlightsComponent } from './sections/menu-highlights/menu-highlights';
import { PromotionsComponent }    from './sections/promotions/promotions';
import { GalleryComponent }       from './sections/gallery/gallery';
import { BranchesComponent } from './sections/branches/branches';
import { TestimonialsComponent }  from './sections/testimonials/testimonials';
import { LocationComponent }      from './sections/location/location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ConceptComponent,
    MenuHighlightsComponent,
    PromotionsComponent,
    GalleryComponent,
    BranchesComponent,
    TestimonialsComponent,
    LocationComponent,
  ],
  template: `
    <main id="main-content">
      @for (section of cfg.sections(); track section.id) {
        @if (section.enabled) {
          @switch (section.id) {
            @case ('hero') { <app-hero /> }
            @case ('concept') { <app-concept /> }
            @case ('menu-highlights') { <app-menu-highlights /> }
            @case ('promotions') { <app-promotions /> }
            @case ('gallery') { <app-gallery /> }
            @case ('testimonials') { <app-testimonials /> }
            @case ('branches') { <app-branches /> }
            @case ('location') { <app-location /> }
          }
        }
      }
    </main>
  `,
})
export class HomeComponent {
  readonly cfg = inject(BusinessConfigService);
}
