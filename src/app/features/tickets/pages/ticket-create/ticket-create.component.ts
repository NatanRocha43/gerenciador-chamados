import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { TicketService } from '../../../../services/ticket.service';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ticket-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PageHeaderComponent,
    InputTextModule,
    TextareaModule,
    SelectModule,
    ButtonModule
  ],
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss']
})
export class TicketCreateComponent {

  title = '';
  description = '';
  category: string | null = null;

  categories = [
    { label: 'Sistema', value: 'Sistema' },
    { label: 'Hardware', value: 'Hardware' },
    { label: 'Periféricos', value: 'Periféricos' },
    { label: 'Acesso', value: 'Acesso' },
    { label: 'Outros', value: 'Outros' }
  ];

  constructor(
    private ticketService: TicketService,
    private router: Router
  ) {}

  salvar() {
    if (!this.title || !this.description || !this.category) {
      return;
    }

    this.ticketService.addTicket({
      id: Date.now(),
      title: this.title,
      description: this.description,
      category: this.category
    });

    this.router.navigate(['/tickets']);
  }

  voltar() {
    this.router.navigate(['/tickets']);
  }
}
