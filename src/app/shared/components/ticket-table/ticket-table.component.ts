import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Ticket } from '../../../core/models/ticket.model';

@Component({
  selector: 'app-ticket-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.scss']
})
export class TicketTableComponent {

  @Input() tickets: Ticket[] = [];
}
