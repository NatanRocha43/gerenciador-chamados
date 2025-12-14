import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FormsModule),

    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: false
        }
      }
    })
  ]
};
