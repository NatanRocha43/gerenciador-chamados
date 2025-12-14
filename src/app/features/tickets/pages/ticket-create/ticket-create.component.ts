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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
    ButtonModule,
    ToastModule
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
    private router: Router,
    private messageService: MessageService
  ) {}

  salvar() {
    if (!this.title || !this.description || !this.category) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Preencha todos os campos obrigatórios.'
      });
      return;
    }

   this.ticketService.addTicket({
  title: this.title,
  description: this.description,
  category: this.category
});

    this.messageService.add({
      severity: 'success',
      summary: 'Chamado criado',
      detail: 'O chamado foi criado com sucesso!'
    });

    setTimeout(() => {
      this.router.navigate(['/tickets']);
    }, 800);
  }

  voltar() {
    this.router.navigate(['/tickets']);
  }
}
