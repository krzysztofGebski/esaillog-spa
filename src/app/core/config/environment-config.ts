import { InjectionToken } from '@angular/core';

export interface EnvironmentConfig {
  production: boolean;
  apiUrl: string;
}

export const ENV_CONFIG = new InjectionToken<EnvironmentConfig>('app.environment.config');
