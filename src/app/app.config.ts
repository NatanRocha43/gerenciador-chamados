import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
