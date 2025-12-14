import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

import { Ticket } from '../../../../core/models/ticket.model';
import { TicketService } from '../../../../services/ticket.service';

import { TicketTableComponent } from '../../../../shared/components/ticket-table/ticket-table.component';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { SearchInputComponent } from '../../../../shared/components/search-input/search-input.component';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    PageHeaderComponent,
    SearchInputComponent,
    TicketTableComponent
  ],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent {

  tickets$: Observable<Ticket[]>;

  constructor(
    private ticketService: TicketService,
    private router: Router
  ) {
    this.tickets$ = this.ticketService.tickets$;
  }

  onSearch(value: string) {
    const term = value.toLowerCase();

    this.tickets$ = this.ticketService.tickets$.pipe(
      map(tickets =>
        tickets.filter(ticket =>
          ticket.title.toLowerCase().includes(term) ||
          ticket.description.toLowerCase().includes(term) ||
          ticket.category.toLowerCase().includes(term)
        )
      )
    );
  }

  irParaCriarChamado() {
    this.router.navigate(['/tickets/new']);
  }
}
