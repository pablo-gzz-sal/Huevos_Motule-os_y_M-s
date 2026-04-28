import { InjectionToken, Provider } from '@angular/core';
import { BusinessConfig } from './business.config';
import { environment } from '../../../environments/environment';

export const ACTIVE_BUSINESS_CONFIG = new InjectionToken<BusinessConfig>('ACTIVE_BUSINESS_CONFIG');

export function provideActiveBusinessConfig(): Provider {
  return {
    provide: ACTIVE_BUSINESS_CONFIG,
    useValue: environment.activeBusinessConfig,
  };
}
