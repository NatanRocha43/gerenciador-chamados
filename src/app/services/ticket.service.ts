import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ticket } from '../core/models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private ticketsSubject = new BehaviorSubject<Ticket[]>([]);
  tickets$ = this.ticketsSubject.asObservable();

  constructor() {
    this.loadMock();
  }

  private async loadMock() {
    try {
      console.log('Carregando mock...');
      const response = await fetch('/mock/tickets.json');

      if (!response.ok) {
        throw new Error('Erro ao buscar JSON');
      }

      const data: Ticket[] = await response.json();
      console.log('Mock carregado:', data);

      this.ticketsSubject.next(data);
    } catch (error) {
      console.error('Erro ao carregar mock de tickets', error);
    }
  }

  addTicket(ticket: Ticket) {
    const current = this.ticketsSubject.value;
    this.ticketsSubject.next([...current, ticket]);
  }
}
