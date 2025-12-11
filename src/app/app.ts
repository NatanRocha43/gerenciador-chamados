import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <div style="padding: 20px">
      <p-button label="PrimeNG funcionando"></p-button>
    </div>
  `,
})
export class AppComponent {}
