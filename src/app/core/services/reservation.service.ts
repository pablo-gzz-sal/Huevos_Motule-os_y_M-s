import { Injectable, inject, signal } from '@angular/core';
import { BusinessConfigService } from './business-config.service';

export interface ReservationForm {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
}

export type ReservationState = 'idle' | 'open' | 'success';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private readonly configSvc = inject(BusinessConfigService);
  readonly state   = signal<ReservationState>('idle');
  readonly preview = signal<string>('');

  open()  { this.state.set('open'); }
  close() { this.state.set('idle'); this.preview.set(''); }

  buildWhatsappMessage(form: ReservationForm, template: string): string {
    return template
      .replaceAll('{{name}}', form.name)
      .replaceAll('{{phone}}', form.phone)
      .replaceAll('{{date}}', form.date)
      .replaceAll('{{time}}', form.time)
      .replaceAll('{{guests}}', String(form.guests))
      .replaceAll('{{notes}}', form.notes || 'Sin notas');
  }

  /** In mock mode: show success; in live mode: open WhatsApp deep-link */
  submit(form: ReservationForm, config = this.configSvc.reservation()): void {
    const msg = this.buildWhatsappMessage(form, config.messageTemplate);
    this.preview.set(msg);

    if (config.mode === 'mock') {
      this.state.set('success');
      return;
    }
    // Live: open WhatsApp deep link
    window.open(this.configSvc.whatsappUrl(msg, config.whatsappNumber), '_blank');
    this.state.set('success');
  }
}
